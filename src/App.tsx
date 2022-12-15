import { useData } from './hooks/useData';
import { useTime } from './hooks/useTime';

import Home from './pages/Home';
import More from './components/More';

const App = () => {
	const { appData } = useData();

	const { period } = useTime();

	const containerBackground = {
		backgroundImage: `url(/images/desktop/bg-image-${
			period === 'night' || period === 'evening' ? 'night' : 'day'
		}time.jpg)`,
	};

	return (
		<>
			<main className="container" style={containerBackground}>
				<Home clock={appData.clock} quote={appData.quote} />
			</main>
			<More more={appData.more} />
		</>
	);
};

export default App;
