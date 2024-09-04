import { useState, useEffect } from 'react';

// Defining dicts here
// const monthDict = {
//     0:"January", 
//     1: "February",
//     2: "March",
//     3: "April",
//     4: "May",
//     5: "June",
//     6: "July",
//     7: "August",
//     8: "September",
//     9: "October",
//     10: "November",
//     11: "December"
// }

// const months = {
//     'Jan':"January", 
//     "Feb": "February",
//     "Mar": "March",
//     "Apr": "April",
//     "May": "May",
//     "Jun": "June",
//     "Jul": "July",
//     "Aug": "August",
//     "Sept": "September",
//     "Oct": "October",
//     "Nov": "November",
//     "Dec": "December"
// }

// const dayDict = {
//     0: "Sunday",
//     1: "Monday",
//     2: "Tuesday",
//     3: "Wednesday",
//     4: "Thursday",
//     5: "Friday",
//     6: "Saturday"
// }

// const days = {
//     "Sun": "Sunday",
//     "Mon": "Monday",
//     "Tue": "Tuesday",
//     "Wed": "Wednesday",
//     "Thu": "Thursday",
//     "Fri": "Friday",
//     "Sat": "Saturday"
// }

function DisplayDate({day, date, month, year}) {
    const fullDate = $`{day}, {date} {month} {year}`

    return (
        <div className="date">
            <p> {fullDate} </p>
        </div>
    )
}
function Date() {
    let now = new Date();

    const [day, setDay] = useState(now.getDay());
    const [date, setDate] = useState(now.getDate());
    const [month, setMonth] = useState(now.getMonth());
    const [year, setYear] = useState(now.getFullYear());
    
    return (
        <DisplayDate day={day} date={date} month={month} year={year} />
    )
}

export default Date;