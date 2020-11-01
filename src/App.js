import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Saudi from './components/Saudi';

function App() {
  return (
     
  <Router>

    <div className="App">
      <Switch > 

        <Route path="/home">
        <Header />
        <Home   />  
        </Route>

        <Route path="/saudi">
        <Saudi />
        </Route>

        <Route path="/">
        <Header />
        </Route>


      </Switch>
      
    </div>

    </Router>
  );
}

export default App;
