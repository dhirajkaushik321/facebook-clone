import React from 'react';
import './App.css';
import AuthPage from './components/Authentication/AuthPage';
import DashboardPage from './components/Dashboard/DashboardPage';
import Navbar from './components/Dashboard/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <div className="App container">
    {/* <AuthPage/> */}
    <DashboardPage/>
    </div>
    </>
  );
}

export default App;
