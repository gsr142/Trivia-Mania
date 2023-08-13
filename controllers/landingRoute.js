const router = require("express").Router();

// rendering to homepage
router.get("/", async (req, res) => {
    try {
        res.render("homepage");
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).send("Server Error") 
    }
});

module.exports = router;