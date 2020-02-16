import React from 'react';
import { Link } from "react-router-dom";
import Cart from './cart';
import logo from './../assets/logo.svg';
import './../styles/_header.scss';
import Search from './search';

const Header = ({ cartItemsCount, isShowCart = true, searchCallback }) => {
    return (
        <header className="header">
            <div className="header__devInfo">
                <div className="header__devInfo--text">Powered by React</div>
                <img src={logo} alt="logo" />
            </div>
            <div className="header__root">
                <div className="f-r">
                    <div className="header__root--company-text">
                        <Link to="/">e-Kart</Link>
                    </div>
                    {searchCallback && <Search searchCallback={searchCallback} />}
                    {isShowCart && <Cart cartItemsCount={cartItemsCount} />}
                </div>
            </div>
        </header>
    );
};

export default Header;