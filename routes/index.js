const express = require("express");
const router = express.Router();
const articlesRoutes = require("./articles_routes");
const pagesController = require("./../controllers/pages_controller");

// Root / Homepage
router.get("/", pagesController.homepage);

// Articles Routes
router.use("/articles", articlesRoutes);

module.exports = router;