import { useState, useEffect } from 'react';

import { getJSON, transformData } from '../utils';

import { Data } from '../models/data';

const API_DATA = process.env.REACT_APP_API_DATA;
const API_QUOTE = process.env.REACT_APP_API_QUOTE;
const API_LOCATION = process.env.REACT_APP_API_LOCATION;
const API_LOCATION_KEY = process.env.REACT_APP_API_LOCATION_KEY;

export const useData = () => {
	const [error, setError] = useState<null | string>(null);

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
				getJSON(`${API_DATA}`),
				getJSON(`${API_QUOTE}`),
				getJSON(`${API_LOCATION}${API_LOCATION_KEY}`),
			])) as Data;
			const transformedData = transformData(data);
			setAppData(transformedData);
		} catch (err) {
			setError('Oops! Something went wrong!');
			console.error(err);
		}
	};

	useEffect(() => {
		loadData();
	}, []);

	return { appData, error };
};
