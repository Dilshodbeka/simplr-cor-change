import React from 'react';
import ReactDOM from 'react-dom';
import Conveter from './Conveter';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './style.css'


function App() {
  return (
    <div className="App">
      <Conveter />
    </div>
  )
}







ReactDOM.render(<App />, document.getElementById('root'));