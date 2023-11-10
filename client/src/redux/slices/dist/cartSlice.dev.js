"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.cartActions = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0
};
var cartSlice = (0, _toolkit.createSlice)({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: function addItem(state, action) {
      var newItem = action.payload;
      var existingItem = state.cartItems.find(function (item) {
        return item.id === newItem.id;
      });
      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.totalAmount = state.cartItems.reduce(function (total, item) {
        return total + Number(item.price) * Number(item.quantity);
      }, 0);
    },
    deleteItem: function deleteItem(state, action) {
      var id = action.payload;
      var existingItem = state.cartItems.find(function (item) {
        return item.id === id;
      });

      if (existingItem) {
        state.cartItems = state.cartItems.filter(function (item) {
          return item.id !== id;
        });
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }

      state.totalAmount = state.cartItems.reduce(function (total, item) {
        return total + Number(item.price) * Number(item.quantity);
      }, 0);
    }
  }
});
var cartActions = cartSlice.actions;
exports.cartActions = cartActions;
var _default = cartSlice.reducer;
exports["default"] = _default;