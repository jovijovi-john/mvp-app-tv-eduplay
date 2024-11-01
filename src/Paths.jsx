import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TelaPergunta } from './TelaPergunta.jsx';

export const Paths = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TelaPergunta questType={1} questTimeLimit={10} />} />
                <Route path="/pergunta2" element={<TelaPergunta questType={0} questTimeLimit={10} />} />
            </Routes>
        </Router>
    )
}