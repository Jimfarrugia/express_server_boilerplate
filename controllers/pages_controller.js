function homepage(req, res) {
  res.render("pages/homepage");
}

function about(req, res) {
  res.render("pages/about");
}

module.exports = { 
  homepage, 
  about 
}