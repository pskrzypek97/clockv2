import {
	createContext,
	useState,
	ReactNode,
	useMemo,
	useCallback,
} from 'react';

interface Props {
	children?: ReactNode;
}

const MoreContext = createContext({ isActive: false, handleActiveState() {} });

export const MoreProvider = ({ children }: Props) => {
	const [isActive, setIsActive] = useState(false);

	const handleActiveState = useCallback(() => {
		setIsActive((prevActive) => !prevActive);
	}, [setIsActive]);

	const memoizedValue = useMemo(
		() => ({ isActive, handleActiveState }),
		[isActive, handleActiveState]
	);

	return (
		<MoreContext.Provider value={memoizedValue}>
			{children}
		</MoreContext.Provider>
	);
};

export default MoreContext;
