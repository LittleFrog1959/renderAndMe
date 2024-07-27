let sv = require ('../sharedData.js')

const express = require("express")
const router = express.Router()

router.use(logger)

router.get("/", (req, res) => {
  res.render("squad/squadSelection", {size:sv.squadSize, names:sv.squadNames, numbers:sv.squadNumbers})
})

/*
router.get("/new", (req, res) => {
  res.render("users/new")
})
*/
router.post("/squadUpdate", (req, res) => {
    sv.squadNames = req.body.Name
    sv.squadNumbers = req.body.Number
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
