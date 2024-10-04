import { useState, useEffect } from 'react';

function ClockDisplay({ hour, minute }) {
    return (
        <div className="vertical-clock">
            <p> {String(hour).padStart(2, '0')}</p>
            <p> {String(minute).padStart(2, '0')} </p>
        </div>
    )
}

function VerticalClock() {
    let now = new Date();

    const [hour, setHour] = useState(now.getHours());
    const [minute, setMinute] = useState(now.getMinutes());

    useEffect(()=>{
        let interval = setInterval(()=>{
            let now = new Date();
            setHour(now.getHours());
            setMinute(now.getMinutes());
        }, 1000);

        return ()=> clearInterval(interval);
    }, []);

    return (
        <>
            <ClockDisplay hour={hour} minute={minute} />
        </>
    )
}

export default VerticalClock;