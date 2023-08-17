const router = require('express').Router()

// get request for login page
router.get('/', (req, res) => {
    try {
        res.render("login", {loggedIn: req.session.log_in})
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error")
    }
})

module.exports = router