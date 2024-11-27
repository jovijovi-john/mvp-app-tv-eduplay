/* eslint-disable no-unused-vars */
import { useRef, useState, createContext } from 'react'

export const QuestionState = createContext(null)

export function QuestionStateProvider({ children }) {

    const [answered, setAnswered] = useState(false)
    const [time, setTime] = useState(60)
    const [isFinished, setIsFinished] = useState(false)
    const [startQuiz, setStartQuiz] = useState(false)
    const [currentQuiz, setCurrentQuiz] = useState(0) // Controlar qual quiz (qual pergunta) mostrar --> guardar perguntas num JSON (o mesmo que guarda os nomes e timestamps dos programas)
    const [questTotal, setQuestTotal] = useState(1)
    const [profileSchooling, setProfileSchooling] = useState(0) // 0 == Fundamental; 1 == Médio

    const clickedOptId = useRef('')

    return (
        <QuestionState.Provider value={{ answered, setAnswered, time, setTime, isFinished, setIsFinished, clickedOptId, startQuiz, setStartQuiz, currentQuiz, setCurrentQuiz, questTotal, setQuestTotal, profileSchooling, setProfileSchooling }}>
            {children}
        </QuestionState.Provider>
    );
}