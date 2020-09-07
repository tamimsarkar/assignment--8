import React from 'react';
const headStyle ={display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize :'42px'
            }

const NotFound = () => {
    return (
        <div>
            <h1 style = {headStyle}>404 | Not Found</h1>
        </div>
    );
};

export default NotFound;