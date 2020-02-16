import React from 'react';

const Search = ({ searchCallback }) => {
    return (
        <input className="header__root__search_input" placeholder="Search" onChange={searchCallback} />
    );
};

export default Search;