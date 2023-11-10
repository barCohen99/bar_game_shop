"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRouterDom = require("react-router-dom");

var _useAuth2 = _interopRequireDefault(require("./custom-hooks/useAuth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProtectedRoute = function ProtectedRoute() {
  var _useAuth = (0, _useAuth2["default"])(),
      currentUser = _useAuth.currentUser; // return currentUser ? <Outlet /> : <Navigate to="/login" />;
  // return currentUser && <Outlet /> ;

};

var _default = ProtectedRoute;
exports["default"] = _default;