import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import "remixicon/fonts/remixicon.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ToastContainer
            theme="dark"
            position="top-right"
            autoClose={2000}
            closeOnClick
            pauseOnHover={false}
          />
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
