import React from 'react';
import ReactDOM from 'react-dom';
import Sandbox from './Sandbox';
import * as serviceWorker from './serviceWorker';

import './assets/styles/reset.scss';
import './assets/styles/responsive.scss';

ReactDOM.render(<Sandbox />, document.getElementById('root'));

window.addToHomeScreen = undefined;
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  window.addToHomeScreen = e;
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();