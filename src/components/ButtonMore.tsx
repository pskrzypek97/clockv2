import { useContext, useState } from 'react';

import MoreContext from '../store/MoreProvider';

const ButtonMore = () => {
	const { isActive, handleActiveState } = useContext(MoreContext);

	const [deg, setDeg] = useState(0);

	const handleButton = () => {
		handleActiveState();
		setDeg((prevDeg) => (prevDeg += 180));
	};

	return (
		<button className="btn" onClick={handleButton}>
			<p>{isActive ? 'Less' : 'More'}</p>
			<div>
				<svg style={{ transform: `rotate(${deg}deg)` }}>
					<use href="/sprite.svg#icon-arrow-up"></use>
				</svg>
			</div>
		</button>
	);
};

export default ButtonMore;
