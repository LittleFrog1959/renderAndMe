let sv = require ('../sharedData.js')

const express = require("express")
const router = express.Router()

router.use(logger)

router.get("/", (req, res) => {
  res.render("squad/squadSelection", {size:sv.squadSize, names:sv.squadNames, numbers:sv.squadNumbers, teamSelected:sv.teamRefs})
})

/*
router.get("/new", (req, res) => {
  res.render("users/new")
})
*/
router.post("/squadUpdate", (req, res) => {
    sv.squadNames = req.body.Name
    sv.squadNumbers = req.body.Number
    // Because we can't write to elements in the req object, we copy the one we're going to mess with to a temp
    // variable
    tempTeamSelected = req.body.TeamSelected    
    // Zap team refs and rebuild it only allowing entries that have a name or number
    sv.teamRefs= []
    // Handle the posibility that the user has not picked any people for the team which results in
    // the routine exiting with an empty array
    if (typeof tempTeamSelected != "undefined") {
        // Handle there only being one value in TeamSelected which causes the client to return a string (not
        // an array)...  So we convert it to an array and then carry on with the processing of the result.
        if (typeof tempTeamSelected === 'string') {
            temp = tempTeamSelected
            tempTeamSelected = []
            tempTeamSelected.push (temp)
        }
        tempTeamSelected.forEach ((element) => {
            if ((sv.squadNames[element].length > 0) || (sv.squadNumbers[element].length > 0)) {
                sv.teamRefs.push (element)
            }
        })
    }    
    res.redirect("/court")
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

const users = [{ name: "Kyle" }, { name: "Sally" }]
router.param("id", (req, res, next, id) => {
  req.user = users[id]
  next()
})
*/

function logger(req, res, next) {
  console.log("Squad logger", req.method, req.originalUrl)
  next()
}

module.exports = router
