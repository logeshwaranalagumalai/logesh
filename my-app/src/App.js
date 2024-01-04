import logo from './logo.svg';
import './App.css';
import Example from './navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Dashboard from './dashboard';
import Home from './home';
function App() {
  return (
  <Router>
    <Example />
    <Routes>
      <Route path='/' element={<Dashboard />}></Route>
      <Route path='/home' element={<Home />}></Route>
    </Routes>
  </Router>
      
      
  
  );
}

export default App;
