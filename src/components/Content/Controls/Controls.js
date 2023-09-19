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

        // Отправляется запрос на локалхост:8080
        // no-cors требуется, потому что сервер простой и не предусматривает защиты от cross-origin-запросов 
        fetch('http://192.168.56.1:8080/grades?discipline=theory_of_neural_network', {
            method: 'GET',
            mode: 'no-cors',
        })
        // fetch('http://192.168.56.1:8080/grades?discipline=theory_of_neural_network&name=Artiom&grade=5', {
        //     method: 'POST',
        //     mode: 'no-cors',
        //     body: '1234',
        // })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.error(err);
        })

        // const ws = new WebSocket('http://localhost:8080');

        // ws.onopen = () => {
        //     ws.send('1234');
        //     ws.close();
        // }
    }

    return (
        <div className='controls'>
            <div></div>
            <MyButton text='Поправить!' callback={correct}/>
        </div>
    );
};

export default Controls;
