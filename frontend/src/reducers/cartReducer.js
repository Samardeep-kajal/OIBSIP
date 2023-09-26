function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const alreadyExists = state.cartItems.find(
        (item) =>
          item._id === action.payload._id &&
          item.variant === action.payload.variant
      );
      if (alreadyExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === action.payload._id ? action.payload : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
    case "DELETE_FROM_CART":
      const { _id, size } = action.payload;

      const indexToRemove = state.cartItems.findIndex(
        (item) => item._id === _id && item.size === size
      );

      if (indexToRemove !== -1) {
        const updateCartItems = [
          ...state.cartItems.slice(0, indexToRemove),
          ...state.cartItems.slice(indexToRemove + 1),
        ];
        return {
          ...state,
          cartItems: updateCartItems,
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};
