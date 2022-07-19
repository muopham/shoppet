const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      const newItem = action.payload;
      const duplicates = state.find((e) => e.slug === newItem.slug);
      if (duplicates) {
        return state.map((item) => {
          if (item.slug === newItem.slug) {
            return {
              ...item,
              quantity: newItem.quantity + duplicates.quantity,
            };
          }
          return item;
        });
      } else {
        state.push(newItem);
      }
    },
    update(state, action) {
      const newItem = action.payload;
      const duplicates = state.find((e) => e.slug === newItem.slug);
      if (duplicates) {
        return state.map((item) => {
          if (item.slug === newItem.slug) {
            return {
              ...item,
              quantity: newItem.quantity,
            };
          }
          return item;
        });
      }
    },
    remove(state, action) {
      const newItem = action.payload;
      return (state = state.filter((e) => e.slug !== newItem.slug));
    },
  },
});

export const { add, update, remove } = cartSlice.actions;
export default cartSlice.reducer;
