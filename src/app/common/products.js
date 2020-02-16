import React from 'react';
import Product from './product';
import './../styles/_product.scss';

const Products = ({ products, requestAddToCartRequest }) => {
    return (
        <div className="products">
            {products.map((product, productIDx) => (
                <Product product={product} key={productIDx} requestAddToCartRequest={requestAddToCartRequest} />
            ))}
        </div>
    );
};

export default Products;