const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./homeRoutes');

const loginRoutes = require('./loginRoute')
const newPlayerRoutes = require('./newplayer')


router.use("/", homeRoutes);
router.use("/login", loginRoutes)
router.use("/newplayer", newPlayerRoutes)
router.use("/api", apiRoutes);


module.exports = router;