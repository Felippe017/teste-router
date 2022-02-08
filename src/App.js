import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import Names from './pages/Names';
import NameId from './pages/NameId';

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/names" element={ <Names /> } />
          <Route path="/names/:id" element={ <NameId />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
