import { useContext, useState, useEffect } from 'react';

import MoreContext from '../store/MoreProvider';

import { TransformedData } from '../models/transformedData';
import { getJSON } from '../utils/index';

const API_QUOTE = process.env.REACT_APP_API_QUOTE;

const Quote = ({ quote }: { quote: TransformedData['quote'] }) => {
	const { isActive } = useContext(MoreContext);

	const [currentQuote, setCurrentQuote] = useState(quote);
	const [spin, setSpin] = useState(false);
	const [error, setError] = useState<null | string>(null);

	useEffect(() => setCurrentQuote(quote), [quote]);

	const fetchNewQuote = async () => {
		setSpin(true);
		try {
			const data = await getJSON(`${API_QUOTE}`);
			const { author, content } = data;
			setCurrentQuote({ author, content });
		} catch (err) {
			setError('Sorry, unable to fetch new quote!');
			console.error(err);
		}
		setSpin(false);
	};

	return (
		<>
			{error && <p className="paragraph paragraph--quote">{error}</p>}
			{!error && (
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
			)}
		</>
	);
};

export default Quote;
