import { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(count);
    }, [count]);

    return(
        <div className="counter">
            <h1> Count: {count} </h1>
            
            <div className="button-container">
                <button className="button-type-1" onClick={() => setCount(count+1)}>
                    Increase
                </button>
                <button className="button-type-1" onClick={() => setCount(count-1)}>
                    Decrease
                </button>
            </div>
        </div>
    )
}

export default Counter;