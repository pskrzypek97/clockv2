import { useState, useEffect } from 'react';

// const getCorrectTimeFormat = (time) => {
// 	return time.length === 2 ? time : time.padStart(2, '0');
// };

export const useTime = () => {
	const [hour, setHour] = useState(0);
	const [minute, setMinute] = useState(0);
	const [period, setPeriod] = useState('');
	const [icon, setIcon] = useState('');

	const handleTime = () => {
		const date = new Date();
		const hour = date.getHours();
		const minute = date.getMinutes();

		if (hour <= 4 || hour >= 23) {
			setPeriod('night');
			setIcon('moon');
		}
		if (hour >= 5 && hour <= 11) {
			setPeriod('morning');
			setIcon('sun');
		}
		if (hour >= 12 && hour <= 18) {
			setPeriod('afternoon');
			setIcon('sun');
		}
		if (hour >= 19 && hour <= 22) {
			setPeriod('evening');
			setIcon('moon');
		}

		setHour(hour);
		setMinute(minute);
	};

	useEffect(() => {
		const time = setInterval(handleTime, 1000);
		return () => clearInterval(time);
	}, []);

	return { hour, minute, period, icon };
};
