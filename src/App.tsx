import { useTime } from './hooks/useTime';

import Home from './pages/Home';
import More from './components/More';

const App = () => {
	const { period } = useTime();

	const containerBackground = {
		backgroundImage: `url(/images/desktop/bg-image-${
			period === 'night' || period === 'evening' ? 'night' : 'day'
		}time.jpg)`,
	};

	return (
		<>
			<main className="container" style={containerBackground}>
				<Home />
			</main>
			<More />
		</>
	);
};

export default App;
