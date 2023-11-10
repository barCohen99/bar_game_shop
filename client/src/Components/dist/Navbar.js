"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var site_logo_png_1 = require("../assets/images/site-logo.png");
var react_redux_1 = require("react-redux");
function Navbar() {
    var totalQuantity = react_redux_1.useSelector(function (state) { return state.cart.totalQuantity; });
    return (React.createElement("div", null,
        React.createElement("div", { className: "shadow bg-stone-100 border-b-4 border-solid border-blue-700" },
            React.createElement("div", { className: "h-20 mx-5 px-5 flex items-center justify-between text-xl" },
                React.createElement("ul", { className: "flex items-center" },
                    React.createElement("li", null,
                        React.createElement("img", { src: site_logo_png_1["default"], alt: 'logo', height: 100, width: 100 })),
                    React.createElement("li", { className: "p-4 hover:text-red-500 transition-colors" },
                        React.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
                    React.createElement("li", { className: "p-4 hover:text-red-500 transition-colors" },
                        React.createElement(react_router_dom_1.Link, { to: "/about" }, "About")),
                    React.createElement("li", { className: "p-4 hover:text-red-500 transition-colors" },
                        React.createElement(react_router_dom_1.Link, { to: "/contact" }, "Contact")),
                    React.createElement("li", { className: "p-4 hover:text-red-500 transition-colors" },
                        React.createElement(react_router_dom_1.Link, { to: "/shop" }, "Shop"))),
                React.createElement("ul", { className: "flex items-center gap-3" },
                    React.createElement("li", { className: "p-4 hover:text-red-500 transition-colors" },
                        React.createElement(react_router_dom_1.Link, { to: "/cart" }, "Cart"),
                        React.createElement("span", null, totalQuantity)),
                    React.createElement("li", { className: "p-4 hover:text-red-500 transition-colors" },
                        React.createElement(react_router_dom_1.Link, { to: "/login" }, "Login")))))));
}
exports["default"] = Navbar;
