import { useState, useEffect } from 'react';

function Date() {
    const monthDict = {
        0:"January", 
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December"
    }

    const dayDict = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
    }

    const dateTime = new Date();
    

    const fullDate = $`{day}, {date} {month} {year}`
    return (
        <div class="date">
            <p> {fullDate} </p>
        </div>
    )
}

export default Date;