import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './NavBar'
import AddNew from './pages/AddNew';
import Habits from './pages/Habits';
import Goals from './pages/Goals';
import Profile from './pages/Profile';
import LoginPage from './pages/LoginPage';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <h1>Page Count: {count}</h1>
      <Routes>
        <Route path="/add-new" element={<AddNew />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
