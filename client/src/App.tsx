import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './NavBar'
import Home from './pages/Home';
import AddNew from './pages/AddNew';
import Habits from './pages/Habits';
import Goals from './pages/Goals';
import Profile from './pages/Profile';
import LoginPage from './pages/LoginPage';

let exampleUser = {
  name: "Alex Coooksey",
  email: "exampleEmail@gmail.com"
}

function App() {
  const [user, setUser] = useState(exampleUser);

  // useEffect(() => {
  //   fetch('/me').then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   })
  // }, [])

  // if (!user) return <LoginPage onLogin={setUser} />

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/add-new" element={<AddNew />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/profile" element={<Profile {...user}/>} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
