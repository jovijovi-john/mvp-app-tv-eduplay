import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TelaPerguntaCenario03 } from './TelaPerguntaCenario03.jsx';
import { TelaPerguntaCenario01 } from './TelaPerguntaCenario01.jsx';

export const Paths = () => {
    return (
        <Router>
            <Routes>
                <Route path="/cenario01" element={<TelaPerguntaCenario01 questTimeLimit={10} questNum={1} questTotal={5} question={"Qual é o planeta mais próximo do Sol?"} />} />
                <Route path="/cenario01/pergunta2" element={<TelaPerguntaCenario01 questTimeLimit={10} questNum={2} questTotal={5} question={"A capital da Austrália é Sydney?"} />} />

                <Route path="/" element={<TelaPerguntaCenario03 questTimeLimit={10} questNum={1} questTotal={5} opts={["Mercúrio", "Terra", "Vênus", "Marte"]} correctOptIdx={0} question={"Qual é o planeta mais próximo do Sol?"} />} />
                <Route path="/pergunta2" element={<TelaPerguntaCenario03 questTimeLimit={10} questNum={2} questTotal={5} opts={["Mercúrio", "Terra", "Vênus", "Marte"]} correctOptIdx={2} question={"A capital da Austrália é Sydney?"} />} />
            </Routes>
        </Router>
    )
}