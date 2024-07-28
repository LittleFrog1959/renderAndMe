let sv = require ('../sharedData.js')
let msgHistory = []

const express = require("express")
const router = express.Router()

router.use(logger)

router.get("/", (req, res) => {
  res.render("court/courtMain", {size: sv.squadSize, numbers: sv.squadNumbers, names:sv.squadNames, refs:sv.teamRefs, msg:JSON.stringify (msgHistory)})
})

// Receive a game stat event
router.post("/statEvent", (req, res) => {
    // Fix teamRefs if the user does not pick any team members (client won't return even an identifier for teamRefs)
    // and there is a problem that the client returns a string (rather than an array) if there is only one team member
    // selected
    if (req.body.statKind === 'teamUpdate') {
        if (req.body.team === undefined) {
            sv.teamRefs = []
        } else {
            
            if (typeof req.body.team === 'string') {
                sv.teamRefs [0] = req.body.team
            } else {
            sv.teamRefs = req.body.team
            }
        }
    }
    // Save the event in a shared variable for future development
    sv.eventRaw = req.body
    // Append an ASCII version of the body to a history of up to 10 items
    count = msgHistory.push (JSON.stringify(sv.eventRaw))
    if (count > 10) {
        msgHistory.shift ()
    }
    console.log (req.body)
    res.redirect ("/court")
})

/*
router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user)
    res.send(`Get User With ID ${req.params.id}`)
  })
  .put((req, res) => {
    res.send(`Update User With ID ${req.params.id}`)
  })
  .delete((req, res) => {
    res.send(`Delete User With ID ${req.params.id}`)
  })
*/

function logger(req, res, next) {
  console.log("Court logger", req.method, req.originalUrl)
  next()
}

module.exports = router
