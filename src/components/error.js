import React from 'react';

const error = ({mensaje}) => {
    return (
       
            <p className='alert alert-danger error'>{mensaje}</p>
        
    );
};

export default error;