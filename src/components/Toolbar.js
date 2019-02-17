import React, { useContext, useRef } from 'react';
import { Dispatch } from '../Sandbox';

import './Toolbar.scss';

export default function Toolbar()  {
  const dispatch = useContext(Dispatch);

  function onClick(e) {
    dispatch({
      type:'SET_LANG',
      lang:e.target.value
    });
  }

  function run() {
    dispatch({
      type:'SET_EDIT_MODE',
      editMode:false
    });
  }

  /*function addToHomeScreen(e) {
    // Show the prompt
    window.addToHomeScreen.prompt();
    // Wait for the user to respond to the prompt
    window.addToHomeScreen.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        window.addToHomeScreen = null;
      });
  }

  window.addEventListener('appinstalled', (evt) => {
    // hide our user interface that shows our A2HS button
    a2hs.style.display = 'none';
  });*/

  return (
    <div id="Toolbar">
      <button onClick={onClick} value='html'>html</button>
      <button onClick={onClick} value='css'>css</button>
      <button onClick={onClick} value='js'>js</button>
      <button onClick={run}>Run</button>
    </div>
  );
}