import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './Users';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/users' element={<Users />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();


// BrowserRouter eka dhammahama chrome eke browser tag eka meyata access ganna puluwan. url type karaddi eya urls mathaka thiyagannawa
// Route eke ekement kiyanne access wenna one page parth eka