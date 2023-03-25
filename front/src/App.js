import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import GlobalStyle from './statics/styles/GlobalStyle';
import MainPage from './pages/MainPage';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <MainPage /> } />
          
        </Routes>
      </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;
