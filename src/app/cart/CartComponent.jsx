import React from 'react';
import Header from '../common/header';
import NoData from '../common/no-data';
import './../styles/_cart.scss';
import { confirmationCallback } from '../utils/utilities';
class CartComponent extends React.Component {

    state = {
        cartItems: {},
        totalPrice: 0,
        totalDiscount: 0,
        totalPayable: 0
    };

    componentDidMount() {
        const { products, cart } = this.props;
        if (products && products.length > 0) {
            const filteredItems = CartComponent.validateCartItems(products, cart.cart);
            this.setState({
                cartItems: filteredItems
            });
        }
        return null;
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.products && nextProps.cart) {
            return {
                cartItems: CartComponent.validateCartItems(nextProps.products, nextProps.cart.cart)
            };
        }
        return null;
    }

    render() {
        const { cartItems } = this.state;
        const { requestAddToCartRequest, requestRemoveFromCartRequest, requestRemoveProductFromCartRequest } = this.props;
        return (
            <>
                <Header isShowCart={false} />
                <section className="cart-root">
                    {cartItems && Object.keys(cartItems).length === 0 && <NoData />}
                    <div className="cart-root__wrapper">
                        {cartItems && cartItems.length > 0 && <>
                            <div className="cart-root__wrapper__cart-items">
                                {cartItems.map((product, productIDx) =>
                                    <div className="cart-root__wrapper__cart-items__product" key={productIDx}>
                                        <div className="f-r" style={{ flex: 1 }}>
                                            <img className="cart-root__wrapper__cart-items__product--img" src={product.product.img_url} alt={product.name} />
                                            <div className="f-c" style={{ marginLeft: 8, flex: 1 }}>
                                                <div className="cart-root__wrapper__cart-items__product--name">{product.product.name}</div>
                                                <div className="f-r" style={{ flexWrap: 'wrap' }}>
                                                    <div className="cart-root__wrapper__cart-items__product--discounted-price">₹{product.product.price - (product.product.price * product.product.discount / 100)}</div>
                                                    <div className="cart-root__wrapper__cart-items__product--price">
                                                        <strike>₹{product.product.price}</strike>
                                                    </div>
                                                    <div className="cart-root__wrapper__cart-items__product--discount">({product.product.discount}% OFF)</div>
                                                    <div className="cart-root__wrapper__cart-items__product__actions">
                                                        <i onClick={() => requestRemoveFromCartRequest(product.product.id)} className="fa fa-minus-circle" aria-hidden="true"></i>
                                                        <div>{product.quantity}</div>
                                                        <i onClick={() => requestAddToCartRequest(product.product.id)} className="fa fa-plus-circle" aria-hidden="true"></i>
                                                        <button
                                                            className="btn-primary"
                                                            onClick={() => confirmationCallback(requestRemoveProductFromCartRequest, product.product.id, `Are you sure you want to remove ${product.product.name} from cart?`)}>REMOVE</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="cart-root__price-details">
                                <div className="cart-root__price-details--label">CHECKOUT</div>
                                <div className="cart-root__price-details__sub">
                                    <div className="cart-root__price-details__sub__label">
                                        <div className="cart-root__price-details__sub__label--label">Price</div>
                                        <div className="cart-root__price-details__sub__label--value">{this.calculateTotalPrice()}</div>
                                    </div>
                                    <div className="cart-root__price-details__sub__label">
                                        <div className="cart-root__price-details__sub__label--label">Discount</div>
                                        <div className="cart-root__price-details__sub__label--value">{this.calculateTotalPrice() - this.calculateTotalDiscount()}</div>
                                    </div>
                                </div>
                                <div className="cart-root__price-details__payable">
                                    <div className="cart-root__price-details__payable--label">Payable</div>
                                    <div className="cart-root__price-details__payable--value">{this.calculateTotalPrice() - (this.calculateTotalPrice() - this.calculateTotalDiscount())}</div>
                                </div>
                            </div>
                        </>}
                    </div>
                </section>
            </>
        );
    }

    static validateCartItems = (products, cart) => {
        const filteredItems = [];
        products.filter(product =>
            cart.products.some(cartProduct => {
                if (product.id === cartProduct.productID) {
                    filteredItems.push({
                        product,
                        quantity: cartProduct.quantity
                    });
                    // console.log('filteredItems', filteredItems);
                }
                return null;
            })
        );
        return filteredItems;
    };

    calculateTotalPrice = () => {
        const { cartItems } = this.state;
        let sum = 0;
        cartItems.map(product => sum += product.product.price * product.quantity);
        return sum;
    };

    calculateTotalDiscount = () => {
        const { cartItems } = this.state;
        let sum = 0;
        cartItems.map(product => sum += ((product.product.price * product.quantity) - ((product.product.price * product.quantity) * product.product.discount / 100)));
        return sum;
    }
}

export default CartComponent;