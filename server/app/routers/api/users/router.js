const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  readCar,
  edit,
  add,
  destroy,
} = require("../../../controllers/usersActions");

router.get("/", browse);
router.get("/:id", read);
router.get("/:userId/cars", readCar);
router.post("/", add);
router.put("/:id", edit);
router.delete("/:id", destroy);

module.exports = router;
