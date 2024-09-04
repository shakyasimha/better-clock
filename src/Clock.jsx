import { useState, useEffect } from 'react';


// Clock display
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

    // setInterval function goes here
    useEffect(() => {
        let interval = setInterval(() => {
            let now = new Date();
            setHour(now.getHours());
            setMinute(now.getMinutes());
            setSecond(now.getSeconds());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <ClockDisplay hour={hour} minute={minute} second={second} />
        </>
    )
}

export default Clock;