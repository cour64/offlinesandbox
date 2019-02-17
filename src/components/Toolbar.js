import React, { useContext } from 'react';
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

  return (
    <div id="Toolbar">
      <button onClick={onClick} value='html'>html</button>
      <button onClick={onClick} value='css'>css</button>
      <button onClick={onClick} value='js'>js</button>
      <button onClick={run}>Run</button>
    </div>
  );
}
