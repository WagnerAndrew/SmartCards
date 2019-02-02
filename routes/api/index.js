const router = require("express").Router();
const cardRoutes = require("./cards");

router.use("/cards", cardRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

module.exports = router;
