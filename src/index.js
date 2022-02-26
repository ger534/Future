import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/App';
import reportWebVitals from './reportWebVitals';
import './i18n';

//futura fonts
import "./fonts/FuturaBook.ttf"
import "./fonts/Futura Bold font.ttf"
import "./fonts/Futura Medium font.ttf"

import "./fonts/OpenSans 1.ttf"

//firebase analytics
import app from './helpers/firebase/firebase'
import { getAnalytics } from 'firebase/analytics';

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
