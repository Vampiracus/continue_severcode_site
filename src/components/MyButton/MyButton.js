import React from 'react';
import './myButton.scss';

const MyButton = ({ text, callback }) => {
    return (
        <button className='myButton' onClick={ callback }>{ text }</button>
    );
};

export default MyButton;
