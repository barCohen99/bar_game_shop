"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Helmet_1 = require("./Helmet");
var products_1 = require("../assets/data/products");
// import { Container, Row, Col } from "reactstrap";
// import "../styles/shop.css";
var ProductsList_1 = require("./UI/ProductsList");
var Shop = function () {
    var _a = react_1.useState(products_1["default"]), productsData = _a[0], setProductsData = _a[1];
    var handleFilter = function (e) {
        var filterValue = e.target.value;
        if (filterValue)
            ;
    };
    return (React.createElement(Helmet_1["default"], { title: "Shop" },
        React.createElement("section", null,
            React.createElement(Container, null,
                React.createElement(Row, null,
                    React.createElement(Col, { lg: "3", md: "6" },
                        React.createElement("div", { className: "filter__widget" },
                            React.createElement("select", { onChange: handleFilter },
                                React.createElement("option", null, "Filter By Category"),
                                React.createElement("option", { value: "sofa" }, "Sofa"),
                                React.createElement("option", { value: "mobile" }, "Mobile"),
                                React.createElement("option", { value: "chair" }, "Chair"),
                                React.createElement("option", { value: "watch" }, "Watch"),
                                React.createElement("option", { value: "wireless" }, "Wireless")))),
                    React.createElement(Col, { lg: "3", md: "6", className: "text-end" },
                        React.createElement("div", { className: "filter__widget" },
                            React.createElement("select", null,
                                React.createElement("option", null, "Sort By"),
                                React.createElement("option", { value: "ascending" }, "Ascending"),
                                React.createElement("option", { value: "descending" }, "Descending")))),
                    React.createElement(Col, { lg: "6", md: "12" },
                        React.createElement("div", { className: "search__box" },
                            React.createElement("input", { type: "text", placeholder: "Search......" }),
                            React.createElement("span", null,
                                React.createElement("i", { className: "ri-search-line" }))))))),
        React.createElement("section", { className: "pt-0" },
            React.createElement(Container, null,
                React.createElement(Row, null, products_1["default"].length === 0 ? (React.createElement("h1", { className: "text-center fs-4" }, "No products are found!")) : (React.createElement(ProductsList_1["default"], { data: productsData })))))));
};
exports["default"] = Shop;
