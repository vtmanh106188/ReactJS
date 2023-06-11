const express = require("express")
const indexRouter = express.Router();

indexRouter.get("/", async (req, res) => {
    res.send("123");
});

module.exports = indexRouter;
