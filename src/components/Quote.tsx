const Quote = () => {
	return (
		<article className="quote">
			<blockquote className="qoute__text">
				<p className="paragraph paragraph--quote"></p>
				<figcaption></figcaption>
			</blockquote>
			<svg className="quote__refresh" aria-controls="quote__text">
				<use xlinkHref="./images/desktop/sprite.svg#icon-refresh"></use>
			</svg>
		</article>
	);
};

export default Quote;
