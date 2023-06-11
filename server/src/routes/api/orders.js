const express = require("express")
const ordersRouter = express.Router();
const Orders = require("../../models/Orders");

ordersRouter.get('/', async (req, res) => {
    let data = await Orders.findAll();
    res.json(data);
})

ordersRouter.get('/:id', async (req, res) => {
    let id = req.params.id;
    let data = await Orders.findOne({ where: { idOR: id } })
    res.json(data)
})

ordersRouter.post('/add', async (req, res) => {
    let data = req.body;
    const addOrder = await Orders.create(data)
    res.json(data);
})

ordersRouter.put('/edit/:id', async (req, res) => {
    let id = req.params.id
    let data = req.body;
    let updateProduct = await Orders.update(data, { where: { idOR: id } });

    res.json(updateProduct);
})

module.exports = ordersRouter;