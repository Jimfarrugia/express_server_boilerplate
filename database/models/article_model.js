const mongoose = require("mongoose");
const articleSchema = require("./../schemas/article_schema");

const articleModel = mongoose.model("article", articleSchema);

module.exports = articleModel;
