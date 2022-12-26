`use strict`;
const { Books, PublishedBy, Publisher } = require("../models");

class BookController {
  static async index(req, resp) {
    try {
      const book = await Books.findAll({
        order: [[`id`, `ASC`]],
      });
      resp.render("books/index.ejs", { book });
    } catch (error) {
      resp.json(error);
      console.log(error);
      // resp.render('', {message: error.message})
    }
  }

  static async create(req, resp) {
    // console.log(req.body)
    try {
      const { author, title, price, availability } = req.body;

      let book = await Books.create({
        author,
        title,
        price,
        availability,
      });
      resp.redirect("/books")
    } catch (error) {
      resp.json(error);
      // resp.render('', {message: error.message})
    }
  }

  static async add(req,resp){
    try {
      resp.render('books/add.ejs')
    } catch (error) {
      resp.json(error)
    }
  }

  static async update(req, resp) {
    try {
      const id = +req.params.id;
      const { author, title, price, availability } = req.body;

      let book = await Books.update(
        {
          author,
          title,
          price,
          availability,
        },
        {
          where: { id },
        }
      );

      book[0] === 1 ? resp.redirect('/books') : resp.json(`belum masuk`);
    } catch (error) {
      resp.json(error);
    }
  }
  static async edit(req, resp) {
    try {
      const id = +req.params.id;

      let book = await Books.findByPk(id);
      let publisher = await Publisher.findAll();

      resp.render("books/update.ejs/", {
        book,
        publisher,
      });
    } catch (error) {
      resp.json(error);
    }
  }

  static async delete(req, resp) {
    try {
      const id = +req.params.id;

      let book = await Books.destroy({
        where: { id },
      });

      book === 1 ? resp.redirect('/books') : resp.json(`belum masuk`);
    } catch (error) {
      resp.json(error);
    }
  }

  static async detail(req, resp) {
    try {
      const id = +req.params.id;

      let book = await PublishedBy.findAll({
        where: {
          booksId: id,
        },
        include: [
          { model: Books, as: "book" },
          { model: Publisher, as: "publisher" },
        ],
      });

      resp.render(`/books/detail.ejs`, { book: book[0] });
    } catch (error) {
      // console.log(error)
      resp.json(error);
    }
  }

  static async search(req, resp) {
    try {
      const author = req.query.author;
      const searchResult = await Books.findAll({
        where: { author: author },
      });
      resp.json(searchResult);
    } catch (error) {
      resp.json(error);
      console.log(error);
    }
  }
}

module.exports = BookController;
