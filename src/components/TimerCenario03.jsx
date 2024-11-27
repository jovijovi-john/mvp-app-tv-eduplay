import { useState, useEffect, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/timer.css";
import { QuestionState } from "../QuestionState.jsx"

export const TimerCenario03 = () => {
    const {answered, setAnswered, time, setTime, isFinished, setIsFinished, setStartQuiz, currentQuiz, setCurrentQuiz} = useContext(QuestionState)
    const [seconds, setSeconds] = useState(time)
    // const middleDiv = useRef(document.getElementById("middleDiv"));

    const navigate = useNavigate();

    useEffect(() => { // Contagem regressiva
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds-1)
            }
        }, 1000);
    
        return () => clearInterval(interval);
    }, [seconds])

    /*useEffect(() => {
        console.log(middleDiv.current)
    }, [answered])*/

    useEffect(() => {
        let interval;
        if (seconds === 0) {
            interval = setInterval(() => {
                /*const middleDiv = document.getElementById("middleDiv");
                // const child = middleDiv.firstChild
                if(middleDiv && middleDiv.childElementCount > 0) {
                    console.log("entrou")
                    middleDiv.innerHTML = ""
                    // middleDiv.removeChild(child)
                }*/

                setIsFinished(true)
            }, 500)
        }

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
                setStartQuiz(false)
                
                // if ()
                setCurrentQuiz(currentQuiz+1)
                setIsFinished(false)

                // navigate("/pergunta2");
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