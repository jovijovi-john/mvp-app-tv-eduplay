import { useEffect } from 'react';
import "../styles/answerOptionsCorrect.css";
import chroma from 'chroma-js';
import { MdDone } from "react-icons/md";
import { FaX } from "react-icons/fa6";

export const AnswerOptionsCorrect = ({ optType, clickedOpt }) => {
    // const [colorChanged, setColorChanged] = useState(false)

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


    switch(optType) {
        case 0:
            return (
                <div className="bottom-options2">
                    <div className="answer-opt2-div">
                        <input type="button" value="Falso" key="0" id="opt-1-alt" className="answer-opt2" />
                        <MdDone className={"correct-answer-icon"} color={"#1376BC"} />
                    </div>
                    <div className="answer-opt2-div">
                        <input type="button" value="Verdadeiro" key="1" id="opt-2-alt" className="answer-opt2" />
                        <FaX className={"wrong-answer-icon"} color={"#1376BC"} />
                    </div>
                </div>
            );
        case 1:
            return (
                <div className="bottom-options">
                    <div className="answer-opt-div">
                        <input type="button" value="Mercúrio" key="0" id="opt-1-alt" className="answer-opt" />
                        <FaX className={"wrong-answer-icon"} color={"#1376BC"} />
                    </div>
                    <div className="answer-opt-div">
                        <input type="button" value="Terra" key="1" id="opt-2-alt" className="answer-opt" />
                        <FaX className={"wrong-answer-icon"} color={"#1376BC"} />
                    </div>
                    <div className="answer-opt-div">
                        <input type="button" value="Vênus" key="2" id="opt-3-alt" className="answer-opt" />
                        <FaX className={"wrong-answer-icon"} color={"#1376BC"} />
                    </div>
                    <div className="answer-opt-div">
                        <input type="button" value="Marte" key="3" id="opt-4-alt" className="answer-opt" />
                        <MdDone className={"correct-answer-icon"} color={"#1376BC"} />
                    </div>
                </div>
            );
    }

}