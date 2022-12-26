const memberRoute = require("express").Router();
const { MemberController } = require("../controllers");

memberRoute.get("/", MemberController.index);

memberRoute.get("/:id/detail", MemberController.detail);

memberRoute.post("/create", MemberController.create);
memberRoute.get("/add", MemberController.add);

memberRoute.post("/update/:id", MemberController.update);
memberRoute.get("/update/:id", MemberController.edit);


memberRoute.get("/delete/:id", MemberController.delete);

memberRoute.get("/search", MemberController.search);


module.exports = memberRoute;
