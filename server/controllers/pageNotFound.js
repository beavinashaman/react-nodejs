exports.pageNotFound = (req, res, next) => {
  // res.status(404).send("<h1>Page Not Found!</h1>"); // for console log
  // res.status(404).sendFile(path.join(rootDir, "views", "404.html")); //for html
  res.status(404).render("404", { pageTitle: "Page Not Found" });
  
};
