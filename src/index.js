import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Task from "./task/Task";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Task />
  </React.StrictMode>
);