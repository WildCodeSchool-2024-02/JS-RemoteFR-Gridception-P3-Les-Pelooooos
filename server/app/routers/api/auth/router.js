const express = require("express");
const { login, register } = require("../../../controllers/authActions"); 
const {
    checkLogingDatas,
    checkRegisterDatas,
} = require("../../../services/checkDatas");

const router = express.Router();

router.post("/login", checkLogingDatas, login);
router.post("/register", checkRegisterDatas, register);

module.exports = router;