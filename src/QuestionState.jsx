/* eslint-disable no-unused-vars */
import { useRef, useState, createContext } from 'react'

export const QuestionState = createContext(null)

export function QuestionStateProvider({ children }) {

    const [answered, setAnswered] = useState(false)
    const [time, setTime] = useState(10)

    return (
        <QuestionState.Provider value={{answered, setAnswered, time, setTime}}>
            {children}
        </QuestionState.Provider>
    );
}