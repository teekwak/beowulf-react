// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// require('bootstrap/dist/css/bootstrap.min.css');
// require('bootstrap/dist/js/bootstrap.min.js');
// require('jquery/dist/jquery.min.js');

// document.addEventListener('DOMContentLoaded', function() {
//   ReactDOM.render(
//     React.createElement(App),
//     document.getElementById('app')
//   );
// });

import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

ReactDOM.render(
  <Routes />,
  document.getElementById('app')
);
