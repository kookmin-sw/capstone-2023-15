import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import GlobalStyle from './statics/styles/GlobalStyle';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import CasesPage from './pages/CasesPage';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={ <MainPage /> } />
          <Route path="/cases" element={ <CasesPage /> } />
        </Routes>
      </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;
