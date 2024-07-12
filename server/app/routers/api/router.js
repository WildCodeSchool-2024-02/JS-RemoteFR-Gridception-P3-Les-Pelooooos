const express = require("express");

const router = express.Router();

const authRouter = require("./auth/router");
const brandsRouter = require("./brands/router");
const carsRouter = require("./cars/router");
const plugsRouter = require("./plugs/router");
const plugsTypesRouter = require("./plugsTypes/router");
const reservationsRouter = require("./reservations/router");
const terminalsRouter = require("./terminals/router");
const usersRouter = require("./users/router");
const modelsRouter = require("./models/router");
const terminalPlugsRouter = require("./terminalPlugs/router");

router.use("/auth", authRouter);
router.use("/brands", brandsRouter);
router.use("/cars", carsRouter);
router.use("/plugs", plugsRouter);
router.use("/plugsTypes", plugsTypesRouter);
router.use("/reservations", reservationsRouter);
router.use("/terminals", terminalsRouter);
router.use("/users", usersRouter);
router.use("/models", modelsRouter);
router.use("/terminalPlugs", terminalPlugsRouter);

const uploadRouter = require("./upload/router");

router.use("/upload", uploadRouter);

module.exports = router;
