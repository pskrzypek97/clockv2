import { useContext } from 'react';

import { useTime } from '../hooks/useTime';

import MoreContext from '../store/MoreProvider';

const More = () => {
	const { isActive } = useContext(MoreContext);

	const { period } = useTime();

	const moreStyles = `more ${isActive ? 'active' : ''} ${
		period === 'night' || period === 'evening' ? 'night' : ''
	}`;

	return (
		<section className={moreStyles}>
			<div className="more__info">
				<h3 className="heading-3">Current timezone</h3>
				<p className="paragraph paragraph--more">ATM</p>
			</div>
			<div className="more__info">
				<h3 className="heading-3">Day of the year</h3>
				<p className="paragraph paragraph--more">212</p>
			</div>
			<div className="more__info">
				<h3 className="heading-3">Day of the week</h3>
				<p className="paragraph paragraph--more">2</p>
			</div>
			<div className="more__info">
				<h3 className="heading-3">Week number</h3>
				<p className="paragraph paragraph--more">12</p>
			</div>
			<div className="more__bar"></div>
		</section>
	);
};

export default More;
