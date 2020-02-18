import CartActionTypes from './CartActionTypes';

const INITIAL_STATE = {
    cart: {
        products: [],
        totalProducts: 0
    }
};

let productCounter = 0;

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case CartActionTypes.ADD_TO_CART: {
            return {
                ...state,
                cart: addItemToCart(state.cart, action.payload.productID)
            };
        }

        case CartActionTypes.REMOVE_FROM_CART: {
            return {
                ...state,
                cart: removeItemFromCart(state.cart, action.payload.productID)
            }
        }

        case CartActionTypes.REMOVE_PRODUCT_FROM_CART: {
            return {
                ...state,
                cart: removeProductFromCart(state.cart, action.payload.productID)
            }
        }

        default: return state;
    }
}

export const addItemToCart = (cartItems, productID) => {
    const existingCartProduct = cartItems.products.find(product => product.productID === productID);
    if (existingCartProduct) {
        productCounter++;
        return {
            products: cartItems.products.map(product =>
                product.productID === productID ?
                    { productID, quantity: product.quantity + 1 }
                    : product
            ),
            totalProducts: productCounter
        }
    }
    productCounter++;
    return { products: [...cartItems.products, { productID, quantity: 1 }], totalProducts: productCounter };
};

export const removeItemFromCart = (cartItems, productID) => {
    const existingCartProduct = cartItems.products.find(
        product => product.productID === productID
    );
    if (existingCartProduct.quantity === 1) {
        productCounter--;
        return {
            products: cartItems.products.filter(product => product.productID !== productID),
            totalProducts: productCounter
        };
    }
    productCounter--;
    return {
        products: cartItems.products.map(product =>
            product.productID === productID ?
                { productID, quantity: product.quantity - 1 }
                : product
        ),
        totalProducts: productCounter
    };
};

export const removeProductFromCart = (cartItems, productID) => {
    const existingCartProduct = cartItems.products.find(product => product.productID === productID);
    if (existingCartProduct) {
        productCounter = productCounter - existingCartProduct.quantity;
        return {
            products: cartItems.products.filter(product => product.productID !== productID),
            totalProducts: productCounter
        };
    }
    return cartItems;
};

export default cartReducer;