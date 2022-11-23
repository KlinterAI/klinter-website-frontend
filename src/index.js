import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ClientLogin from './components/ClientLogin';
import reportWebVitals from './reportWebVitals';
import ConstructionScheduling from './components/ConstructionScheduling';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/client-login">
          <ClientLogin />
        </Route>
        <Route location="tenant.klinter.ai" path="/scheduling">
          <ConstructionScheduling />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
