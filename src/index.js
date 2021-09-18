import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/App';
import reportWebVitals from './reportWebVitals';
import './i18n';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyDKVI15fPSMcuPb48At_55CNODPG1uN-OA",
  authDomain: "gabo534.firebaseapp.com",
  projectId: "gabo534",
  storageBucket: "gabo534.appspot.com",
  messagingSenderId: "45612275350",
  appId: "1:45612275350:web:a0f226429bf34d9cc594b7",
  measurementId: "G-G9BRQJ2BHK"
});

const analytics = getAnalytics(app);
console.log(analytics)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
