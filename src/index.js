import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer, {initialState} from './reducer';
import { StateProvider } from './StateProvider';

ReactDOM.render(
  <React.StrictMode>
    {/* initialState = what data look like in beginning */}
    {/* reducer = how we manipulate with tha data or play with tha data */}

    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

