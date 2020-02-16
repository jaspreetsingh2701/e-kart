import React, { useState } from 'react';
import loader_cms from '../assets/loader_cms.gif';

const Product = ({ product, requestAddToCartRequest }) => {
    const [imageError, setErrorOnImageLoad] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const image = product.img_url;
    const onImageLoadHandler = () => {
        setLoaded(true);
    };
    const onImageErrorHandler = () => {
        setErrorOnImageLoad(true);
    };
    return (
        <div className="product">
            <img style={{ display: loaded ? 'block' : 'none' }} className="product__image" onLoad={onImageLoadHandler} onError={onImageErrorHandler} src={image} alt={product.name} />
            {!imageError && !loaded &&
                <div className="product__image--loading">
                    <img style={{ height: 50 }} src={loader_cms} alt="loading" />
                </div>}
            {imageError && <div className="product__image--error">Error showing image!</div>}
            <div className="product__description">
                <div className="product__name">{product.name}</div>
                <div className="product__price_wrapper">
                    <div className="product__price_wrapper__discounted_price">₹{product.price - (product.price * product.discount / 100)}</div>
                    {product.discount > 0 && <div className="product__price_wrapper__price">
                        <strike>₹{product.price}</strike>
                    </div>}
                    {product.discount > 0 && <div className="product__price_wrapper__discount">({product.discount}% OFF)</div>}
                </div>
            </div>
            <button className="btn-primary btn-full" onClick={() => requestAddToCartRequest(product.id)}>Add to Cart</button>
        </div>
    );
};

export default Product;