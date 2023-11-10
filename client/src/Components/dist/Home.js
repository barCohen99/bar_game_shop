"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var open_page_logo_png_1 = require("../assets/images/open-page-logo.png");
var xbox_logo_png_1 = require("../assets/images/xbox-logo.png");
var ps_logo_png_1 = require("../assets/images/ps-logo.png");
var nt_logo_webp_1 = require("../assets/images/nt-logo.webp");
var HomeForm_1 = require("./HomeForm");
var ProductsList_1 = require("./UI/ProductsList");
var useGetData_1 = require("../custom-hooks/useGetData");
var Helmet_1 = require("./Helmet");
function Home() {
    var products = useGetData_1["default"]("products").data;
    var saleProducts = products.filter(function (item) { return item.fullPrice != null; });
    return (React.createElement(Helmet_1["default"], { title: "Home" },
        React.createElement("div", { className: "upper-container w-screen mb-5 text-center bg-slate-400", style: { height: "350px" } },
            React.createElement("div", { className: "img-container w-screen h-auto flex justify-center" },
                React.createElement("div", { className: "flex flex-col justify-around" },
                    React.createElement(react_router_dom_1.Link, { to: "/shop", className: "hover:bg-slate-200 p-2 rounded-3xl max-sm:hidden" },
                        React.createElement("img", { src: ps_logo_png_1["default"], alt: "logo", width: 95 })),
                    React.createElement(react_router_dom_1.Link, { to: "/shop", className: "hover:bg-slate-200 p-2 rounded-3xl max-sm:hidden" },
                        React.createElement("img", { className: "ml-2", src: nt_logo_webp_1["default"], alt: "logo", width: 75 }))),
                React.createElement("img", { src: open_page_logo_png_1["default"], alt: "logo", height: 300, width: 300 }),
                React.createElement("div", { className: "flex flex-col justify-center" },
                    React.createElement(react_router_dom_1.Link, { to: "/shop", className: "hover:bg-slate-200 p-2 rounded-full max-sm:hidden" },
                        React.createElement("img", { src: xbox_logo_png_1["default"], alt: "logo", width: 75 })))),
            React.createElement(HomeForm_1["default"], null)),
        React.createElement("div", { className: "mid-container w-screen h-auto mb-5 flex justify-center max-md:flex-col items-center " },
            React.createElement("div", { className: "left-card w-60 mx-3 flex justify-center items-center border-2 rounded-lg bg-green-100" },
                React.createElement("div", { className: "left-side w-3/4 " },
                    React.createElement("h5", { className: "text-lg font-medium" }, "Cheapest Games!"),
                    React.createElement("p", null, "prices will be compared")),
                React.createElement("div", { className: "right-side " }, "logo")),
            React.createElement("div", { className: "mid-card w-60 mx-3 max-md:my-5 flex justify-center items-center border-2 rounded-lg bg-green-100" },
                React.createElement("div", { className: "left-side w-3/4" },
                    React.createElement("h5", { className: "text-lg font-medium" }, "Home Delivery!"),
                    React.createElement("p", null, "~or close post office~")),
                React.createElement("div", { className: "right-side" }, "logo")),
            React.createElement("div", { className: "right-card w-60 mx-3 flex justify-center items-center border-2 rounded-lg bg-green-100" },
                React.createElement("div", { className: "left-side w-3/4" },
                    React.createElement("h5", { className: "text-lg font-medium" }, "Smart payments!"),
                    React.createElement("p", null, "secure payment system")),
                React.createElement("div", { className: "right-side" }, "logo"))),
        React.createElement("div", { className: "lower-container w-screen flex flex-col items-center text-center bg-red-400" },
            React.createElement("div", { className: "header-box w-[250px] pt-8 m-auto" },
                React.createElement("header", { className: " bg-white border-4 border-solid rounded-xl border-yellow-400" },
                    React.createElement("h2", { className: "text-xl font-semibold" }, "Recomended Games"),
                    React.createElement("p", null, "My favorite games on sale!"))),
            React.createElement("div", { className: "container w-[1000px] my-5 flex sm:flex-wrap max-sm:flex-col justify-center" },
                React.createElement(ProductsList_1["default"], { data: saleProducts })))));
}
exports["default"] = Home;
