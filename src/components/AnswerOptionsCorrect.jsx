import { useEffect, useContext } from 'react';
import "../styles/answerOptionsCorrect.css";
import chroma from 'chroma-js';
import { MdDone } from "react-icons/md";
import { FaX } from "react-icons/fa6";

import { QuestionState } from "../QuestionState.jsx";

import blue_option_icon from "../assets/blue_opt.svg";
import green_option_icon from "../assets/green_opt.svg";
import red_option_icon from "../assets/red_opt.svg";
import yellow_option_icon from "../assets/yellow_opt.svg";

export const AnswerOptionsCorrect = ({ clickedOpt, correctOptId, optsText }) => {
    // const [colorChanged, setColorChanged] = useState(false)

    const {isFinished, setIsFinished} = useContext(QuestionState)

    const showCorrect = (optId) => {
        const correctOpt = document.getElementById(optId);

        correctOpt.setAttribute("style", "background-color: var(--verde-claro-color);")
    }

    const darkenColor = (optId, factor) => {
        // console.log(optId+'-alt')

        const clickedButton = document.getElementById(optId+'-alt')
        const color = getComputedStyle(clickedButton).getPropertyValue('background-color'); // obtém cor do botão clicado
        //console.log(color)
        let result = chroma(color).darken(factor); // escurece a cor da opção selecionada
        result = chroma(result.hex()).saturate(.15) // satura um pouco a cor, para parecer com a cor original

        clickedButton.setAttribute("style", "background-color: "+result.hex()+";") // altera a propriedade "background-color" do estilo do botão

        return result.hex();
    };

    useEffect(() => {
        if (clickedOpt) {
            darkenColor(clickedOpt, .65); // escurece a cor da opção selecionada quando renderiza este componente
        }
    }, [])

    useEffect(() => {
        if(isFinished) {
            showCorrect(correctOptId); // muda a cor de fundo das opções de resposta para mostrar a correta
        }

        // setIsFinished(false)
    }, [isFinished])

    return (
        <div className="bottom-options">
            <div className="answer-opt-div">
                <img src={red_option_icon} alt="Opção Vermelha" className="opt-icon" />
                <div className="opt-letter">a)</div>
                <button type="button" key="0" id="opt-1-alt" className="answer-opt">
                    {optsText[0]}
                </button>
                {/*<input type="button" value={optsText[0]} key="0" id="opt-1-alt" className="answer-opt" />*/}
                {clickedOpt+"-alt" === "opt-1-alt" ? <MdDone className={"correct-answer-icon"} color={"#1376BC"} /> : <></>/*<FaX className={"wrong-answer-icon"} color={"#1376BC"} />*/}
            </div>
            <div className="answer-opt-div">
                <img src={green_option_icon} alt="Opção Verde" className="opt-icon" />
                <div className="opt-letter">b)</div>
                <button type="button" key="1" id="opt-2-alt" className="answer-opt">
                    {optsText[1]}
                </button>
                {/*<input type="button" value={optsText[1]} key="1" id="opt-2-alt" className="answer-opt" />*/}
                {clickedOpt+"-alt" === "opt-2-alt" ? <MdDone className={"correct-answer-icon"} color={"#1376BC"} /> : <></>/*<FaX className={"wrong-answer-icon"} color={"#1376BC"} />*/}
            </div>
            <div className="answer-opt-div">
                <img src={yellow_option_icon} alt="Opção Amarela" className="opt-icon" />
                <div className="opt-letter">c)</div>
                <button type="button" key="2" id="opt-3-alt" className="answer-opt">
                    {optsText[2]}
                </button>
                {/*<input type="button" value={optsText[2]} key="2" id="opt-3-alt" className="answer-opt" />*/}
                {clickedOpt+"-alt" === "opt-3-alt" ? <MdDone className={"correct-answer-icon"} color={"#1376BC"} /> : <></>/*<FaX className={"wrong-answer-icon"} color={"#1376BC"} />*/}
            </div>
            <div className="answer-opt-div">
                <img src={blue_option_icon} alt="Opção Azul" className="opt-icon" />
                <div className="opt-letter">d)</div>
                <button type="button" key="3" id="opt-4-alt" className="answer-opt">
                    {optsText[3]}
                </button>
                {/*<input type="button" value={optsText[3]} key="3" id="opt-4-alt" className="answer-opt" />*/}
                {clickedOpt+"-alt" === "opt-4-alt" ? <MdDone className={"correct-answer-icon"} color={"#1376BC"} /> : <></>/*<FaX className={"wrong-answer-icon"} color={"#1376BC"} />*/}
            </div>
        </div>
    );

}