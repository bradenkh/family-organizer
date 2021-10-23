const express = require("express");
const path = require("path");
const moneyController = require("../controllers/money");
const router = express.Router();

router.get("/money", moneyController.getHome);
router.get("/money/budget", moneyController.getBudget);

module.exports = router;
