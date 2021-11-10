import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      //search for index then remove it...
      const index = state.items.findIndex((basketItem) => basketItem.Id === action.payload.Id);
      
      let newBasket = [...state.items];

      if (index >= 0) {

        newBasket.splice(index, 1)
      } else {
        console.warn( `Impossible de retirer le produit (id: ${action.payload.id}) car il n'est pas dans le panier `)
      };
        // The item exist in the basket
        state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
