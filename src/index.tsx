import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import App from './App';
import { MoreProvider } from './store/MoreProvider';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<MoreProvider>
			<App />
		</MoreProvider>
	</React.StrictMode>
);
