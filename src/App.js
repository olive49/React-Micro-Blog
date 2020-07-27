import React from 'react';
import './App.css';
import MainPage from './components/MainPage.jsx'
import ProfilePage from './components/ProfilePage.jsx'
import NavBar from './components/NavBar.jsx'


function App() {
  return (
    <div>
      <NavBar/>
      <div className="App">
      <MainPage/>
      <ProfilePage/>
      </div>
    </div>
  );
}

export default App;
