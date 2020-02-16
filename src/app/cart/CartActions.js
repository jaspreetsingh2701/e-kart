import CartActionTypes from "./CartActionTypes";
import { addToast } from "../reusable-components/toasts/ToastActions";

export const addToCart = (productID) => {
    return (dispatch) => {
        dispatch(addToast({ text: 'Product added to cart successfully!' }));
        dispatch({ type: CartActionTypes.ADD_TO_CART, payload: { productID } });
    }
};

export const removeFromCart = (productID) => {
    return {
        type: CartActionTypes.REMOVE_FROM_CART,
        payload: {
            productID
        }
    }
};

export const removeProductFromCart = (productID) => {
    return {
        type: CartActionTypes.REMOVE_PRODUCT_FROM_CART,
        payload: {
            productID
        }
    }
};