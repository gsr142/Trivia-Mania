const router = require('express').Router();
const apiRoutes = require('./api/');
const landingRoutes = require('./landingRoute');
const loginRoutes = require('./loginRoute')


router.use("/", landingRoutes);
router.use("/login", loginRoutes)
router.use("/api", apiRoutes);

module.exports = router;