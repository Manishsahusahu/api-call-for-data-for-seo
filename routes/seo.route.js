const { Router } = require("express");
const { seoDetails } = require("../controllers/seoDetails.controller");
const { taskId } = require("../middlewares/taskId.middleware");
const router = Router();

router.post("/seodetails", taskId, seoDetails);

module.exports = router;
