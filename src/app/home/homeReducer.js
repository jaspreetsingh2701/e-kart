import HomeActionTypes from './HomeActionTypes';

const INITIAL_STATE = {};

const homeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HomeActionTypes.REQUEST_PRODUCTS_JSON: {
            return {
                ...state,
                productsData: [],
                showSpinner: true
            }
        }

        case HomeActionTypes.RECEIVE_PRODUCTS_JSON: {
            const { productsData } = action.payload;
            return {
                ...state,
                productsData,
                showSpinner: false
            }
        }

        default: return state;
    }
}

export default homeReducer;