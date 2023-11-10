"use strict";
exports.__esModule = true;
var products_1 = require("../assets/data/products");
var ProductCard = function () {
    var cardItem = function (item) {
        return (React.createElement("div", { className: "bg-red-400 flex flex-col justify-center" },
            React.createElement("div", { className: "relative m-3 flex flex-wrap mx-auto justify-center" },
                React.createElement("div", { className: "relative h-[308px] w-[200px] flex flex-col justify-around bg-white shadow-md rounded-3xl p-2 mx-1 my-3'kn" },
                    React.createElement("div", { className: "overflow-x-hidden rounded-2xl relative" },
                        React.createElement("img", { className: "h-40 rounded-2xl w-full object-cover", src: item.imgUrl })),
                    React.createElement("div", { className: "mt-4 pl-2 mb-2 flex justify-between " },
                        React.createElement("div", null,
                            React.createElement("p", { className: "text-lg font-semibold text-gray-900 mb-0" }, item.productName),
                            React.createElement("p", { className: "text-md text-gray-800 mt-0" },
                                React.createElement("del", null,
                                    "$",
                                    item.price),
                                " $",
                                item.sale_price)),
                        React.createElement("div", { className: "flex flex-col-reverse mb-1 mr-4 group cursor-pointer" },
                            React.createElement("p", { className: "bg-slate-300 rounded-full p-2 cursor-pointer group" },
                                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 group-hover:opacity-50 opacity-70", fill: "none", viewBox: "0 0 24 24", stroke: "black" },
                                    React.createElement("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.5", d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" })))))))));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "w-[1000px] flex flex-wrap justify-center" }, products_1["default"].map(cardItem))));
};
exports["default"] = ProductCard;
