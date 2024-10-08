import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const incrementButtonClickHandler = () => {
        setCount(count + 1);
    }

    const resetButtonClickHandler = () => {
        setCount(0)
    }

    const decrementButtonClickHandler = () => {
        setCount(count - 1)
    }

    return (
        <>
            <h1>Counter: </h1>
            <p>{count}</p>
            <button onClick={decrementButtonClickHandler}>-</button>
            <button onClick={incrementButtonClickHandler}>+</button>
            <button onClick={resetButtonClickHandler}>0</button>
        </>
    );
}