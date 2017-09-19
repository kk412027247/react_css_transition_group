import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AnimatedShoppingList from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AnimatedShoppingList />, document.getElementById('root'));
registerServiceWorker();
