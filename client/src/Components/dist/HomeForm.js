"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Form = function () {
    var _a = react_1.useState(''), inputValue = _a[0], setInputValue = _a[1];
    var handleInputChange = function (event) {
        setInputValue(event.target.value);
    };
    var handleSubmit = function (event) {
        event.preventDefault();
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("form", { onSubmit: handleSubmit },
            react_1["default"].createElement("input", { className: 'rounded-l-xl text-center', type: "text", value: inputValue, onChange: handleInputChange, placeholder: "search a game" }),
            react_1["default"].createElement("button", { className: 'w-16 rounded-r-xl bg-blue-500 ', type: "submit" }, "Search"))));
};
exports["default"] = Form;
