const Clock = () => {
	return (
		<div className="clock__main">
			<div className="clock__welcome">
				<svg className="clock__icon">
					<use
						xlinkHref="${icons}#icon-${
			this._time === 'morning' || this._time === 'afternoon' ? 'sun' : 'moon'
		}"
					></use>
				</svg>
			</div>
			<div className="clock__time">
				<h1 className="heading-1">
					<span className="clock__timezone"></span>
				</h1>
			</div>
			<div className="clock__location">
				<h2 className="heading-2"></h2>
			</div>
		</div>
	);
};

export default Clock;
