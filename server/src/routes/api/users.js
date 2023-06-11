const express = require("express")
const userRouter = express.Router();
const Users = require("../../models/Users");
// danh sách User
userRouter.get('/', async (req, res) => {
    let data = await Users.findAll();
    res.json(data);
})
// Chi tiết user
userRouter.get('/:id', async (req, res) => {
    let id = req.params.id;
    let data = await Users.findOne({ where: { idUS: id } })
    res.json(data)
})

// Thêm user
userRouter.post('/add', async (req, res) => {
    let data = req.body;
    const addUser = await Users.create(data)
    res.json(data);
})
// Sửa user
userRouter.put('/edit/:id', async (req, res) => {
    let id = req.params.id
    let data = req.body;
    let updateUser = await Users.update(data, { where: { idUS: id } });

    res.json(updateUser);
})
// Xóa sản phẩm
userRouter.delete('/delete/:id', async (req, res) => {
    let id = req.params.id
    let deleteUser = await Users.destroy({ where: { idUS: id } });

    res.json(deleteUser);
})

module.exports = userRouter;