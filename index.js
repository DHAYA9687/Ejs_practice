import express from "express";
const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/about", (req, res) => {
  res.render("about.ejs");
});
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});
app.get("/service", (req, res) => {
  res.render("service.ejs");
});
app.post("/submit", (req, res) => {
  console.log(req.body);
  res.render("index.ejs", { name: req.body.name });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
