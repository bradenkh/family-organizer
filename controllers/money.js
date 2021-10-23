exports.getHome = (req, res, next) => {
   res.render("money/home", {
      pageTitle: "Money Management",
      path: "money",
   });
};

exports.getBudget = (req, res, next) => {
   res.render("money/budget", {
      pageTitle: "Budgeting",
      path: "money/budget",
   });
};