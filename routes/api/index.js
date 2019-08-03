const router = require("express").Router();
const dataRoutes = require("./data");

// Book routes
router.use("/profiles", dataRoutes);

module.exports = router;
