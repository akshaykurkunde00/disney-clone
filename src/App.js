import React from 'react';
import Header from './components/Header';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './components/Home';
import Details from './components/Details';
import { BrowserRouter as Router,
Routes,
Route,
Link } from 'react-router-dom';


function App() {
  return (
     
<div className='App'>
    <Router>
      <Routes>
        <Route path='/detail'>
          <Details /> 

        </Route>
      </Routes>
    </Router>

</div>

    <Header />
    <Home/>
    
    
    
  );
}

export default App;
