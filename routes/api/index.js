const router = require("express").Router();
const dataRoutes = require("./data");
const userRoutes = require("./user");
const jamRoutes = require("./jams")

//jam routes
router.use("/jams", jamRoutes)

// Profile routes
router.use("/profiles", dataRoutes);
// router.use("/profile/:username", dataRoutes);

router.use("/user", userRoutes);


module.exports = router;
