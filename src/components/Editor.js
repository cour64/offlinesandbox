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
  
  return (
    <pre className={`Editor line-numbers language-${language}`}>
      <code ref={codeElement} className={`language-${language}`}>{code}</code>
      <textarea
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