exports.getTimeHome = (req, res, next) => {
   res.render("time/home", {
      pageTitle: "Time Management",
      path: "time",
   });
};

exports.getCalendar = (req, res, next) => {
   res.render("time/calendar", {
      pageTitle: "Time Management",
      path: "time/calendar",
   });
};

exports.getTodo = (req, res, next) => {
   res.render("time/todo", {
      pageTitle: "Time Management",
      path: "time/todo",
   });
};

exports.getReminders = (req, res, next) => {
   res.render("time/reminders", {
      pageTitle: "Time Management",
      path: "time/reminders",
   });
};
