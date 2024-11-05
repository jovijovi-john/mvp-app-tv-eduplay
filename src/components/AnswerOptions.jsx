//import { useEffect, useRef, useState } from 'react';
import "../styles/answerOptions.css";

import blue_option_icon from "../assets/blue_opt.svg";
import green_option_icon from "../assets/green_opt.svg";
import red_option_icon from "../assets/red_opt.svg";
import yellow_option_icon from "../assets/yellow_opt.svg";

export const AnswerOptions = ({ optType, opt1, opt2, opt3, opt4, clickFunc }) => {

    /*
        * optType 0 == Verdadeiro ou Falso
        * optType 1 == Quatro Opções
    */

    // const focusableElements = [[useRef(null), useRef(null)], [useRef(null), useRef(null)]];
    // let currentRowIndex = currentRowIndexRef.current;
    // let currentElementIndex = currentElementIndexRef.current;

    switch (optType){
        case 0:
            return (
                <div className="bottom-options2">
                    <div className="answer-opt2-div">
                        <img src={red_option_icon} alt="Opção Vermelha" className="opt-icon" />
                        <input type="button" value="Falso" ref={opt1} key="0" id="opt-1" className="answer-opt2" onClick={clickFunc} />
                    </div>
                    <div className="answer-opt2-div">
                        <img src={green_option_icon} alt="Opção Verde" className="opt-icon" />
                        <input type="button" value="Verdadeiro" ref={opt2} key="1" id="opt-2" className="answer-opt2" onClick={clickFunc} />
                    </div>
                </div>
            );
        case 1:
            return (
                <div className="bottom-options">
                    <div className="answer-opt-div">
                        <img src={red_option_icon} alt="Opção Vermelha" className="opt-icon" />
                        <input type="button" value="Mercúrio" ref={opt1} key="0" id="opt-1" className="answer-opt" onClick={clickFunc} />
                    </div>
                    <div className="answer-opt-div">
                        <img src={green_option_icon} alt="Opção Verde" className="opt-icon" />
                        <input type="button" value="Terra" ref={opt2} key="1" id="opt-2" className="answer-opt" onClick={clickFunc} />
                    </div>
                    <div className="answer-opt-div">
                        <img src={yellow_option_icon} alt="Opção Amarela" className="opt-icon" />
                        <input type="button" value="Vênus" ref={opt3} key="2" id="opt-3" className="answer-opt" onClick={clickFunc} />
                    </div>
                    <div className="answer-opt-div">
                        <img src={blue_option_icon} alt="Opção Azul" className="opt-icon" />
                        <input type="button" value="Marte" ref={opt4} key="3" id="opt-4" className="answer-opt" onClick={clickFunc} />
                    </div>
                </div>
            
                
            );
    }
}