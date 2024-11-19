import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import LoadingScreen from './components/LoadingScreen';
import Feed from './components/Feed';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/loading" element={<LoadingScreen />} />
        <Route path="/home" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;