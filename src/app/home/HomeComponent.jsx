import React from 'react';
import { sort_by, setMinValue, setMaxValue } from '../utils/utilities';
import Header from '../common/header';
import "react-input-range/lib/css/index.css";
import Sort from '../common/sort';
import './../styles/_home.scss';
import Products from '../common/products';
import Filter from '../common/filter';
import Modal from '../reusable-components/modal/Modal';
import Spinner from '../common/spinner';
import NoData from '../common/no-data';
class HomeComponent extends React.Component {

    static calculateDiscount = (product, key) => {
        return product[key] - (product[key] * product.discount / 100);
    }

    state = {
        products: [],
        filteredProducts: [],
        range: {
            min: 0,
            max: 0
        },
        value: {
            min: 0,
            max: 0
        },
        isFiltered: false,
        cartItemsCount: 0,
        width: window.innerWidth,
        isSortModal: false,
        isFilterModal: false
    };

    componentDidMount() {
        this.fetchProducts();
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.productsData && (prevState.products !== nextProps.productsData) && !prevState.isFiltered) {
            return {
                range: {
                    min: setMinValue(nextProps.productsData, 'price'),
                    max: setMaxValue(nextProps.productsData, 'price')
                },
                value: {
                    min: setMinValue(nextProps.productsData, 'price'),
                    max: setMaxValue(nextProps.productsData, 'price')
                },
                products: nextProps.productsData.sort(sort_by('price', false, HomeComponent.calculateDiscount)),
                filteredProducts: nextProps.productsData.sort(sort_by('price', false, HomeComponent.calculateDiscount)),
                cartItemsCount: nextProps.cart.totalProducts ? nextProps.cart.totalProducts : 0
            };
        }
        else if (nextProps.cart.products.length !== prevState.cartItemsCount) {
            return {
                cartItemsCount: nextProps.cart.totalProducts ? nextProps.cart.totalProducts : 0
            }
        }
        return null;
    }

    render() {
        const { filteredProducts, range, value, cartItemsCount, width, isSortModal, isFilterModal } = this.state;
        const { requestAddToCartRequest, showSpinner } = this.props;
        const { priceRangeFilter, sortedProducts, changeRangeValue, showSortModal, showFilterModal, closeModal, searchCallback } = this;
        const isMobile = width <= 500;
        return (
            <>
                <Header cartItemsCount={cartItemsCount} searchCallback={searchCallback} />
                <section className="home">
                    {showSpinner && <Spinner size="lg" />}
                    {!showSpinner && filteredProducts.length === 0 && <NoData />}
                    <div className="home__wrapper">
                        {filteredProducts && filteredProducts.length > 0 && <div className="f-c">
                            {isMobile && <div className="home__filters">
                                <div className="home__filters__action" onClick={showSortModal}>
                                    <i className="fa fa-sort" />&nbsp;Sort
                            </div>
                                <div className="home__filters__action" onClick={showFilterModal}>
                                    <i className="fa fa-filter" />&nbsp;Filter
                            </div>
                            </div>}
                            {isMobile && <>
                                {isSortModal && <Modal closeModal={closeModal}>
                                    <Sort isMobile={true} sortedProducts={sortedProducts} />
                                </Modal>}
                                {isFilterModal && <Modal closeModal={closeModal}>
                                    <Filter isMobile={true} range={range} value={value} changeRangeValue={changeRangeValue} priceRangeFilter={priceRangeFilter} />
                                </Modal>}
                            </>}
                            <div className="f-r" style={{ height: '100%' }}>
                                {!isMobile && <div className="home__wrapper__filter">
                                    <Filter showSpinner={filteredProducts && filteredProducts.length > 0 ? false : true} range={range} value={value} changeRangeValue={changeRangeValue} priceRangeFilter={priceRangeFilter} />
                                </div>}
                                <div className="f-c">
                                    {!isMobile && <Sort sortedProducts={sortedProducts} />}
                                    <Products
                                        products={filteredProducts}
                                        requestAddToCartRequest={requestAddToCartRequest}
                                    />
                                </div>
                            </div>
                        </div>}
                    </div>
                </section>
            </>
        );
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    fetchProducts = () => {
        const { requestProductsJSON } = this.props;
        requestProductsJSON();
    };

    sortedProducts = (key, isAsc = false) => {
        const { products } = this.state;
        this.setState({
            filteredProducts: products.sort(sort_by(key, isAsc, HomeComponent.calculateDiscount))
        });
    }

    priceRangeFilter = () => {
        const { value, products } = this.state;
        this.setState({
            isFiltered: true,
            filteredProducts: products.filter(function (x) { return x.price >= value.min && x.price <= value.max })
        });
    };

    searchCallback = e => {
        const { products } = this.state;
        this.setState({
            filteredProducts: products.filter(product => product.name.toLowerCase().includes(e.target.value.toLowerCase()))
        });
    };

    changeRangeValue = value => {
        this.setState({
            value
        });
    };

    showSortModal = () => {
        this.setState({
            isSortModal: true
        });
    };

    showFilterModal = () => {
        this.setState({
            isFilterModal: true
        });
    };

    closeModal = () => {
        this.setState({
            isSortModal: false,
            isFilterModal: false
        });
    };
}

export default HomeComponent;