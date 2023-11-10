"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var Navbar_1 = require("./Components/Navbar");
var Home_1 = require("./Components/Home");
var About_1 = require("./Components/About");
var Contact_1 = require("./Components/Contact");
var Shop_1 = require("./Components/shop/Shop");
var Cart_1 = require("./Components/Cart");
var Footer_1 = require("./Components/Footer");
var Checkout_1 = require("./Components/Checkout");
var ProductDetails_1 = require("./Components/ProductDetails");
var Login_1 = require("./Components/Login");
var ProtectedRoute_1 = require("./ProtectedRoute");
var Dashboard_1 = require("./admin/Dashboard");
var AddProducts_1 = require("./admin/AddProducts");
var AllProducts_1 = require("./admin/AllProducts");
function App() {
    return (React.createElement(React.Fragment, null,
        React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement("div", { className: "App" },
                React.createElement(Navbar_1["default"], null),
                React.createElement(react_router_dom_1.Routes, null,
                    React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(Home_1["default"], null) }),
                    React.createElement(react_router_dom_1.Route, { path: "/about", element: React.createElement(About_1["default"], null) }),
                    React.createElement(react_router_dom_1.Route, { path: "/contact", element: React.createElement(Contact_1["default"], null) }),
                    React.createElement(react_router_dom_1.Route, { path: "/shop", element: React.createElement(Shop_1["default"], null) }),
                    React.createElement(react_router_dom_1.Route, { path: "/shop:id", element: React.createElement(ProductDetails_1["default"], null) }),
                    React.createElement(react_router_dom_1.Route, { path: "/cart", element: React.createElement(Cart_1["default"], null) }),
                    React.createElement(react_router_dom_1.Route, { path: "/checkout", element: React.createElement(Checkout_1["default"], null) }),
                    React.createElement(react_router_dom_1.Route, { path: "/*", element: React.createElement(ProtectedRoute_1["default"], null) },
                        React.createElement(react_router_dom_1.Route, { path: "dashboard", element: React.createElement(Dashboard_1["default"], null) }),
                        React.createElement(react_router_dom_1.Route, { path: "dashboard/all-products", element: React.createElement(AllProducts_1["default"], null) }),
                        React.createElement(react_router_dom_1.Route, { path: "dashboard/add-product", element: React.createElement(AddProducts_1["default"], null) })),
                    React.createElement(react_router_dom_1.Route, { path: "/login", element: React.createElement(Login_1["default"], null) })),
                React.createElement(Footer_1["default"], null)))));
}
exports["default"] = App;
