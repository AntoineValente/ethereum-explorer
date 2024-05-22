export const createMiddleEllipsis = (inputString: string): string => {
	if (inputString.length <= 16) {
		return inputString;
	}

	const firstEight = inputString.slice(0, 11);
	const lastEight = inputString.slice(-11);

	return `${firstEight}...${lastEight}`;
};
