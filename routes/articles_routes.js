const express = require("express");
const router = express.Router();
const articlesController = require("./../controllers/articles_controller");

router.get("/", articlesController.index);

router.post("/", articlesController.create);

router.get("/new", articlesController.make);

router.get("/:id", articlesController.show);

router.get("/edit/:id", articlesController.edit);

router.put("/:id", articlesController.update);
router.patch("/:id", articlesController.update);

router.delete("/:id", articlesController.destroy);

module.exports = router;
