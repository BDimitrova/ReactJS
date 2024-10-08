import { useState } from "react";

export default function Timer() {
    const [time, setTime] = useState(0);

    // let time = stateArr[0]; //Read only
    // let setTime = stateArr[1];

    setTimeout(() => {
        setTime(time + 1);
        // setTime(oldCount => oldCount + 1); // Protects from racing congitionss
    }, 1000);

    return (
        <>
            <h1>Timer</h1>
            <p>{time}</p>
        </>
    );
}
