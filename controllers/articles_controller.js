const Article = require("./../database/models/article_model");

// All Articles
async function index(req, res) {
  let articles = await Article.find().sort({ created_at: "desc" });
  res.render("articles/index", { articles });
}

// Create Article
async function create(req, res) {
  let { title, body } = req.body;

  let errors = [];
  if (!title) errors.push({ text: "You must enter a title for the article." });
  if (!body) errors.push({ text: "You must enter a body for the article." });

  if (errors.length > 0) {
    res.render("articles/new", {
      errors: errors,
      title: title,
      body: body
    });
  } else {
    let article = await Article.create({ title, body }).catch(err =>
      res.status(500).send(err)
    );
    res.redirect("/articles");
  }
}

// New Article Page
function make(req, res) {
  res.render("articles/new");
}

// Show Article
async function show(req, res) {
  let { id } = req.params;
  let article = await Article.findById(id).catch(err => {
    res.status(404).send(err);
  });
  res.render("articles/show", { article });
}

// Edit Article Page
async function edit(req, res) {
  let { id } = req.params;
  let article = await Article.findById(id);
  res.render("articles/edit", { article });
}

// Update Article
async function update(req, res) {
  let { id } = req.params;
  let { title, body } = req.body;
  await Article.findByIdAndUpdate(id, { title, body });
  res.redirect(`/articles/${id}`);
}

// Delete Article
async function destroy(req, res) {
  let { id } = req.params;
  await Article.findByIdAndRemove(id);
  res.redirect("/articles");
}

module.exports = {
  index,
  create,
  make,
  show,
  edit,
  update,
  destroy
};
