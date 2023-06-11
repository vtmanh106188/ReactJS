const express = require("express")
const orderDetailRouter = express.Router();
const OrderDetail = require("../../models/OrderDetail");

orderDetailRouter.get('/', async (req, res) => {
    let data = await OrderDetail.findAll();
    res.json(data);
})

orderDetailRouter.post('/add', async (req, res) => {
    let data = req.body;
    const addOrderDetail = await OrderDetail.create(data)
    res.json(data);
})

orderDetailRouter.get('/:id', async (req, res) => {
    let id = req.params.id;
    let data = await OrderDetail.findAll({ where: { idOR: id } })

    res.json(data)
})

module.exports = orderDetailRouter;