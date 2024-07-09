const express = require("express");
const { register } = require("../../../controllers/authActions");
const {
  checkRegisterDatas,
} = require("../../../services/checkDatas");

const router = express.Router();

router.post("/register", checkRegisterDatas, register);

module.exports = router;
