import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import GlobalStyle from './statics/styles/GlobalStyle';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import CasesPage from './pages/CasesPage';
import ResultPage from './pages/ResultPage';
import ResultCheckPage from './pages/ResultCheckPage';
import IntroPage from './pages/IntroPage';
import ResultPageList from './pages/ResultPageList';
import TermsPage from './pages/TermsPage';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={ <MainPage /> } />
          <Route path='/cases' element={ <CasesPage /> } />
          <Route path='/check' element={<ResultCheckPage />} />
          <Route path='/result' element={<ResultPage />} />
          <Route path='/introduction' element={<IntroPage />} />
          <Route path='/result/:email' element={<ResultPageList />} />
          <Route path='/terms' element={<TermsPage />} />
        </Routes>
        <Footer />
      </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;
