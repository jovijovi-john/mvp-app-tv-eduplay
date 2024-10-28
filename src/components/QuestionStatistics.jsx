import "../styles/questionStatistics.css";

export const QuestionStatistics = ({opt1_stat, opt2_stat, opt3_stat, opt4_stat}) => { // opt1_stat e restante são obtidos ao final do Timer
    const opt1 = {
        height: {opt1_stat}+"%",
    }
    const opt2 = {
        height: {opt2_stat}+"%",
    }
    const opt3 = {
        height: {opt3_stat}+"%",
    }
    const opt4 = {
        height: {opt4_stat}+"%",
    }

    return (
        <div className="statistics">
            <div style={{height: `${opt1_stat}%`}} id="opt-1" className="stat-opt" >{opt1_stat}</div>
            <div style={{height: `${opt2_stat}%`}} id="opt-2" className="stat-opt" >{opt2_stat}</div>
            <div style={{height: `${opt3_stat}%`}} id="opt-3" className="stat-opt" >{opt3_stat}</div>
            <div style={{height: `${opt4_stat}%`}} id="opt-4" className="stat-opt" >{opt4_stat}</div>
        </div>
    );
}