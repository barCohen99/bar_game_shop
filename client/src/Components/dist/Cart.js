"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("../styles/cart.css");
var Helmet_1 = require("./Helmet");
var reactstrap_1 = require("reactstrap");
var framer_motion_1 = require("framer-motion");
var cartSlice_1 = require("../redux/slices/cartSlice");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var Cart = function () {
    var cartItems = react_redux_1.useSelector(function (state) { return state.cart.cartItems; });
    var totalAmount = react_redux_1.useSelector(function (state) { return state.cart.totalAmount; });
    return (react_1["default"].createElement(Helmet_1["default"], { title: "Cart" },
        react_1["default"].createElement("section", null,
            react_1["default"].createElement(reactstrap_1.Container, null,
                react_1["default"].createElement(reactstrap_1.Row, null,
                    react_1["default"].createElement(reactstrap_1.Col, { lg: "9" }, cartItems.length === 0 ? (react_1["default"].createElement("h2", { className: "fs-4 text-center" }, "No item added to the cart")) : (react_1["default"].createElement("table", { className: "table bordered" },
                        react_1["default"].createElement("thead", null,
                            react_1["default"].createElement("tr", null,
                                react_1["default"].createElement("th", null, "Image"),
                                react_1["default"].createElement("th", null, "Title"),
                                react_1["default"].createElement("th", null, "Price"),
                                react_1["default"].createElement("th", null, "Qty"),
                                react_1["default"].createElement("th", null, "Delete"))),
                        react_1["default"].createElement("tbody", null, cartItems.map(function (item, index) { return (react_1["default"].createElement(Tr, { item: item, key: index })); }))))),
                    react_1["default"].createElement(reactstrap_1.Col, { lg: "3" },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("h6", { className: "d-flex align-items-center justify-content-between " },
                                "Subtotal",
                                react_1["default"].createElement("span", { className: "fs-4 fw-bold" },
                                    "$",
                                    totalAmount))),
                        react_1["default"].createElement("p", { className: "fs-6 mt-2" }, "taxes and shipping will calculate in checkout"),
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("button", { className: "buy__btn w-100 " },
                                react_1["default"].createElement(react_router_dom_1.Link, { to: "/checkout" }, "Checkout")),
                            react_1["default"].createElement("button", { className: "buy__btn w-100 mt-3" },
                                react_1["default"].createElement(react_router_dom_1.Link, { to: "/shop" }, "Continue Shopping")))))))));
};
var Tr = function (_a) {
    var item = _a.item;
    var dispatch = react_redux_1.useDispatch();
    var deleteProduct = function () {
        dispatch(cartSlice_1.cartActions.deleteItem(item.id));
    };
    return (react_1["default"].createElement("tr", null,
        react_1["default"].createElement("td", null,
            react_1["default"].createElement("img", { src: item.imgUrl, alt: "" })),
        react_1["default"].createElement("td", null, item.productName),
        react_1["default"].createElement("td", null,
            "$",
            item.price),
        react_1["default"].createElement("td", null,
            item.quantity,
            "px"),
        react_1["default"].createElement("td", null,
            react_1["default"].createElement(framer_motion_1.motion.i, { whileTap: { scale: 1.2 }, onClick: deleteProduct, "class": "ri-delete-bin-line" }))));
};
exports["default"] = Cart;
