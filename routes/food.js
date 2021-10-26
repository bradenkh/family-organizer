const express = require("express");
const path = require("path");
const foodController = require("../controllers/food");
const router = express.Router();

router.get("/food", foodController.getTimeHome);

router.get("/food/mealplan", foodController.getCalendar);

router.get("/food/todo", foodController.getTodo);

router.get("/food/reminder", foodController.getReminders);

module.exports = router;
