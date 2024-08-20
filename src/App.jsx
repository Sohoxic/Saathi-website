import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Landing from "./components/Landing";
import CreateCourse from './components/CreateCourse';
import Register from './components/Register';
import FinancialKnowledgeLevel from './components/FinancialKnowledgeLevel';
import KnowledgeTest from './components/KnowledgeTest';
import BasicLevelUnits from './components/BasicLevelUnits';
import AdvancedLevelUnits from './components/AdvancedLevelUnits';
import BasicUnit4 from './components/BasicUnit4';
import B4P1 from './components/B4P1';
import B4P2 from './components/B4P2';
import B4P3 from './components/B4P3';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/about" element={<CreateCourse/>}/>
                <Route path="/FinancialKnowledgeLevel" element={<FinancialKnowledgeLevel/>}/>
                <Route path="/KnowledgeTest" element={<KnowledgeTest/>}/>
                <Route path="/BasicLevelUnits" element={<BasicLevelUnits/>}/>
                <Route path="/AdvancedLevelUnits" element={<AdvancedLevelUnits/>}/>
                <Route path="/BasicUnit4" element={<BasicUnit4/>} />
                <Route path="/B4P1" element={<B4P1/>} />
                <Route path="/B4P2" element={<B4P2/>} />
                <Route path="/B4P3" element={<B4P3/>} />
            </Routes>
        </Router>
    );
}

export default App;