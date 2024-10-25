import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TelaPergunta01 from './TelaPergunta01.jsx';

export const Paths = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TelaPergunta01 />} />
            </Routes>
        </Router>
    )
}