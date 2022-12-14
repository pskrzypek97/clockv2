import { useEffect, useState } from 'react';

import { useTime } from './hooks/useTime';

import Home from './pages/Home';
import More from './components/More';

import { Data } from './models/data';

const timeout = (sec: number) => {
	return new Promise((_, reject) => {
		setTimeout(() => {
			reject(new Error(`Request took too long! Timeout after ${sec} seconds`));
		}, sec * 1000);
	});
};

export const getJSON = async (url: string) => {
	try {
		const res = (await Promise.race([fetch(url), timeout(10000)])) as Response;
		const data = await res.json();

		if (!res.ok) throw new Error(`${data.message} (${res.status})`);

		return data;
	} catch (err) {
		throw err;
	}
};

const transformData = (data: Data) => {
	const {
		content,
		author,
		abbreviation,
		day_of_week,
		day_of_year,
		week_number,
		city,
		country_name,
	} = Object.assign({}, ...data);
	return {
		more: {
			dayOfWeek: day_of_week,
			dayOfYear: day_of_year,
			weekNum: week_number,
			code: abbreviation,
		},
		clock: {
			city,
			country: country_name,
		},
		quote: {
			author,
			content,
		},
	};
};

const App = () => {
	const [appData, setAppData] = useState({
		more: {
			dayOfWeek: 0,
			dayOfYear: 0,
			weekNum: 0,
			code: '',
		},
		clock: {
			city: '',
			country: '',
		},
		quote: {
			author: '',
			content: '',
		},
	});

	const loadData = async () => {
		try {
			const data = (await Promise.all([
				getJSON('http://worldtimeapi.org/api/ip'),
				getJSON('https://api.quotable.io/random'),
				getJSON(
					'https://api.ipdata.co?api-key=336231b0579d71084dfb08626a78bb35e3842462714c3bc04169b277'
				),
			])) as Data;
			const transformedData = transformData(data);
			setAppData(transformedData);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		loadData();
	}, []);

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
