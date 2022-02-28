export const parseSearchParams = (
  searchParams: URLSearchParams,
): Record<string, string> => Object.fromEntries([...searchParams]);
