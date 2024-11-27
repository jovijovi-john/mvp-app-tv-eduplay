import { useState, useEffect, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/timer.css";
import { QuestionState } from "../QuestionState.jsx"

export const TimerCenario03 = () => {
    const {answered, setAnswered, time, setTime, isFinished, setIsFinished, setStartQuiz, currentQuiz, setCurrentQuiz} = useContext(QuestionState)
    const [seconds, setSeconds] = useState(time)
    // const middleDiv = useRef(document.getElementById("middleDiv"));

    const navigate = useNavigate();

    useEffect(() => { // Contagem regressiva do timer
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

    useEffect(() => { // Mostrar estatísticas ao final no quiz (timer chega a 0)
        let interval;
        if (seconds === 0) {
            interval = setTimeout(() => {
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

    useEffect(() => { // Mostrar resposta correta e atualizar o contexto do programa ao final do quiz (timer chega a 0)
        let interval;
        if(seconds === 0) {
            setAnswered(true)
            // setIsFinished(true)
            interval = setTimeout(() => {
                setAnswered(false)
                setSeconds(time)
                setStartQuiz(false)
                
                setCurrentQuiz(currentQuiz+1)
                setIsFinished(false)

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