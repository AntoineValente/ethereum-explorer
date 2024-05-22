export const filtersToString = <T extends { [x: string]: unknown }>(
	filters: T,
): string => {
	const params = new URLSearchParams();
	for (const [key, value] of Object.entries(filters) as [string, string][]) {
		if (value) params.append(key, value);
	}

	return params.toString();
};
