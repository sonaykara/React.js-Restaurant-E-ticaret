import { createSlice } from "@reduxjs/toolkit";

const getBasketLocalStorage = () => {
  if (localStorage.getItem("basket")) {
    return JSON.parse(localStorage.getItem("basket"));
  }
  return [];
};

const saveBasketLocalStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

const initialState = {
  products: getBasketLocalStorage() || [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const findProduct = state.products.find(
        (product) => product.locationId === action.payload.locationId
      );
      if (findProduct) {
        findProduct.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
      saveBasketLocalStorage(state.products);
    },
    updateStateProduct: (state, action) => {
      state.products = action.payload;
      saveBasketLocalStorage(state.products);
    },

    updateStateProductQuantity: (state, action) => {
      const findProduct = state.products.find(
        (product) => product.locationId === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity = action.payload.quantity;
      }
      saveBasketLocalStorage(state.products);
    },
    removeItemBasket: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.locationId === action.payload
      );
      if (index !== -1) {
        state.products.splice(index, 1);
        saveBasketLocalStorage(state.products);
      }
    },
  },
});

export const {
  addToBasket,
  updateStateProduct,
  updateStateProductQuantity,
  removeItemBasket,
} = basketSlice.actions;

export default basketSlice.reducer;
