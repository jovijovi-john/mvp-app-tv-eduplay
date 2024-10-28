import { useEffect } from 'react';
import "../styles/answerOptions.css";

// eslint-disable-next-line react/prop-types
export const AnswerOptions = ({ ref }) => {
    const optRef = ref;
    useEffect(() => {
        optRef.current.focus()
    })

    return (
        <div className="bottom-options">
            <div ref={optRef} key="0" id="opt-1" className="answer-opt" >Mercúrio</div>
            <div key="1" id="opt-2" className="answer-opt" >Terra</div>
            <div key="2" id="opt-3" className="answer-opt" >Vênus</div>
            <div key="3" id="opt-4" className="answer-opt" >Marte</div>
        </div>
    );
}