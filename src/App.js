import { useSelector } from 'react-redux'
import { LoginPage } from './components/LoginPage/LoginPage'
import ProfilePage from './components/ProfilePage/ProfilePage'
import { Routes, Route } from 'react-router-dom'
import './App.css';

const App = () => {
  const state = useSelector(state => state.auth)

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
            <Route element={<LoginPage />} path='/'/>
          <Route element={<ProfilePage />} path='/profile'/>
        </Routes>
      </header>
    </div>
  );
}

export default App;