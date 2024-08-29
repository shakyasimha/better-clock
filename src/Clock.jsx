import { useState, useEffect } from 'react';

function ClockDisplay({ hour, minute, second }) {
    return (
        <div className="clock">
            <p> {String(hour).padStart(2, '0')} </p>
            <p> : </p>
            <p> {String(minute).padStart(2, '0')} </p>
            <p> : </p>
            <p> {String(second).padStart(2, '0')} </p>
        </div>
    )
}

function Clock() {
    let now = new Date();

    const [hour, setHour] = useState(now.getHours());
    const [minute, setMinute] = useState(now.getMinutes());
    const [second, setSecond] = useState(now.getSeconds());

    // let [hourDisplay, minuteDisplay, secondDisplay] = [0,0,0];
    // const setCurrentTime = () => {
    //     setHour(now.getHours());
    //     setMinute(now.getMinutes());
    //     setSecond(now.getSeconds());
    // }

    // setInterval function goes here
    useEffect(() => {
        let interval = setInterval(() => {
            setSecond(second+1);

            if(second == 59) {
                setSecond(0);
                setMinute(minute+1);
            }

            if(minute == 59) {
                setMinute(0);
                setHour(hour+1);
            }

            if(hour == 24) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [second, minute, hour]);

    return (
        <>
            <ClockDisplay hour={hour} minute={minute} second={second} />
        </>
    )
}

export default Clock;