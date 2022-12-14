import { useContext } from 'react';
import { TransformedData } from '../models/transformedData';

import { useTime } from '../hooks/useTime';

import MoreContext from '../store/MoreProvider';

const More = ({ more }: { more: TransformedData['more'] }) => {
	const { isActive } = useContext(MoreContext);

	const { period } = useTime();

	const moreStyles = `more ${isActive ? 'active' : ''} ${
		period === 'night' || period === 'evening' ? 'night' : ''
	}`;

	return (
		<section className={moreStyles}>
			<div className="more__info">
				<h3 className="heading-3">Current timezone</h3>
				<p className="paragraph paragraph--more">{more.code}</p>
			</div>
			<div className="more__info">
				<h3 className="heading-3">Day of the year</h3>
				<p className="paragraph paragraph--more">{more.dayOfYear}</p>
			</div>
			<div className="more__info">
				<h3 className="heading-3">Day of the week</h3>
				<p className="paragraph paragraph--more">{more.dayOfWeek}</p>
			</div>
			<div className="more__info">
				<h3 className="heading-3">Week number</h3>
				<p className="paragraph paragraph--more">{more.weekNum}</p>
			</div>
			<div className="more__bar"></div>
		</section>
	);
};

export default More;
