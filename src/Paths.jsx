import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TelaPerguntaCenario03 } from './TelaPerguntaCenario03.jsx';
import { TelaPerguntaCenario01 } from './TelaPerguntaCenario01.jsx';
import Lobby from './pages/Lobby.jsx';

export const Paths = () => {
    return (
        <Router>
            <Routes>
                <Route path="/cenario01" element={<TelaPerguntaCenario01 questTimeLimit={10} questNum={1} questTotal={5} opts={["Mercúrio", "Terra", "Vênus", "Marte"]} correctOptIdx={0} question={"Qual é o planeta mais próximo do Sol?"} />} />
                <Route path="/cenario01/pergunta2" element={<TelaPerguntaCenario01 questTimeLimit={10} questNum={2} questTotal={5} opts={["Norte", "Nordeste", "Centro-Oeste", "Sudeste"]} correctOptIdx={1} question={"Em qual região brasileira está localizado o Parque Nacional dos Lençóis Maranhenses?"} />} />

                <Route path="/" element={<Lobby />} />
                <Route path="/Cenario3" element={<TelaPerguntaCenario03 />} />
                <Route path="/pergunta2" element={<TelaPerguntaCenario03 questTimeLimit={10} questNum={2} questTotal={5} opts={["Norte", "Nordeste", "Centro-Oeste", "Sudeste"]} correctOptIdx={1} question={"Em qual região brasileira está localizado o Parque Nacional dos Lençóis Maranhenses?"} />} />
            </Routes>
        </Router>
    )
}