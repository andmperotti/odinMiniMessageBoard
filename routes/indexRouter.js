const router = require("express").Router;
const indexRouter = router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    id: 0,
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    id: 1,
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});
indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.authorsName,
    added: new Date(),
    id: messages.length,
  });
  res.redirect("/");
});

indexRouter.get("/messages/:messageId", (req, res) => {
  res.render("message", { message: messages[req.params.messageId] });
});

//catch all route to redirect users back to main page if they request something not set up or that they're not privileged to see
indexRouter.all("/*splash", (req, res) => {
  res.redirect("/");
});
module.exports = indexRouter;
