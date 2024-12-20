import "../styles/questionStatistics.css";

export const QuestionStatistics = ({ opt1_stat, opt2_stat, opt3_stat, opt4_stat}) => { // opt1_stat e restante são obtidos ao final do Timer
        return (
            <div className="statistics">
                <div style={{height: `${opt1_stat}%`}} id="opt-1-stat" className="stat-opt" >{opt1_stat}</div>
                <div style={{height: `${opt2_stat}%`}} id="opt-2-stat" className="stat-opt" >{opt2_stat}</div>
                <div style={{height: `${opt3_stat}%`}} id="opt-3-stat" className="stat-opt" >{opt3_stat}</div>
                <div style={{height: `${opt4_stat}%`}} id="opt-4-stat" className="stat-opt" >{opt4_stat}</div>
            </div>
        );

}