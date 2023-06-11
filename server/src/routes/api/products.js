const express = require("express")
const productRouter = express.Router();
const Products = require("../../models/Products");
// Sản Phẩm
productRouter.get('/', async (req, res) => {
    let data = await Products.findAll();
    res.json(data);
})
// Chi tiết sản phẩm
productRouter.get('/:id', async (req, res) => {
    let id = req.params.id;
    let data = await Products.findOne({ where: { idSP: id } })
    res.json(data)
})

// Sản phẩm theo loại
productRouter.get('/categories/:id', async (req, res) => {
    let id = req.params.id;
    let data = await Products.findAll({ where: { cat_ID: id } })

    res.json(data)
})
// Thêm sản phẩm
productRouter.post('/add', async (req, res) => {
    let data = req.body;
    const addProduct = await Products.create(data)
    res.json(data);
})
// Sửa sản phẩm
productRouter.put('/edit/:id', async (req, res) => {
    let id = req.params.id
    let data = req.body;
    let updateProduct = await Products.update(data, { where: { idSP: id } });

    res.json(updateProduct);
})
// Xóa sản phẩm
productRouter.delete('/delete/:id', async (req, res) => {
    let id = req.params.id
    let deleteProduct = await Products.destroy({ where: { idSP: id } });

    res.json(deleteProduct);
})

module.exports = productRouter;