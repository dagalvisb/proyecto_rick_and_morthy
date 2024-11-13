import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementador = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={incrementador}>increase</button>
        </div>
    );
}

export default Counter;