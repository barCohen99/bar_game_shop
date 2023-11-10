"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ProductCard_1 = require("./ProductCard");
var ProductsList = function (_a) {
    var data = _a.data;
    return (react_1["default"].createElement(react_1["default"].Fragment, null, data === null || data === void 0 ? void 0 : data.map(function (item, index) { return (react_1["default"].createElement(ProductCard_1["default"], { item: item, key: index })); })));
};
exports["default"] = ProductsList;
