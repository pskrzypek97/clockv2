import { useTime } from '../hooks/useTime';

import { TransformedData } from '../models/transformedData';

const Clock = ({ clock }: { clock: TransformedData['clock'] }) => {
	const { hour, minute, period, icon } = useTime();

	return (
		<div className="clock__main">
			<div className="clock__welcome">
				<svg className="clock__icon">
					<use xlinkHref={`/sprite.svg#icon-${icon}`}></use>
				</svg>
				<p className="paragraph paragraph--clock">Good {period}!</p>
			</div>
			<div className="clock__time">
				<h1 className="heading-1">
					{hour}:{minute}
					{/* <span className="clock__timezone">am</span> */}
				</h1>
			</div>
			<div className="clock__location">
				<h2 className="heading-2">
					In {clock.city}, {clock.country}
				</h2>
			</div>
		</div>
	);
};

export default Clock;
