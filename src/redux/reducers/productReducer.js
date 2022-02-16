import * as actions from "../actionsType/actionTypes";
const initState = {
  products: [],
  selectedProduct: {},
  cart: [],
  subTotal: 0,
};

export const productReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.SET_PRODUCTS:
      return { ...state, products: [...action.payload] };
    case actions.SELECTED_PRODUCT:
      return {
        ...state,
        products: [...state.products],
        selectedProduct: { ...action.payload.product },
      };
    case actions.ADD_TO_CART:
      let cart = [];
      let mewValue = { id: action.payload.id, count: 1 };
      state.cart.forEach((element) => {
        if (element.id === action.payload.id) {
          mewValue.count = ++element.count;
          cart = state.cart.filter((_) => _.id !== action.payload.id);
        } else {
          mewValue.count = 1;
          cart = state.cart;
        }
      });
      return {
        ...state,
        cart: [...cart, mewValue],
      };
    case actions.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actions.REMOVE_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: {},
      };
    case actions.EDIT_ARTICLE_IN_CART_NUMBER:
      const newCart = state.cart
        .map((item) => {
          if (item.id === action.payload.id) {
            item.count += action.payload.number;
            return item;
          }
          return item;
        })
        .filter((i) => i.count !== 0);
      return { ...state, cart: newCart };
    case actions.ADD_TO_SUB_TOTAL:
      return {
        ...state,
        subTotal: action.payload.sub,
      };
    case actions.REMOVE_DATA_FROM_CART_AND_SUBTOTAL:
      return {
        ...state,
        subTotal: 0,
        cart: [],
      };
    default:
      return state;
  }
};
