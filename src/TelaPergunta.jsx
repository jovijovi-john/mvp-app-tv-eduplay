/* eslint-disable no-unused-vars */
import { useRef, useEffect, useState, useContext } from 'react'
import "./styles/telaPergunta.css"

import { AnswerOptions } from "./components/AnswerOptions.jsx"
import { AnswerOptionsCorrect } from "./components/AnswerOptionsCorrect.jsx"

import { Question } from "./components/Question.jsx"
import { QuestionStatistics } from "./components/QuestionStatistics.jsx"
import { QuestionState } from "./QuestionState.jsx"

import { Timer } from "./components/Timer.jsx"
import { AppIcon } from "./components/AppIcon.jsx"

export function TelaPergunta({ questType, questTimeLimit }) {

    const numOpt1 = useRef(1);
    const numOpt2 = useRef(1);
    const numOpt3 = useRef(1);
    const numOpt4 = useRef(1);

    const timeLimit = useRef(questTimeLimit)

    const totalAnswers = 5
    const questionType = questType
    /**
     * questionType 0 == Verdadeiro ou False
     * questionType 1 == Quatro Opções
     */

    // const questionState = useContext(QuestionState)
    
    const opt1 = useRef(null);
    const opt2 = useRef(null);
    const opt3 = useRef(null);
    const opt4 = useRef(null);

    const {answered, setAnswered, time, setTime} = useContext(QuestionState)
    const clickedOptId = useRef('')


    useEffect(() => {
      if (!answered) {
        console.log(opt1.current)
        opt1.current.focus()
        console.log(document.activeElement)
      }
    })

    /*useEffect(() => {
      const handleKeyDown = (event) => {
        switch (event.code) {
          case "ArrowUp":
              event.preventDefault();
            
              if (document.activeElement.id === "opt1") {
                document.getElementById("opt3").focus();
              }
            break;
          case "ArrowDown":
            event.preventDefault();
            
            break;
          case "ArrowLeft":
            event.preventDefault();
            
            break;
          case "ArrowRight":
            event.preventDefault();
            
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
    }, [document.activeElement]);*/

    const handleClick = (elem) => {
      const className = elem.target.className
      const elemId = elem.target.id

      clickedOptId.current = elemId

      switch(clickedOptId.current) {
        case "opt-1":
          numOpt1.current++
          break
        case "opt-2":
          numOpt2.current++
          break
        case "opt-3":
          numOpt3.current++
          break
        case "opt-4":
          numOpt4.current++
          break
        default:
          break
        
      }
      
      /*console.log(numOpt1.current)
      console.log(numOpt2.current)
      console.log(numOpt3.current)
      console.log(numOpt4.current)*/

      if (className === "answer-opt" || className === "answer-opt2") {
        // console.log(elemId)
        setAnswered(true);
      }
    }

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
                        {<Timer />}
                    </div>
                </div>
                <div className="middle">
                    {answered ? <QuestionStatistics optType={questionType}
                      opt1_stat={(numOpt1.current/totalAnswers)*100}
                      opt2_stat={(numOpt2.current/totalAnswers)*100}
                      opt3_stat={(numOpt3.current/totalAnswers)*100}
                      opt4_stat={(numOpt4.current/totalAnswers)*100} /> : <></>}
                </div>
                <div className="bottom">
                    {answered ? <AnswerOptionsCorrect optType={questionType} clickedOpt={clickedOptId.current} /> : <AnswerOptions optType={questionType} opt1={opt1} opt2={opt2} opt3={opt3} opt4={opt4} clickFunc={handleClick} />}
                </div>
            </div>
        </>
    );
}