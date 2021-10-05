import React, { useState } from 'react';

const Counter = () => {

    const [counter, setCounter] = useState(0);

    // Function is called everytime increment button is clicked
    const handleClickIncrement = () => {
        // Counter state is incremented
        setCounter(counter + 1)
    }
    
    // Function is called everytime decrement button is clicked
    const handleClickDecrement = () => {
        // Counter state is decremented
        setCounter(counter - 1)
    }

    //console.log(props);
    return (
        <div>
            <h1>Counter App</h1>
            <section>
                Current Value: {counter}
            </section>
            <section>
                <button onClick={handleClickIncrement}>Increment Counter</button>
                <button onClick={handleClickDecrement}>Decrement Counter</button>
            </section>
        </div>
    );
}


export default Counter;