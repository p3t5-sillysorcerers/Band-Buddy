const router = require("express").Router();
const dataRoutes = require("./data");

// Profile routes
router.use("/profiles", dataRoutes);

module.exports = router;
