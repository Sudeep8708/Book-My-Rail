import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './index.css';
import App from './login-page/signup';
import reportWebVitals from './reportWebVitals';
import Book from "./booking/booking"
import Plan_your_journey from './plan-your-journey/plan_your_journey';

export default function Main() {
  return (
    <App />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<App />}>
    //     </Route>
    //     <Route path="/book" element={<Book />}/>
    //     <Route path="/plan" element={<Plan_your_journey />} />
    //   </Routes>
    // </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
