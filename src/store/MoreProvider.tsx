import { createContext, useState, ReactNode } from 'react';

interface Props {
	children?: ReactNode;
}

const MoreContext = createContext({ isActive: false, handleActiveState() {} });

export const MoreProvider = ({ children }: Props) => {
	const [isActive, setIsActive] = useState(false);

	const handleActiveState = () => {
		setIsActive((prevActive) => !prevActive);
	};

	return (
		<MoreContext.Provider value={{ isActive, handleActiveState }}>
			{children}
		</MoreContext.Provider>
	);
};

export default MoreContext;
