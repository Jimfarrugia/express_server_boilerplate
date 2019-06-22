const express = require("express");
const router = express.Router();
const pagesController = require("./../controllers/pages_controller");

router.get("/", pagesController.homepage);

module.exports = router;