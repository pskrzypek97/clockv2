import { useContext, useState, useEffect } from 'react';

import MoreContext from '../store/MoreProvider';

import { TransformedData } from '../models/transformedData';
import { getJSON } from '../App';

const Quote = ({ quote }: { quote: TransformedData['quote'] }) => {
	const { isActive } = useContext(MoreContext);

	const [currentQuote, setCurrentQuote] = useState(quote);
	const [spin, setSpin] = useState(false);

	useEffect(() => setCurrentQuote(quote), [quote]);

	const fetchNewQuote = async () => {
		setSpin(true);
		try {
			const data = await getJSON('https://api.quotable.io/random');
			const { author, content } = data;
			setCurrentQuote({ author, content });
		} catch (err) {
			console.error(err);
		}
		setSpin(false);
	};

	return (
		<article className={`quote ${isActive ? 'active disappear' : ''}`}>
			<blockquote className="quote__text">
				<p className="paragraph paragraph--quote">{currentQuote.content}</p>
				<figcaption>{currentQuote.author}</figcaption>
			</blockquote>
			<div>
				<svg
					className={`quote__refresh ${spin && 'rotate'}`}
					aria-controls="quote__text"
					onClick={fetchNewQuote}
				>
					<use xlinkHref="/sprite.svg#icon-refresh"></use>
				</svg>
			</div>
		</article>
	);
};

export default Quote;
