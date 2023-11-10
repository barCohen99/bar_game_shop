"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.storage = exports.db = exports.auth = void 0;

var _app = require("firebase/app");

var _auth = require("firebase/auth");

var _firestore = require("firebase/firestore");

var _storage = require("firebase/storage");

var firebaseConfig = {
  apiKey: "AIzaSyA_iRi3XUunPeuCDJb2pAHF6DK06EKzR2Y",
  authDomain: "bar-games-43938.firebaseapp.com",
  projectId: "bar-games-43938",
  storageBucket: "bar-games-43938.appspot.com",
  messagingSenderId: "300599756247",
  appId: "1:300599756247:web:371766c892e8544e49f792"
}; // Initialize Firebase

var app = (0, _app.initializeApp)(firebaseConfig);
var auth = (0, _auth.getAuth)(app);
exports.auth = auth;
var db = (0, _firestore.getFirestore)(app);
exports.db = db;
var storage = (0, _storage.getStorage)(app);
exports.storage = storage;
var _default = app;
exports["default"] = _default;