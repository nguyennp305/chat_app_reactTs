import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

// Thêm các cấu hình cụ thể của react-bootstrap tại đây
// Ví dụ: import {ThemeProvider} from 'react-bootstrap'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
   // Các cấu hình cụ thể tại đây
  <Router>
    <App />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
