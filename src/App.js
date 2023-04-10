import { Routes, Route } from 'react-router';
import './App.css';
import Header from './Components/Header/Header';
import LandingPage from './Pages/LandingPage';
import ContactPage from './Pages/ContactPage';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="contact" element={
          <>
            <Header />
            <ContactPage />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
