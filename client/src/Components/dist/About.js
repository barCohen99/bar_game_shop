"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var Helmet_1 = require("./Helmet");
function About() {
    return (React.createElement(Helmet_1["default"], { title: "About" },
        React.createElement("div", { className: 'background-container h-[440px] flex justify-center bg-slate-400' },
            React.createElement("div", { className: "mt-12 h-3/4 text-center bg-green-500 border-2 rounded-3xl" },
                React.createElement("h1", { className: "my-5 font-bold" }, "About The Game Shop"),
                React.createElement("p", { className: "mb-5" }, "Hey, my name is Bar Cohen and I am 24 from Hod-Hasharon,"),
                React.createElement("p", { className: "mb-5 mx-5" }, " I import video games from all around the world and sell them online via various shopping methods,"),
                React.createElement("p", { className: "mb-5" }, "I also sell video games in a shop inside a mall located in Tel-Aviv, Dizengoff St. 50."),
                React.createElement("p", { className: "mb-5" },
                    "Feel comfortable to",
                    React.createElement(react_router_dom_1.Link, { to: "/contact" },
                        React.createElement("button", { className: "border-b-2 border-green-500 rounded-3xl bg-green-600 text-white " }, "contact me")),
                    " if you have any questions!")))));
}
exports["default"] = About;
