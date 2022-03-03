export const parseSearchParams = <T>(searchParams: URLSearchParams): T =>
  Object.fromEntries([...searchParams]) as unknown as T;
