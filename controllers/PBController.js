`use strict`;
const { Books, Publisher, PublishedBy } = require("../models");

class PublisherController {
  static async index(req, resp) {
    try {
      const publishedBy = await PublishedBy.findAll({
        include: [
          {
            model: Books,
            as: "book",
          },
          {
            model: Publisher,
            as: "publisher",
          },
        ],
      });
      resp.json(publishedBy);
    } catch (error) {
      resp.json(error);
      // resp.render('', {message: error.message})
    }
  }

  static async create(req, resp) {
    try {
      const { publisherId, booksId, releaseDate } = req.body;

      let publishedBy = await PublishedBy.create({
        publisherId: +publisherId,
        booksId: +booksId,
        releaseDate,
      });
      resp.json(publishedBy);
    } catch (error) {
      resp.json(error);
      console.log(error);
    }
  }

  static async update(req, resp) {
    try {
      const id = +req.params.id;

      const { publisherId, booksId, releaseDate } = req.body;

      let publishedBy = await PublishedBy.update(
        {
          publisherId: +publisherId,
          booksId: +booksId,
          releaseDate,
        },
        { where: { id } }
      );

      publishedBy[0] === 1 ? resp.json(`masuk`) : resp.json(`belum masuk`);
    } catch (error) {
      resp.json(error);
    }
  }

  static async delete(req, resp) {
    try {
      const id = +req.params.id;

      let publishedBy = await PublishedBy.destroy({
        where: { id },
      });

      publishedBy === 1 ? resp.json(`masuk`) : resp.json(`belum masuk`);
    } catch (error) {
      resp.json(error);
    }
  }
}

module.exports = PublisherController;
