import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <input 
        className = 'pa3 ma3 mb4 mt1 ba br2 b--white'
        type='search' 
        placeholder='Start searching!'
        onChange = {searchChange}
        />
    );
}

export default SearchBox;