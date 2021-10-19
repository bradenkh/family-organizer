exports.getAddProduct = (req, res, next) => {
   res.render("time/home", {
      pageTitle: "Time Management",
      path: "time/home",
      editing: false,
   });
};
