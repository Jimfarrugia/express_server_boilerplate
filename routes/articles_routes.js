const express = require("express");
const router = express.Router();
const articlesController = require("./../controllers/articles_controller");

router.get("/", articlesController.index);

// router.post("/", articlesController.create);

// router.get("/new", articlesController.make);

// router.get("/:id", articlesController.show);

// router.delete("/:id", articlesController.destroy);

// router.put("/:id", articlesController.update);

// router.patch("/:id", articlesController.update);

// router.get("/:id/edit", articlesController.edit);

module.exports = router;