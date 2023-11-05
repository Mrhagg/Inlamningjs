import './App.css';
import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Info from './components/Info'
import Contact from './Views/Contact';
import Home from './Views/Home';

function App() {
  return (
    <>
      <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacts' element={<Contact />} />
          <Route path='*' element={<h1>404 - page not found</h1>} />
        </Routes>
      <Info />
      <Footer text='&copy; 2023 Crito - consulting inc. All rights Reserved.'/>
    </>
  );
}

export default App;
