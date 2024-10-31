//import { useEffect, useRef, useState } from 'react';
import "../styles/answerOptions.css";

export const AnswerOptions = ({ opt1, opt2, opt3, opt4, clickFunc }) => {

    // const focusableElements = [[useRef(null), useRef(null)], [useRef(null), useRef(null)]];
    // let currentRowIndex = currentRowIndexRef.current;
    // let currentElementIndex = currentElementIndexRef.current;

    return (
        <div className="bottom-options">
            <input type="button" value="Mercúrio" ref={opt1} key="0" id="opt-1" className="answer-opt" onClick={clickFunc} />
            <input type="button" value="Terra" ref={opt2} key="1" id="opt-2" className="answer-opt" onClick={clickFunc} />
            <input type="button" value="Vênus" ref={opt3} key="2" id="opt-3" className="answer-opt" onClick={clickFunc} />
            <input type="button" value="Marte" ref={opt4} key="3" id="opt-4" className="answer-opt" onClick={clickFunc} />
        </div>
    );
}