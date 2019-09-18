import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <input 
        className = 'pa3 ma3 ba b--white'
        type='search' 
        placeholder='Search robots'
        onChange = {searchChange}
        />
    );
}

export default SearchBox;