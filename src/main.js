import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/js/bootstrap.min.js');
require('jquery/dist/jquery.min.js');

ReactDOM.render(
  <Routes />,
  document.getElementById('app')
);
