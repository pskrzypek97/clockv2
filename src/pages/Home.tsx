import { useContext } from 'react';

import { useData } from '../hooks/useData';

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

	const { error } = useData();

	return (
		<>
			<Quote quote={quote} />
			<section className={`clock ${isActive ? 'active' : ''}`}>
				{error && <h2 style={{ fontSize: '5rem', color: 'white' }}>{error}</h2>}
				{!error && (
					<>
						<Clock clock={clock} />
						<ButtonMore />
					</>
				)}
			</section>
		</>
	);
};

export default Home;
