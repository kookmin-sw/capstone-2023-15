import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import GlobalStyle from './statics/styles/GlobalStyle';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import CasesPage from './pages/CasesPage';
import ResultPage from './pages/ResultPage';

const App = () => {
  return (
    <div className='App'>
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={ <MainPage /> } />
          <Route path='/cases' element={ <CasesPage /> } />
          <Route path='/result' element={<ResultPage />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;
