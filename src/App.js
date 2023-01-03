import { useSelector } from 'react-redux'
import { LoginPage } from './components/LoginPage/LoginPage'
import ProfilePage from './components/ProfilePage/ProfilePage'
import { Route, Routes } from 'react-router-dom'
import './App.css';

const App = () => {
  const state = useSelector(state => state.auth)

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route
            path='/'
            element={<LoginPage/>}
          />
          <Route
            path='/profile'
            element={<ProfilePage login={state.login}/>}
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;