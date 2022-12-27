
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import AddTask from './Tasks/AddTask';
import ViewTask from './Tasks/ViewTask';
import CompleteTask from './Tasks/CompleteTask';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/"  element={<Home/>}/>
        <Route exact path="/adduser"  element={<AddTask/>}/>
        <Route exact path="/view/:id"  element={<ViewTask/>}/>
        <Route exact path="/cmpl"  element={<CompleteTask/>}/>
       
        
      </Routes>

      </Router>
      
    </div>
  );
}

export default App;
