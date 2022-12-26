const publisherRoute = require("express").Router();
const { PublisherController } = require("../controllers");

publisherRoute.get("/", PublisherController.index);

publisherRoute.get("/:id/detail", PublisherController.detail);

publisherRoute.post("/create", PublisherController.create);
publisherRoute.get("/add", PublisherController.add);

publisherRoute.post("/update/:id", PublisherController.update);
publisherRoute.get("/update/:id", PublisherController.edit);

publisherRoute.get("/delete/:id", PublisherController.delete);

publisherRoute.get("/search", PublisherController.search);


module.exports = publisherRoute;
