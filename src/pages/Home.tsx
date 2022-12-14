import { useContext } from 'react';

import MoreContext from '../store/MoreProvider';

import Quote from '../components/Quote';
import Clock from '../components/Clock';
import ButtonMore from '../components/ButtonMore';

import { TransformedData } from '../models/transformedData';

interface HomeProps {
	clock: TransformedData['clock'];
	quote: TransformedData['quote'];
}

const Home = ({ clock, quote }: HomeProps) => {
	const { isActive } = useContext(MoreContext);

	return (
		<>
			<Quote quote={quote} />
			<section className={`clock ${isActive ? 'active' : ''}`}>
				<Clock clock={clock} />
				<ButtonMore />
			</section>
		</>
	);
};

export default Home;
