import React from 'react';

const Btn = (prop) => {
    return (
        <button className={`btn ${prop.class}`}>
            {prop.name}
        </button>
    );
};

export default Btn;