import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AddSusbscriber from './AddSubscriber';
import './common/common.css';
import PhoneDirectory from './PhoneDirectory';

ReactDOM.render(<PhoneDirectory />, document.getElementById('root'));
serviceWorker.unregister();