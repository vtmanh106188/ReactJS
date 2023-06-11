const express = require("express")
const catRouter = express.Router();
const Categories = require("../../models/Categories");

catRouter.get('/', async (req, res) => {
    let data = await Categories.findAll();
    res.json(data);
})

module.exports = catRouter;