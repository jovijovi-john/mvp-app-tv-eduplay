import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/timer.css";
import { QuestionState } from "../QuestionState.jsx"

export const TimerCenario03 = () => {
    const {answered, setAnswered, time, setTime, setIsFinished} = useContext(QuestionState)
    const [seconds, setSeconds] = useState(time)

    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds-1)
            }
        }, 1000);
    
        return () => clearInterval(interval);
    }, [seconds])

    useEffect(() => {
        let interval;

        if (seconds === 0) {
            interval = setInterval(() => {
                setIsFinished(true)
            }, 500)
        }

        setIsFinished(false)

        return () => clearInterval(interval)
    }, [seconds])

    useEffect(() => {
        let interval;
        if(seconds === 0) {
            setAnswered(true)
            // setIsFinished(true)
            interval = setInterval(() => {
                // Navegar para próxima pergunta (nova página)
                setAnswered(false)
                setSeconds(time)

                navigate("/pergunta2");
            }, 2000)
        }

        return () => clearInterval(interval)
    }, [seconds])

    return (
        <>
            <div className="time-circle">
                {seconds}
            </div>
        </>
    );
}