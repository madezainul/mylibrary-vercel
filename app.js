require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
// const ejsLint = require("../ejs=lint");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

const routes = require("./routes");
app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
