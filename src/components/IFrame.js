import React, { useEffect, useRef, memo } from 'react';
import PropTypes from 'prop-types';

import './IFrame.scss';

const IFrame = memo(({html, css, js}) => {
  const iframe = useRef(null);

  function generateHTML() {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <title>Document</title>
        <style>
          html,body {
            box-sizing: border-box;
            position:relative;
            height: 100%;
            width: 100%;
            font-family:Helvetica, sans-serif;
            font-size:1rem;
          }
          *, *:before, *:after { box-sizing: inherit; }

          body {
            position:absolute;
            top:0;
            left:0;
            margin:0;
            padding:0;
          }

          #root, #console {
            position: absolute;
            top: 0;
            left: 0;
            bottom:30%;
            width: 100%;
            max-width: 100%;
            overflow:auto;
          }

          #console {
            color:#222222;
            background-color:#FFF;
            top: 70%;
            bottom:0;
            border-top:1px solid #444;
          }

          .console-line {
            margin:2px 0;
          }

          .console-timestamp {
            font-size:0.8em;
            color:#888;
          }

          /* On screens that are 992px wide or less, go from four columns to two columns */
          @media screen and (max-width: 1024px) {
            body,html {
              font-size:15px;
            }
          }

          /* On screens that are 600px wide or less, make the columns stack on top of each other instead of next to each other */
          @media screen and (max-width: 768px) {
            body,html {
              font-size:14px;
            }
          }
        </style>
      </head>
      <body>
        <style>${css}</style>
        <div id="root">${html}</div>
        <div id="console"></div>
        <script>
          function isFunction(functionToCheck) {
            return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
          }

          const consoleOutput = document.getElementById('console');
          console.log = function(str) {
            const timestamp = (new Date()).toLocaleTimeString('en-GB');
            const newLine = document.createElement('p');
            newLine.className = 'console-line';

            if(typeof str === "object")
              str = JSON.stringify(str);
              
            newLine.innerHTML = \`<span class="console-timestamp">($\{timestamp})</span> >> $\{str}\`;
            consoleOutput.appendChild(newLine);
          }
        </script>
        <script>${js}</script>
      </body>
      </html>
    `;
  }

  useEffect(() => {
    // Update the document title using the browser API
    iframe.current.contentWindow.document.open();
    iframe.current.contentWindow.document.write(generateHTML());
    iframe.current.contentWindow.document.close();
  });

  return (
    <iframe id="IFrame" ref={iframe} title="Output">
      <p>Your browser does not support iframes.</p>
    </iframe>
  );
});

IFrame.propTypes = {
  html: PropTypes.string,
  css: PropTypes.string,
  js: PropTypes.string
};

export default IFrame;