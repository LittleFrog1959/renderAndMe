const express = require ('express')
const router = express.Router ()

router.get ("/", (req, res) => {
    res.send ("User list")
})

router.get ("/new", (req, res) => {
    res.send ("New user form")
})

router
    .route ("/:id")
    .get ((req, res) => {
        res.send (`Get user with ID ${req.params.id}`)
    })
    .put ((reg, res) => {
        res.send (`Update user with ID ${req.params.id}`)
    })
    .delete ((req, res) => {
        res.send (`Delete user with ID ${req.params.id}`)
    })

module.exports = router
