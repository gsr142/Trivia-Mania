const router = require('express').Router()

// get request that directs users to signup to our app
router.get('/', (req, res) => {
    try {
        res.render("newplayer");
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error")
    }
})

module.exports = router