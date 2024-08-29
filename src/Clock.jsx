import { useState, useEffect } from 'react';

function Clock() {
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

    let [hourDisplay, minuteDisplay, secondDisplay] = [0,0,0];

    // setInterval function goes here
    let timer = setInterval(
        () => {
            if(second < 60) {
                setSecond(second+1);
            }
            else {
                setSecond(0);
                setMinute(minute+1);
            }

            if(minute == 60) {
                setMinute(0);
                setHour(hour+1);
            }

            if(hour == 24) {
                setSecond(0);
                setMinute(0);
                setHour(0);

                clearInterval(timer);
            }

            minuteDisplay = String(minute).padStart(2, '0');
            secondDisplay = String(second).padStart(2, '0');
            hourDisplay = String(hour).padStart(2, '0');
        },
        1000
    );

    return (
        <>
            <div className="clock">
                <p> {hourDisplay} </p>
                <p> : </p>
                <p> {minuteDisplay} </p>
                <p> : </p>
                <p> {secondDisplay} </p>
            </div>
        </>
    )
}

export default Clock;