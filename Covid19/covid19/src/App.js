import React,{useState,useEffect} from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import NotFound from './components/NotFound.component';
// import AllCase from './components/AllCase.component';
import SimpleTable from './components/Table1.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div>
          {/* <Header></Header> */}
          <React.Fragment>
          <Switch>
            <Route path="/" exact component={SimpleTable} />
          
            <Route path="**" exact component={NotFound} />        

          </Switch>
          </React.Fragment>
        </div>
      </Router>
    </div>
  );
}

export default App;
