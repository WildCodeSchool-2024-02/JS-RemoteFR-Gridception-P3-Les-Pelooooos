const express = require("express");

const router = express.Router();

const authRouter = require("./auth/router");
const brandsRouter = require("./brands/router");
const carsRouter = require("./cars/router");
const imagesRouter = require("./images/router");
const plugsRouter = require("./plugs/router");
const plugsTypesRouter = require("./plugsTypes/router");
const reservationsRouter = require("./reservations/router");
const terminalsRouter = require("./terminals/router");
const usersRouter = require("./users/router");

router.use("/auth", authRouter);
router.use("/brands", brandsRouter);
router.use("/cars", carsRouter);
router.use("/images", imagesRouter);
router.use("/plugs", plugsRouter);
router.use("/plugsTypes", plugsTypesRouter);
router.use("/reservations", reservationsRouter);
router.use("/terminals", terminalsRouter);
router.use("/users", usersRouter);

module.exports = router;
