import './App.css';
import DeleteRecord from './DeleteRecord';
import Login from './Login';
import Get from './Get';
import Update from './Update';
import { Routes } from 'react-router-dom';
import { BrowserRouter as Router,Route } from 'react-router-dom';

function App() {
  return (
    <Router>

    <div className='App'>
       <Routes>
          <Route exact path='/' element={<Login/>}></Route>
          <Route exact path='/Update' element={<Update/>}></Route>
          <Route exact path='/Get' element={<Get/>}></Route>
          <Route exact path='/DeleteRecord' element={<DeleteRecord/>}></Route>
      </Routes>
 </div>
    </Router>
  );
}

export default App;