import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import './cpm/css/open-iconic-bootstrap.min.css';
import "./cpm/css/animate.css";
import './cpm/css/owl.carousel.min.css';
import "./cpm/css/magnific-popup.css";
import "./cpm/css/aos.css";
import "./cpm/css/ionicons.min.css";
import "./cpm/css/flaticon.css";
import "./cpm/css/icomoon.css";
import "./cpm/css/style.css";
import * as serviceWorker from './serviceWorker';

ReactDOM.render( < Home / > , document.getElementById("root"));


serviceWorker.unregister();