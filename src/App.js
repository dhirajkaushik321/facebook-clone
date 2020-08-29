import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import AuthPage from './components/Authentication/AuthPage';
import DashboardPage from './components/Dashboard/DashboardPage';
import Navbar from './components/Dashboard/Navbar';
import Alert from './components/utils/Alert';

function App() {

  // const Page = isAuthenticated ? <DashboardPage /> : <AuthPage />
  return (
   <Router>
   <Alert/>
     <Switch>
       <Route exact path="/"><AuthPage/></Route>
       <Route exact path="/dashboard"><DashboardPage/></Route>
     </Switch>
   </Router>

  );
}

export default App;
