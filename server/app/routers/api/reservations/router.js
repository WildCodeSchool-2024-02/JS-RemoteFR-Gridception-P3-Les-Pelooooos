const express = require("express");

const router = express.Router();

const {
  browse,
  browseFromCar,
  read,
  edit,
  add,
  destroy,
} = require("../../../controllers/reservationsActions");

router.get("/", browse);
router.get("/:id", read);
router.get("/cars/:carId", browseFromCar);
router.put("/:id", edit);
router.post("/", add);
router.delete("/:id", destroy);

module.exports = router;
