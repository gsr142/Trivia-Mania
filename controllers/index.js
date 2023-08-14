const router = require('express').Router();
const apiRoutes = require('./api');
const landingRoutes = require('./landingRoute');
const loginRoutes = require('./loginRoute')
const newPlayerRoutes = require('./newplayer')


router.use("/", landingRoutes);
router.use("/login", loginRoutes)
router.use("/newplayer", newPlayerRoutes)
router.use("/api", apiRoutes);

module.exports = router;