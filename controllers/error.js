exports.get404 = (req, res, next) => {
  res.status(404).render("404", {
    pageTitle: "Sayfa Bulunamad─▒...",
    path: "/404",
  });
};
