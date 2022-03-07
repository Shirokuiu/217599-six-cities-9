export const parseSearchParams = <T = Record<string, string>>(
  searchParams: URLSearchParams,
): T => Object.fromEntries([...searchParams]) as unknown as T;
