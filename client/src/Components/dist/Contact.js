"use strict";
exports.__esModule = true;
var Helmet_1 = require("./Helmet");
function Contact() {
    return (React.createElement(Helmet_1["default"], { title: "Contact" },
        React.createElement("div", { className: 'background-container h-[440px] flex justify-center bg-slate-400' },
            React.createElement("div", { className: "mt-12 h-[250px] text-center  border-2 rounded-3xl bg-blue-500" },
                React.createElement("h1", { className: "my-5 font-bold" }, "Contact The Game Shop"),
                React.createElement("p", { className: "mb-5 mx-5" }, "The shop is located in Israel, Tel-Aviv, Dizengoff St. 50"),
                React.createElement("p", { className: "mb-5" }, "Contact me:"),
                React.createElement("p", { className: "mb-5" }, "Phone number: +972542934129"),
                React.createElement("p", { className: "mb-5" }, "Email: bar0.0cohen@gmail.com")))));
}
exports["default"] = Contact;
