import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Global from './components/global';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Global/> , document.getElementById('app')
);
serviceWorker.unregister();
