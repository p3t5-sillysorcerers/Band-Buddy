const router = require("express").Router();
const dataRoutes = require("./data");
const userRoutes = require("./user");


// Profile routes
router.use("/profiles", dataRoutes);

router.use("/user", userRoutes);


module.exports = router;
