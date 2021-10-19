const router = express.Router();

const timeController = require("../controllers/time");

router.get("/time", timeController.getTimeHome);

module.exports = router;
