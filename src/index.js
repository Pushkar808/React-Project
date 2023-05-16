import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './pages/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mainchat from './components/mainChat';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/chat/:userId" element={<Mainchat />} />
      </Routes>
      <App />
    </BrowserRouter>
  </React.StrictMode >
);