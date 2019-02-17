import React, { useLayoutEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';

import Prism from '../vendor/prism';
import '../vendor/prism.css';

import { Dispatch } from '../Sandbox';
import './Editor.scss';

function Editor({language, code}) {
  const codeElement = useRef(null);
  const dispatch = useContext(Dispatch);

  useLayoutEffect(() => (
    Prism.highlightElement(codeElement.current)
  ));

  function onChange(e) {
    dispatch({
      type:'SET_CODE',
      code:e.target.value
    });
  }

  function onKeyDown(e) {
    // require for mobile devices that don't use proper apostrophe's
    if(e.key === 222) {
      e.preventDefault();

      const start = e.target.selectionStart;
      e.target.value = e.target.slice(0, start) + '\'' + e.target.slice(start);

      onChange(e);
    }
  }
  
  return (
    <pre className={`Editor line-numbers language-${language}`}>
      <code ref={codeElement} className={`language-${language}`}>{code}</code>
      <textarea
        onKeyDown={onKeyDown}
        onChange={onChange}
        value={code}
        spellCheck="false"
        autoCorrect="off"
        autoComplete="off"
        autoCapitalize="none"
        dir="ltr"
      />
    </pre>
  );
}

Editor.propTypes = {
  language: PropTypes.string,
  code: PropTypes.string,
  onChange: PropTypes.func
};

export default Editor;