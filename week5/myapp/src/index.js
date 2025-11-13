import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GreetingElement from './myGreetingApp';
import reportWebVitals from './reportWebVitals';
import GreetingElementwithProp from './myGreetingProp';
import AppColor from './AppbackgroundColor'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
<AppColor heading="This is first element" lbl="Name :" color="green"/>
<AppColor heading="This is second element" lbl="Name :" color="blue"/>
<AppColor heading="This is third third element" lbl="Name :" color="Yellow"/>
  </React.StrictMode>
);

reportWebVitals();