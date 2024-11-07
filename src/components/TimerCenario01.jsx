import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/timer.css";
import { QuestionState } from "../QuestionState.jsx"

export const TimerCenario01 = () => {
    const {answered, setAnswered, time, setTime} = useContext(QuestionState)
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
        if(seconds === 0) {
            setAnswered(true)
            interval = setInterval(() => {
                // Navegar para próxima pergunta (nova página)
                setAnswered(false)
                setSeconds(time)
                navigate("/cenario01/pergunta2");
            }, 2000)
        }

        return () => clearInterval(interval)
    }, [seconds, setAnswered])

    return (
        <>
            <div className="time-circle">
                {seconds}
            </div>
        </>
    );
}