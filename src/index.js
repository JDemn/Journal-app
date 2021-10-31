import React from 'react';
import ReactDOM from 'react-dom';

//mi component
import { JournalApp } from './JournalApp';
//global styles
import './styles/styles.scss'

ReactDOM.render(
  <React.StrictMode>
    <JournalApp />
  </React.StrictMode>,
  document.getElementById('root')
);

