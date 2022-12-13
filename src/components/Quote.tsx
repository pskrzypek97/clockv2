import { useContext } from 'react';

import MoreContext from '../store/MoreProvider';

const Quote = () => {
	const { isActive } = useContext(MoreContext);

	return (
		<article className={`quote ${isActive ? 'active disappear' : ''}`}>
			<blockquote className="qoute__text">
				<p className="paragraph paragraph--quote">I like to eat ass XDDD</p>
				<figcaption>Abraham Lincoln</figcaption>
			</blockquote>
			<svg className="quote__refresh" aria-controls="quote__text">
				<use xlinkHref="/sprite.svg#icon-refresh"></use>
			</svg>
		</article>
	);
};

export default Quote;
