import { Data } from '../models/data';

const TIMEOUT = process.env.REACT_APP_TIMEOUT as string;

const timeout = (sec: number) => {
	return new Promise((_, reject) => {
		setTimeout(() => {
			reject(new Error(`Request took too long! Timeout after ${sec} seconds`));
		}, sec * 1000);
	});
};

export const getJSON = async (url: string) => {
	try {
		const res = (await Promise.race([
			fetch(url),
			timeout(+TIMEOUT),
		])) as Response;
		const data = await res.json();

		if (!res.ok) throw new Error(`${data.message} (${res.status})`);

		return data;
	} catch (err) {
		throw err;
	}
};

export const transformData = (data: Data) => {
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
