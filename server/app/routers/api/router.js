const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const reservationsRouter = require("./reservations/router");

router.use("/reservations", reservationsRouter);

/* ************************************************************************* */

module.exports = router;
