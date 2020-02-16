import React from 'react';
import { Link } from "react-router-dom";

const Cart = ({ cartItemsCount }) => {
    return (
        <div className="cart">
            <Link to="/checkout" style={cartItemsCount <= 0 ? { pointerEvents: 'none' } : {}}>
                <div className="cart__wrapper">
                    <i className="cart__wrapper__icon fa fa-shopping-cart" aria-hidden="true"></i>
                    {cartItemsCount > 0 && <div className="cart__wrapper__count">{cartItemsCount}</div>}
                </div>
            </Link>
        </div>
    );
};

export default Cart;