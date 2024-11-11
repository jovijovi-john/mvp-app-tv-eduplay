/* eslint-disable no-unused-vars */
import { useRef, useState, createContext } from 'react'

export const QuestionState = createContext(null)

export function QuestionStateProvider({ children }) {

    const [answered, setAnswered] = useState(false)
    const [time, setTime] = useState(10)
    const [isFinished, setIsFinished] = useState(false)
    const clickedOptId = useRef('')

    return (
        <QuestionState.Provider value={{answered, setAnswered, time, setTime, isFinished, setIsFinished, clickedOptId}}>
            {children}
        </QuestionState.Provider>
    );
}