const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  edit,
  destroy,
} = require("../../../controllers/usersActions");
const { register } = require("../../../controllers/authActions");

router.get("/", browse);
router.get("/:id", read);
router.put("/:id", edit);
router.post("/", register);
router.delete("/:id", destroy);

module.exports = router;
