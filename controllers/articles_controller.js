const articleModel = require("./../database/models/article_model");

function index(req, res) {
  res.render("articles/index")
}

function create(req, res) {
  let errors = [];
  if (!req.body.title) errors.push({text: "You must enter a title for the article."})
  if (!req.body.body) errors.push({text: "You must enter a body for the article."})

  if (errors.length > 0) {
    res.render("articles/new"/*, {
      errors: errors,
      title: req.body.title,
      body: req.body.body
    }*/);
  } else {
    res.send("passed");
  }
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