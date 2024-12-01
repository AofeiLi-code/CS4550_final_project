<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
=======
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import store from "./Kanbas/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <HashRouter>
      <Provider store={store}>
      <div>
        <Routes>

          <Route path="/" element={<Navigate to="Kanbas" />} />

          <Route path="/Labs/*" element={<Labs />} />

          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
      </Provider>
    </HashRouter>
  );
}
>>>>>>> a5
