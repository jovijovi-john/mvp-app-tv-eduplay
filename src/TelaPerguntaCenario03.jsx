/* eslint-disable no-unused-vars */
import { useRef, useEffect, useState, useContext } from 'react'
import "./styles/telaPergunta.css"

import { AnswerOptions } from "./components/AnswerOptions.jsx"
import { AnswerOptionsCorrect } from "./components/AnswerOptionsCorrect.jsx"

import { Question } from "./components/Question.jsx"
import { QuestionStatistics } from "./components/QuestionStatistics.jsx"
import { QuestionState } from "./QuestionState.jsx"

import { TimerCenario03 } from "./components/TimerCenario03.jsx"
import { AppIcon } from "./components/AppIcon.jsx"

import perfis from "./perfis.json";
import programas from "./programas.json";
import quizes from "./quizes.json";

import video from "./videos/PGM FINALIZADO 04.mp4"; // Usar um JSON para guardar o nome do programa e os timestamps das cartelas, para sincronizar com o quiz

export function TelaPerguntaCenario03() {

    const programasMap = new Map(Object.entries(programas))
    
    /*{
      path: "./videos/PGM FINALIZADO 03.mp4",
      quizesTimes: [272], // Primeira cartela aparece em 04 min e 32s --> 272 segundos
    }*/

    // const []

    const videos = useRef(Array())

    const numOpt1 = useRef(1);
    const numOpt2 = useRef(1);
    const numOpt3 = useRef(1);
    const numOpt4 = useRef(1);

    const timeLimit = useRef(quizes["programa01"][0]["questTimeLimit"])

    const totalAnswers = 5

    // const questionState = useContext(QuestionState)
    
    const opt1 = useRef(null);
    const opt2 = useRef(null);
    const opt3 = useRef(null);
    const opt4 = useRef(null);

    const {answered, setAnswered, time, setTime, isFinished, setIsFinished, startQuiz, setStartQuiz, currentQuiz, setCurrentQuiz, setQuestTotal, profileSchooling, setProfileSchooling} = useContext(QuestionState)
    const clickedOptId = useRef('')

    const importVideos = (value, key, map) => {
      /*console.log(key)
      console.log(value['path'])*/

      import(value['path']).then((importedVideo) => {
        console.log(importedVideo)
        videos.current.push(importedVideo)
      })
    }

    /*useEffect(() => {
      console.log(videos.current[0])
      console.log(video)
    }, [videos])*/

    useEffect(() => {
      // console.log(video)
      /*console.log(programas['programa01']['path'])
      console.log(quizes['programa01'])*/
      
      // console.log(programasMap.get("programa01"))

      // programasMap.forEach(importVideos)

      // Object.entries(programas).ma

      setProfileSchooling(perfis['perfil01']['escolaridade'])
      setTime(quizes['programa01'][currentQuiz]["questTimeLimit"])
      setQuestTotal(programasMap.get("programa01")["questTotal"])

      /*if (perfis['perfil01']['escolaridade'] === 0 && startQuiz) {
        const elem = document.getElementsByClassName("answer-opt")
        for(let i = 0; i < elem.length; i++) {
          console.log(elem[i].className)
          elem[i].className = "answer-opt-"
        }
      }*/

      if (!answered && startQuiz) {
        // console.log(opt1.current)
        opt1.current.focus()
        clickedOptId.current = "";
        // console.log(document.activeElement)
        numOpt1.current = 1
        numOpt2.current = 1
        numOpt3.current = 1
        numOpt4.current = 1
      }
    }, [answered, startQuiz])

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

    const videoProgress = (elem) => {
      const video = elem.target
      // console.log(video.currentTime)
      // console.log(programasMap.get("programa01")["quizesTimes"][currentQuiz])
      if (video.currentTime >= programasMap.get("programa01")["quizesTimes"][currentQuiz]) {
        console.log(video.currentTime)
        console.log(programasMap.get("programa01")["quizesTimes"][currentQuiz])
        setStartQuiz(true)
      } /*else if (video.currentTime >= programasMap.get("programa01")["quizesTimes"][currentQuiz] + 60) {
        setStartQuiz(false)
      }*/
    }

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
            <video autoPlay controls muted id="myVideo" onProgress={videoProgress}>
              <source src={video} type="video/mp4" />
            </video>

            {startQuiz ? <div id="player">
                <div id="top" className="header">
                    <div id="icon">
                        {<AppIcon />}
                    </div>
                    <div id="timer">
                        {<TimerCenario03 />}
                    </div>
                </div>
                <div id="middleDiv" className="middle">
                    {
                    isFinished ? <QuestionStatistics
                      opt1_stat={(numOpt1.current/totalAnswers)*100}
                      opt2_stat={(numOpt2.current/totalAnswers)*100}
                      opt3_stat={(numOpt3.current/totalAnswers)*100}
                      opt4_stat={(numOpt4.current/totalAnswers)*100} />
                      :
                      <><div id="question">
                          {
                              <Question
                                  question={quizes["programa01"][currentQuiz]["question"][profileSchooling]}
                                  number={quizes["programa01"][currentQuiz]["questNum"]}
                                  total={programasMap.get("programa01")["questTotal"]}
                              />
                          }
                      </div>
                      </>
                    }
                </div>
                <div className="bottom">
                    {
                      answered ? <AnswerOptionsCorrect clickedOpt={clickedOptId.current} correctOptId={`opt-${quizes["programa01"][currentQuiz]["correctOptIdx"][profileSchooling]+1}-alt`} optsText={quizes["programa01"][currentQuiz]["opts"][profileSchooling]} />
                      :
                      <AnswerOptions opt1={opt1} opt2={opt2} opt3={opt3} opt4={opt4} clickFunc={handleClick} optsText={quizes["programa01"][currentQuiz]["opts"][profileSchooling]} correctOption={quizes["programa01"][currentQuiz]["correctOptIdx"][profileSchooling]} />
                    }
                </div>
            </div>
            :
            <></>}

            
        </>
    );
}