const express = require("express")
const router = express.Router()

router.use(logger)

router.get("/", (req, res) => {
  res.render ("login/loginAttempt")
})

router.post("/", (req, res) => {
  var isValid = false
  console.log (req.body)
  if (req.body.userName == "david") {
        isValid = true
  } else {
      isValid = false
  }
  
  if (isValid) {
    res.redirect("/squad")
  } else {
    console.log("Incorrect login name")
    res.render("login/loginAttempt")
  }
})

function logger(req, res, next) {
  console.log("Login logger", req.method, req.originalUrl)
  next()
}

module.exports = router