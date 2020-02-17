import React from 'react';
import InputRange from 'react-input-range';
import './../styles/_filter.scss';

const Filter = ({ isMobile = false, range, value, changeRangeValue, priceRangeFilter }) => {
    return (
        <div className={`filter${isMobile ? '-mobile' : ''}`}>
            <div className="filter__label">FILTER</div>
            <InputRange
                step={100}
                minValue={range.min}
                maxValue={range.max}
                formatLabel={value => `${value} Rs`}
                value={value}
                onChange={value => changeRangeValue(value)} />
            <div className="filter__action">
                <button className="btn-primary" onClick={priceRangeFilter}>Apply</button>
            </div>
        </div>
    );
};

export default Filter;