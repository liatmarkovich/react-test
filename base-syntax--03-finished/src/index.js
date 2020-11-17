import React from 'react';
import ReactDOM from 'react-dom';
import './newApp/index.css';
import App from './newApp/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
