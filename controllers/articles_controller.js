const articleModel = require("./../database/models/article_model");

function index(req, res) {
  res.render("articles/index")
}

function create(req, res) {
  
}

function make(req, res) {
  res.render("articles/new")
}

function show(req, res) {
  //let { id } = req.params;
}

function edit(req, res) {}

function update(req, res) {}

function destroy(req, res) {}

module.exports = {
  index,
  create,
  make,
  show,
  edit,
  update,
  destroy
};