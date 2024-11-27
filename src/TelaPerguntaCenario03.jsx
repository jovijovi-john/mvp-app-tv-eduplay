/* eslint-disable no-unused-vars */
import { useRef, useEffect, useState, useContext } from 'react'
import "./styles/telaPergunta.css"
import "./styles/style.css";

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

import { socket } from "./services/socket.js"

import pgm4 from "./videos/pgm4.mp4"; // Usar um JSON para guardar o nome do programa e os timestamps das cartelas, para sincronizar com o quiz

import logoImg from "./assets/logo.svg";
import qrcodeImg from "./assets/qrcode.svg";
import numImg from "./assets/num.svg";

export function TelaPerguntaCenario03() {

  const programasMap = new Map(Object.entries(programas))
  const videoElement = useRef();
  const [PIN, setPIN] = useState('');

  const [connectionTime, setConnectionTime] = useState(true)

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

  const { answered, setAnswered, time, setTime, isFinished, setIsFinished, startQuiz, setStartQuiz, currentQuiz, setCurrentQuiz, setQuestTotal, profileSchooling, setProfileSchooling } = useContext(QuestionState)
  const clickedOptId = useRef('')

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function generatePin() {
      const pin = getRandomInt(100000, 999999); 
      // document.getElementById('pin-text').textContent = `PIN ${pin}`;
      setPIN(pin)
  }

  // const importVideos = (value, key, map) => {
  //   import(value['path']).then((importedVideo) => {
  //     console.log(importedVideo)
  //     videos.current.push(importedVideo)
  //   })
  // }

  // useEffect(() => {

  //   setProfileSchooling(perfis['perfil01']['escolaridade'])
  //   setTime(quizes['programa01'][currentQuiz]["questTimeLimit"])
  //   setQuestTotal(programasMap.get("programa01")["questTotal"])


  //   if (!answered && startQuiz) {
  //     opt1.current.focus()
  //     clickedOptId.current = "";
  //     numOpt1.current = 1
  //     numOpt2.current = 1
  //     numOpt3.current = 1
  //     numOpt4.current = 1
  //   }
  // }, [answered, startQuiz])

  useEffect(() => {
    // Gerar PIN quando carregar a página
    generatePin()

    const interval0 = setTimeout(() => {
      setConnectionTime(false)
    }, 11000)

    // Primeiro Quiz
    const interval = setTimeout(() => {

      socket.emit("start-quiz", {
        pin: PIN,
      });

      setStartQuiz(true)
    }, 12000)

    // Segundo Quiz
    const interval2 = setTimeout(() => {
      socket.emit("start-question", {
        pin: PIN,
        questionNumber: 2
      });

      setStartQuiz(true)

    }, 415000)

    // Terceiro Quiz
    const interval3 = setTimeout(() => {
      setStartQuiz(true)
      socket.emit("start-question", {
        pin: PIN,
        questionNumber: 3
      });
    }, 485000)

    // Quarto Quiz
    const interval4 = setTimeout(() => {

      socket.emit("start-question", {
        pin: PIN,
        questionNumber: 4
      });

      setStartQuiz(true)

    }, 624000)

    // Quinto Quiz
    const interval5 = setTimeout(() => {
      socket.emit("start-question", {
        pin: PIN,
        questionNumber: 5
      });
      setStartQuiz(true)
    }, 879000)

    // Sexto Quiz
    const interval6 = setTimeout(() => {

      socket.emit("start-question", {
        pin: PIN,
        questionNumber: 6
      });

      setStartQuiz(true)
    }, 1024000)

    socket.on("get-final-statistics", (data) => {
      // Mostrar quantidade total de acertos totais
      // Mostrar quantidade total de erros totais
    })

    return () => {
      socket.off("start-quiz")
      socket.off("get-final-statistics")
      clearInterval(interval0)
      clearInterval(interval)
      clearInterval(interval2)
      clearInterval(interval3)
      clearInterval(interval4)
      clearInterval(interval5)
      clearInterval(interval6)
    }
  }, [])

  useEffect(() => {
    if (isFinished) {
      socket.emit("finish-quiz")
    }

  }, [isFinished])

  const handleClick = (elem) => {
    const className = elem.target.className
    const elemId = elem.target.id

    clickedOptId.current = elemId

    switch (clickedOptId.current) {
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

    if (className === "answer-opt" || className === "answer-opt2") {
      setAnswered(true);
    }
  }

  return (
    <>
      <video autoPlay controls muted id="myVideo" ref={videoElement}>
        <source src={pgm4} type="video/mp4" />
      </video>

      {
      connectionTime ? <section>
          <div className="topLeft">
            <div className="logoEdu">
                <img src={logoImg} alt="logoEduQuiz" />
            </div>
            <div className="qrcode">
              <img src={qrcodeImg} alt="QRCODE" />
            </div>
          </div>
          <div className="txt">
            <h1 id="pin-text">PIN {PIN}</h1>
          </div>
          <div className="num">
            <img src={numImg} alt="num" />
          </div>
      </section>
      :
      <></>
      }

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
              opt1_stat={(numOpt1.current / totalAnswers) * 100}
              opt2_stat={(numOpt2.current / totalAnswers) * 100}
              opt3_stat={(numOpt3.current / totalAnswers) * 100}
              opt4_stat={(numOpt4.current / totalAnswers) * 100} />
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
            answered ? <AnswerOptionsCorrect clickedOpt={clickedOptId.current} correctOptId={`opt-${quizes["programa01"][currentQuiz]["correctOptIdx"][profileSchooling] + 1}-alt`} optsText={quizes["programa01"][currentQuiz]["opts"][profileSchooling]} />
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