import "../styles/question.css";

export const Question = ({question, number, total}) => {
    return (
        <>
            <div className="top-text">Pergunta {number} de {total}</div>
            <div className="bottom-text">
                {question}
            </div>
        </>
    );
}