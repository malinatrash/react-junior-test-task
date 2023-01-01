import { useSelector } from 'react-redux'
import LoginPage from './components/LoginPage/LoginPage'
import ProfilePage from './components/ProfilePage/ProfilePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

const App = () => {
  const state = useSelector(state => state.auth)

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path='/profile'>
              <ProfilePage login={state.login} />
            </Route>
            <Route path='/'>
              <LoginPage/>
            </Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;