const express = require("express");
const path = require("path");
const timeController = require("../controllers/time");
const router = express.Router();

router.get("/time", timeController.getTimeHome);

router.get("/time/calendar", timeController.getCalendar);

router.get("/time/todo", timeController.getTodo);

router.get("/time/reminder", timeController.getReminders);

module.exports = router;
