"use strict";
exports.__esModule = true;
var Helmet = function (props) {
    document.title = "Bar Game Store -" + props.title;
    return React.createElement("div", { className: "w-100" }, props.children);
};
exports["default"] = Helmet;
