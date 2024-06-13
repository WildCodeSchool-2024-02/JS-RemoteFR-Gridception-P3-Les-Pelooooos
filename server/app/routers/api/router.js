const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */


const imagesRouter = require("./images/router");

router.use("/images", imagesRouter);

const carsRouter = require("./cars/router");

router.use("/cars", carsRouter);

const reservationsRouter = require("./reservations/router");

router.use("/reservations", reservationsRouter);

const terminalsRouter = require("./terminals/router");

router.use("/terminals", terminalsRouter);

const plugsTypesRouter = require("./plugsTypes/router");

router.use("/plugsTypes", plugsTypesRouter);

const brandsRouter = require("./brands/router");

router.use("/brands", brandsRouter);

const plugsRouter = require("./plugs/router");

router.use("/plugs", plugsRouter);


/* ************************************************************************* */

module.exports = router;
