import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './pages/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import cartReducer from './actionreducers/reducer';
import thunk from 'redux-thunk';
const store = createStore(cartReducer,{},applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route exact path="/chat/:userId" element={<App />} />
        </Routes>
      </BrowserRouter>

    </Provider>
  </React.StrictMode >
);