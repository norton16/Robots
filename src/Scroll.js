import React from 'react';

const Scroll = (props) => {
    return (
        <div class='overflow'>
            {props.children}
        </div>
        );
};

export default Scroll;