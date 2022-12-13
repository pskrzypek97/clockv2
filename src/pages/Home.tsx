import { useContext } from 'react';

import MoreContext from '../store/MoreProvider';

import Quote from '../components/Quote';
import Clock from '../components/Clock';
import ButtonMore from '../components/ButtonMore';

const Home = () => {
	const { isActive } = useContext(MoreContext);

	return (
		<>
			<Quote />
			<section className={`clock ${isActive ? 'active' : ''}`}>
				<Clock />
				<ButtonMore />
			</section>
		</>
	);
};

export default Home;
