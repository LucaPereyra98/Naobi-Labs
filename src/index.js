import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBaXaC_HrhyrtA-y14dWwJkKAsXC5e-fvc",
    authDomain: "naobi-labs.firebaseapp.com",
    projectId: "naobi-labs",
    storageBucket: "naobi-labs.appspot.com",
    messagingSenderId: "827972125828",
    appId: "1:827972125828:web:bedd1fc2f9599e9319eed1"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

