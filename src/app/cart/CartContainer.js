import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import CartComponent from './CartComponent';
import { addToCart, removeFromCart, removeProductFromCart } from './CartActions';
import { addToast } from '../reusable-components/toasts/ToastActions';

const mapStateToProps = state => {
    return {
        products: state.home.productsData,
        cart: state.cart
    };
};

const mapDispatchToProps = dispatch => {
    const requestAddToCartRequest = productID => dispatch(addToCart(productID));
    const requestRemoveFromCartRequest = productID => dispatch(removeFromCart(productID));
    const requestRemoveProductFromCartRequest = productID => dispatch(removeProductFromCart(productID));
    const actions = bindActionCreators({ addToast }, dispatch);
    return {
        requestAddToCartRequest,
        requestRemoveFromCartRequest,
        requestRemoveProductFromCartRequest,
        actions
    }
};

const CartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CartComponent);

export default CartContainer;
