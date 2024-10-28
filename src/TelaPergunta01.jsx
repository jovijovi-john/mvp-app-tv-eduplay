/* eslint-disable no-unused-vars */
import { useRef, useEffect } from 'react'
import "./styles/telaPergunta01.css"

import { AnswerOptions } from "./components/AnswerOptions.jsx"
import { AnswerOptionsCorrect } from "./components/AnswerOptionsCorrect.jsx"

import { Question } from "./components/Question.jsx"
import { QuestionStatistics } from "./components/QuestionStatistics.jsx"

import { Timer } from "./components/Timer.jsx"
import { AppIcon } from "./components/AppIcon.jsx"

export default function TelaPergunta01() {
    const currentRowIndexRef = useRef(0);
    const currentElementIndexRef = useRef(0);
    const telespecRef = useRef();
    const confRef = useRef();

    const focusableElements = [useRef([]), useRef([])];
    let currentRowIndex = currentRowIndexRef.current;
    let currentElementIndex = currentElementIndexRef.current;

    useEffect(() => {
        document.getElementById('opt-1').focus();

        const handleKeyDown = (event) => {
          switch (event.code) {
            case "ArrowUp":
              event.preventDefault();
              if (currentRowIndex === 0) {
                document.getElementById("opt-1").focus();
              } else if (currentRowIndex > 0) {
                currentRowIndex -= 1;
                currentElementIndex = 0;
                focusableElements[currentRowIndex].current[
                  currentElementIndex
                ].focus();
              } else if (document.activeElement.id === "opt-3") {
                focusableElements[currentRowIndex].current[
                  currentElementIndex
                ].focus();
              }
              break;
            case "ArrowDown":
              event.preventDefault();
              if (currentRowIndex === 2) {
                document.getElementById("opt-1").focus();
              } else if (document.activeElement === telespecRef.current) {
                focusableElements[currentRowIndex].current[
                  currentElementIndex
                ].focus();
              } else if (currentRowIndex < focusableElements.length - 1) {
                currentRowIndex += 1;
                currentElementIndex = 0;
                focusableElements[currentRowIndex].current[
                  currentElementIndex
                ].focus();
              }
              break;
            case "ArrowLeft":
              event.preventDefault();
              if (currentElementIndex > 0) {
                currentElementIndex -= 1;
                focusableElements[currentRowIndex].current[
                  currentElementIndex
                ].focus();
              }
              break;
            case "ArrowRight":
              event.preventDefault();
              if (
                currentElementIndex <
                focusableElements[currentRowIndex].current.length - 1
              ) {
                currentElementIndex += 1;
                focusableElements[currentRowIndex].current[
                  currentElementIndex
                ].focus();
              }
              break;
            default:
              break;
          }
          // audioQueue.push(audioFile);
        };
    
        window.addEventListener("keydown", handleKeyDown);
    
        return () => {
          window.removeEventListener("keydown", handleKeyDown);
        };
      })

    return (
        <>
            <div id="player">
                <div id="top" className="header">
                    <div id="icon">
                        {<AppIcon />}
                    </div>
                    <div id="question">
                        {
                            <Question
                                question={"Qual é o planeta mais próximo do Sol?"}
                                number={1}
                                total={5}
                            />
                        }
                    </div>
                    <div id="timer">
                        {<Timer current={60} />}
                    </div>
                </div>
                <div className="middle">
                    {<QuestionStatistics opt1_stat={20} opt2_stat={30} opt3_stat={10} opt4_stat={40} />}
                </div>
                <div className="bottom">
                    {<AnswerOptions optRef={focusableElements[currentRowIndex].current[currentElementIndex]} />}
                </div>
            </div>

        </>
    );
}