import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TelaPergunta } from './TelaPergunta.jsx';

export const Paths = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TelaPergunta questType={1} questTimeLimit={10} questNum={1} questTotal={5} question={"Qual é o planeta mais próximo do Sol?"} />} />
                <Route path="/pergunta2" element={<TelaPergunta questType={0} questTimeLimit={10} questNum={2} questTotal={5} question={"A capital da Austrália é Sydney?"} />} />
            </Routes>
        </Router>
    )
}