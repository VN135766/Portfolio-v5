import ReactDOM from 'react-dom';
import PageContextProvider from './store/page-context';

import './index.css';
import App from './App';

ReactDOM.render(<PageContextProvider><App /></PageContextProvider>, document.getElementById('root'));