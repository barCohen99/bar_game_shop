"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_toastify_1 = require("react-toastify");
var auth_1 = require("firebase/auth");
var firebase_1 = require("../firebase");
var open_page_logo_png_1 = require("../assets/images/open-page-logo.png");
var Helmet_1 = require("../Components/Helmet");
function Login() {
    var _this = this;
    var _a = react_1.useState(""), email = _a[0], setEmail = _a[1];
    var _b = react_1.useState(""), password = _b[0], setPassword = _b[1];
    var navigate = react_router_dom_1.useNavigate();
    var signIn = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var userCredential, user, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, auth_1.signInWithEmailAndPassword(firebase_1.auth, email, password)];
                case 2:
                    userCredential = _a.sent();
                    user = userCredential.user;
                    console.log(user);
                    react_toastify_1.toast.success("Successfully logged in");
                    navigate("/dashboard");
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    react_toastify_1.toast.error(error_1.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(Helmet_1["default"], { title: "Login" },
        React.createElement("div", { className: "flex min-h-full  flex-1 flex-col justify-center px-6 lg:px-8" },
            React.createElement("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm" },
                React.createElement("img", { className: "mx-auto", src: open_page_logo_png_1["default"], width: 200, alt: "Bar Games" }),
                React.createElement("h2", { className: "text-center text-2xl font-bold leading-9 tracking-tight text-gray-900" },
                    "Welcome back Admin ;",
                    ')')),
            React.createElement("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm" },
                React.createElement("form", { className: "space-y-6", action: "#", method: "POST", onSubmit: signIn },
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900" }, "Email address"),
                        React.createElement("div", { className: "mt-2" },
                            React.createElement("input", { type: "email", placeholder: "Enter your email", value: email, onChange: function (e) { return setEmail(e.target.value); }, autoComplete: "email", required: true, className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" }))),
                    React.createElement("div", null,
                        React.createElement("div", { className: "flex items-center justify-between" },
                            React.createElement("label", { htmlFor: "password", className: "block text-sm font-medium leading-6 text-gray-900" }, "Password")),
                        React.createElement("div", { className: "mt-2" },
                            React.createElement("input", { type: "password", placeholder: "Enter your password", value: password, onChange: function (e) { return setPassword(e.target.value); }, autoComplete: "current-password", required: true, className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" }))),
                    React.createElement("div", null,
                        React.createElement("button", { type: "submit", className: "mb-10 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" }, "Login")))))));
}
exports["default"] = Login;
