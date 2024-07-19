import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage'; 
import NewSignUp from './Components/NewSignUp';
import Details from './Components/Details';


function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<LandingPage/>} />
                    <Route path="/signup" element={<NewSignUp/>} />
                    <Route path="/details" element={<Details/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
