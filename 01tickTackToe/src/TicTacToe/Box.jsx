import React from 'react'

function Box(props) {

    return (
        <div
            onClick={props.onClick}
            style={{
                border: '1px solid black',
                width: '100%',
                height: '100px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            className='box'
        >
            <h2>{props.value} </h2>
        </div>
    );
};

export default Box;