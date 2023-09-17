import React from 'react';
import './controls.scss';
import MyButton from '../../MyButton/MyButton';

const Controls = () => {
    const correct = () => {
        const el = document.querySelector('#myTextarea');
        if (!el) return;

        el.innerHTML = `
        Тут д<strong>о</strong>пущено мног<strong>о</strong> разных <strong>о</strong>шибок<strong>:</strong> грам<strong>м</strong>атических<strong>,</strong> <strong>о</strong>рф<strong>о</strong>графичесих и пункт<strong>у</strong>ационных
        `
    }

    return (
        <div className='controls'>
            <div></div>
            <MyButton text='Поправить!' callback={correct}/>
        </div>
    );
};

export default Controls;
