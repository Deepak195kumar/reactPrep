import { useState, useRef, useEffect } from "react";

const StopWatch = () => {
    const [time, setTime] = useState(0);
    const myRef = useRef(null);

    useEffect(()=>{
        return () =>{
            clearInterval(myRef.current);
        }
    }, []);

    const startHandler = () => {
        myRef.current = setInterval(()=>{
            setTime(prevTime => prevTime + 1);
        }, 1000);
    }
    
    const pauseHandler = () => {
        clearInterval(myRef.current);
    }

    const resetHandler = () => {
        clearInterval(myRef.current);
        setTime(0);
    }

    return(
        <>
           <h1>Stop Watch</h1>
           <h3>{time}</h3>
           <button onClick={startHandler}>Start</button>
           <button onClick={pauseHandler}>Pause</button>
           <button onClick={resetHandler}>Reset</button>
        </>
    )
}

export default StopWatch;

