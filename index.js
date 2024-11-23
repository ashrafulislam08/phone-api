const express = require("express");
const cors = require("cors");
const phones = require("./phones.json");
const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Phones data is coming");
});

app.get("/phones", (req, res) => {
  res.send(phones);
});

app.get("/phone/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const phone = phones.data.find((phone) => phone.slug == id) || {};
  res.send(phone);
});

app.listen(port, () => {
  console.log("Server is running on port 5000");
});
