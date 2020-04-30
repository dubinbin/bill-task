import React from 'react';
import './App.css';
import { BillContextWrap } from './store'
import { NavBar } from './components/navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SettingPage from './application/Setting' 
import IndexPage from './application/Index'
import addRecord from './application/addRecord';
import financialPage from './application/financial'
import RecordPage from './application/record'

function App() {

  return (
    <BillContextWrap>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={IndexPage}></Route>
          <Route path="/home" exact={true} component={IndexPage}></Route>
          <Route path="/record" exact={true} component={RecordPage}></Route>
          <Route path="/financial" exact={true} component={financialPage}></Route>
          <Route path="/addrecord" component={addRecord}></Route>
          <Route path="/setting" exact={true} component={SettingPage}></Route>
        </Switch>
        <NavBar/>
      </BrowserRouter>
    </BillContextWrap>
  );
}

export default App;
