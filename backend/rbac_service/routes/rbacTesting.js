const express = require("express");
const RbacController = require("../controllers/RbacController");

const router = express.Router();

router.get("/getRbacData", RbacController.getRbacData);
router.post("/addRbacData", RbacController.addRbacData);

module.exports = router;
