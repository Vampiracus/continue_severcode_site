import React from 'react';
import './content.scss';
import BigInput from './BigInput/BigInput';
import Controls from './Controls/Controls';

const Content = () => {
    return (
        <main>
            <BigInput/>
            <Controls/>
        </main>
    );
};

export default Content;
