const route = require("express").Router();
const { Books, Publisher, Member } = require("../models");
// const index = require('../controllers/index');

route.get("/", async (req, resp) => {
  try {
    let book = await Books.findAll({});
    let publisher = await Publisher.findAll({});
    let member = await Member.findAll({});

    resp.render(`index.ejs`, { book, publisher, member });
  } catch (error) {
    resp.render('errorPage/error.ejs', {message:error.message})
  }
});
// route.get('/')

const bookRoutes = require("./book");
const memberRoutes = require("./member");
const publisherRoutes = require("./publisher");
const publishedByRoutes = require("./publishedBy");

route.use("/books", bookRoutes);
route.use("/members", memberRoutes);
route.use("/publishers", publisherRoutes);
route.use("/publishedBies", publishedByRoutes);

module.exports = route;
