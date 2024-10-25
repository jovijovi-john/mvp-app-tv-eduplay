import { useState } from 'react'
import "./styles/telaPergunta01.css"
import { AnswerOptions } from "./components/AnswerOptions.jsx"
import { Question } from "./components/Question.jsx"
import { Timer } from "./components/Timer.jsx"
import { AppIcon } from "./components/AppIcon.jsx"

export default function TelaPergunta01() {
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

                <div className="bottom">
                    {<AnswerOptions />}
                </div>
            </div>

        </>
    );
}