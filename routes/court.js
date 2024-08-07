let sv = require ('../sharedData.js')
let msgHistory = []

const express = require("express")
const router = express.Router()

router.use(logger)

router.get("/", (req, res) => {
  res.render("court/courtMain", {numbers: sv.squadNumbers, names:sv.squadNames, tRefs:sv.teamRefs, pRefs:sv.playerRefs, gStart:sv.gameStartedAt,cQtr:sv.currentQuarter, qtrStart:sv.quarterStart, qtrDuration:sv.qtrDuration, gEnd:sv.gameEndedAt, msg:JSON.stringify (msgHistory)})
})

// Receive a game stat event
router.post("/statEvent", (req, res) => {
    // Fix playerRefs if the user does not pick any players (client won't return even an identifier for playerRefs)
    // and there is a problem that the client returns a string (rather than an array) if there is only one player
    // selected
    if (req.body.statKind === 'playerUpdate') {
        if (req.body.players === undefined) {
            console.log("No players")
            sv.playerRefs = []
        } else {
            
            if (typeof req.body.players === 'string') {
                console.log("One player")
                sv.playerRefs = []
                sv.playerRefs [0] = req.body.players
            } else {
                console.log("More than one player")
                sv.playerRefs = req.body.players
            }
        }
    }

    if (req.body.statKind === 'gameStart') {
        // Update the shared variable so we can send it back to the client when the page is re-painted
        sv.gameStartedAt = req.body.gameStartName
        sv.currentQuarter = req.body.cQtrName
        sv.quarterStart = req.body.qtrStartName
        sv.qtrDuration = req.body.qtrDurationName
        sv.gameEndedAt = req.body.gameEndName
    }
    
    if (req.body.statKind === 'quarter1End') {
        sv.gameStartedAt = req.body.gameStartName
        sv.currentQuarter = req.body.cQtrName
        sv.quarterStart = req.body.qtrStartName
        sv.qtrDuration = req.body.qtrDurationName
        sv.gameEndedAt = req.body.gameEndName
    }
    
    if (req.body.statKind === 'quarter2Start') {
        sv.gameStartedAt = req.body.gameStartName
        sv.currentQuarter = req.body.cQtrName
        sv.quarterStart = req.body.qtrStartName
        sv.qtrDuration = req.body.qtrDurationName
        sv.gameEndedAt = req.body.gameEndName
    }
    
    if (req.body.statKind === 'quarter2End') {
        sv.gameStartedAt = req.body.gameStartName
        sv.currentQuarter = req.body.cQtrName
        sv.quarterStart = req.body.qtrStartName
        sv.qtrDuration = req.body.qtrDurationName
        sv.gameEndedAt = req.body.gameEndName
    }
    
    if (req.body.statKind === 'quarter3Start') {
        sv.gameStartedAt = req.body.gameStartName
        sv.currentQuarter = req.body.cQtrName
        sv.quarterStart = req.body.qtrStartName
        sv.qtrDuration = req.body.qtrDurationName
        sv.gameEndedAt = req.body.gameEndName
    }
    
    if (req.body.statKind === 'quarter3End') {
        sv.gameStartedAt = req.body.gameStartName
        sv.currentQuarter = req.body.cQtrName
        sv.quarterStart = req.body.qtrStartName
        sv.qtrDuration = req.body.qtrDurationName
        sv.gameEndedAt = req.body.gameEndName
    }
    
    if (req.body.statKind === 'quarter4Start') {
        sv.gameStartedAt = req.body.gameStartName
        sv.currentQuarter = req.body.cQtrName
        sv.quarterStart = req.body.qtrStartName
        sv.qtrDuration = req.body.qtrDurationName
        sv.gameEndedAt = req.body.gameEndName
    }
    
    if (req.body.statKind === 'gameEnd') {
        sv.gameStartedAt = req.body.gameStartName
        sv.currentQuarter = req.body.cQtrName
        sv.quarterStart = req.body.qtrStartName
        sv.qtrDuration = req.body.qtrDurationName
        sv.gameEndedAt = req.body.gameEndName
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
