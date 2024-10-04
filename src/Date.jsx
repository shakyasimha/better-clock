import { useState, useEffect } from 'react';

function Date() {
    let now = new Date();

    const [day, setDay] = useState(now.getDay());
    const [date, setDate] = useState(now.getDate());
    const [month, setMonth] = useState(now.getMonth());
    const [year, setYear] = useState(now.getFullYear());
    
    useEffect(() => {
        let interval = setInterval(
            ()=>{
                let date = new Date();
                setDay(date.getDay());
                setDate(date.getDate());
                setMonth(date.getMonth());
                setYear(date.getFullYear());
            },1000);

            return ()=> clearInterval();
    }, []);

    const fullDate = `${day}, ${date} ${month} ${year}`;
    
    return (
        <div className="date">
            <p> {fullDate} </p>
        </div>
    )
}

export default Date;