import './App.css';
import { useState } from 'react'
import { useSelector } from 'react-redux'
import LoginPage from './components/LoginPage/LoginPage'

function App() {
  const state = useSelector(state => state.auth)
  console.log(state)
  return (
    <div className="App">
      <header className="App-header">
        <LoginPage/>
      </header>
    </div>
  );
}

export default App;
