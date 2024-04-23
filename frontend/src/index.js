import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './component/redux/store';
import {ProductProvider} from './component/context/ProductContext';
import LoginProvider from './component/context/LoginContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ProductProvider>
        <LoginProvider>
    <Provider store={store}>
        <App />
    </Provider>
    </LoginProvider>
    </ProductProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
