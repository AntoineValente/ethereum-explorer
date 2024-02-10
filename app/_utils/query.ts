export const buildSearchParams = (
  params: Record<string, any>,
): URLSearchParams => {
  const searchParams = new URLSearchParams();

  for (const key in params) {
    if (params[key] !== null && params[key] !== undefined) {
      searchParams.append(key, params[key].toString());
    }
  }

  return searchParams;
};
