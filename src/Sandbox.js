import React, { useReducer } from 'react';

import Editor from './components/Editor';
import IFrame from './components/IFrame';
import Toolbar from './components/Toolbar';

const initialState = {
  code: {
    html:'<p>Hello!</p>',
    css:'body{color:blue;}',
    js:'console.log(\'test\');'
  },
  lang:'js',
  editMode:true,
  fullscreen:false
};

export const Dispatch = React.createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case 'SET_CODE':
      return {
        ...state,
        code:{
          ...state.code,
          [state.lang]: action.code
        },
      };
    case 'SET_LANG':
      return {
        ...state,
        lang: action.lang,
        editMode:true
      };
    case 'SET_EDIT_MODE':
      return {
        ...state,
        editMode:action.editMode
      };
    default:
      throw new Error('Not a valid action');
  }
}

export default function Sandbox() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Dispatch.Provider value={dispatch}>
      {state.editMode ? (
        <Editor
          language={state.lang}
          code={state.code[state.lang]}
        />
      ) : (
        <IFrame {...state.code}/>
      )}
      <Toolbar />
    </Dispatch.Provider>
  );
}
