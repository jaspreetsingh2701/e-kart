import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import { fetchProductsJSON } from './HomeActions';
import { addToCart } from '../cart/CartActions';

const mapStateToProps = state => {
    const { productsData, showSpinner } = state.home;
    const { cart } = state.cart;
    return {
        productsData,
        showSpinner,
        cart
    };
};

const mapDispatchToProps = dispatch => {
    const requestProductsJSON = () => dispatch(fetchProductsJSON());
    const requestAddToCartRequest = (productID) => dispatch(addToCart(productID));

    return {
        requestProductsJSON,
        requestAddToCartRequest
    }
};

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent);

export default HomeContainer;