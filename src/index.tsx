import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Components/LayoutArea/Layout/Layout';
import './index.css';
import reportWebVitals from './reportWebVitals';
import interceptorService from './Services/InterceptorsService';

interceptorService.createInterceptors();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
document.getElementsByTagName('html')[0].setAttribute("dir", "rtl");
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();