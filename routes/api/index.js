const router = require("express").Router();
const cardRoutes = require("./cards");
const libraryRoutes = require("./libraries");

router.use("/cards", cardRoutes);
router.use("/libraries", libraryRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

module.exports = router;
