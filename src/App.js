
import './App.css';
import LoginPage from './components/LoginPage';
import {
  BrowserRouter as Router,
  
  Route,
  Link
} from "react-router-dom";
import HomePage from './components/HomePage';

function App() {
  return (
    <div>
    <Router>
      <Route path = '/login' element={<LoginPage/>}/>
      <Route path ='/login'element={<HomePage/>}/>
    </Router>

    </div>
  );
}

export default App;
