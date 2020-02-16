import React from 'react';
import Tabs from '../reusable-components/tabs/Tabs';
import Tab from '../reusable-components/tabs/Tab';
import './../styles/_sort.scss';

const Sort = ({ isMobile = false, sortedProducts }) => {
    return (
        <div className={`sort${isMobile ? '-mobile' : ''}`}>
            {isMobile && <>
                <div className="sort-mobile__label">SORT</div>
                <div className="f-c" onChange={(e) => sortedProducts(e.target.value, e.target.dataset.isasc)}>
                    <div>
                        <input
                            id="lowToHigh"
                            type="radio"
                            value="price"
                            name="sortBy"
                            defaultChecked />&nbsp;<label for="lowToHigh">Price - Low to High</label>
                    </div>
                    <div>
                        <input
                            id="highToLow"
                            type="radio"
                            value="price"
                            data-isasc="true"
                            name="sortBy" />&nbsp;<label for="highToLow">Price - High to Low</label>
                    </div>
                    <div>
                        <input
                            id="discount"
                            type="radio"
                            value="discount"
                            data-isasc="true"
                            name="sortBy" />&nbsp;<label for="discount">Discount (%)</label>
                    </div>
                </div>
            </>}
            {!isMobile && <>
                <div className="sort__label">SORT BY</div>
                <Tabs rowDirection activeClass="activeTab" activeTab="tab1">
                    <Tab id="tab1" onClick={() => sortedProducts('price', false)}>
                        Price - Low to High
                </Tab>
                    <Tab id="tab2" onClick={() => sortedProducts('price', true)}>
                        Price - Hight to Low
                </Tab>
                    <Tab id="tab3" onClick={() => sortedProducts('discount', true)}>
                        Discount (%)
                </Tab>
                </Tabs>
            </>}
        </div>
    );
};

export default Sort;