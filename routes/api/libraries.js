const router = require("express").Router();
const librariesController = require("../../controllers/librariesController");

router.route("/")
  .get(librariesController.findAll)
  .post(librariesController.create);

router
  .route("/:id")
  .get(librariesController.findById)
  .put(librariesController.update)
  .delete(librariesController.remove);

module.exports = router;
