import { combineReducers } from 'redux';
import homeReducer from './home/homeReducer';
import cartReducer from './cart/cartReducer';
import toasts from './reusable-components/toasts/toastsReducer';

const rootReducer = combineReducers({
    home: homeReducer,
    cart: cartReducer,
    toasts
});

export default rootReducer;