const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const reservationsRouter = require("./reservations/router");

router.use("./reservations", reservationsRouter);

/* ************************************************************************* */

module.exports = router;
