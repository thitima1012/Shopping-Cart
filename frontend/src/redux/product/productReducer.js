import { initialState } from "./initialState";
import { ADD_PRODUCT, ADD_QUANTITY, REMOVE_QUANTITY } from "./actionType";

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.nameProduct || action.payload.title || "",
          category: action.payload.Category || action.payload.category || "",
          quantity: Number(action.payload.Quantity ?? action.payload.quantity ?? 0),
          price: Number(action.payload.Price ?? action.payload.price ?? 0),
          imageUrl: action.payload.imageURL || action.payload.imageUrl || "",
        },
      ];

    case ADD_QUANTITY:
      return state.map((p) => {
        if (p.id === action.payload.productId) {
          return { ...p, quantity: (p.quantity || 0) + (action.payload.quantity || 1) };
        }
        return p;
      });

    case REMOVE_QUANTITY:
      return state.map((p) => {
        if (p.id === action.payload) {
          const nextQty = (p.quantity || 0) - 1;
          return { ...p, quantity: nextQty >= 0 ? nextQty : 0 };
        }
        return p;
      });

    default:
      return state;
  }
};

export default productReducer;
