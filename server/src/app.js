// Libraries importing
const express = require("express");
require("dotenv").config();
const path = require("path");
const bodyParser = require("body-parser");

// CORS Policy
const cors = require("cors");

// Routes import
const indexRouter = require("./routes/index");
const productRouter = require("./routes/api/products");
const catRouter = require("./routes/api/categories")
const ordersRouter = require("./routes/api/orders")
const orderDetailRouter = require("./routes/api/orderDetail")
const userRouter = require("./routes/api/users")

// App initialization
const app = express();
app.use(cors());

const PORT = process.env.PORT || 1808;

// App configuration
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));


app.use("/", indexRouter);
app.use("/api/products", productRouter);
app.use("/api/categories", catRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/order_detail", orderDetailRouter);
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});
