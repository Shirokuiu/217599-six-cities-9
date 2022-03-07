import { parseSearchParams } from 'src/helpers/parse-search-params';

export const buildSearchParamsTab = (
  tabText: string,
  searchParams: URLSearchParams,
): string => {
  const parsedSearchParams = parseSearchParams(searchParams);

  console.log(
    Object.keys(parsedSearchParams).map(
      (key) => `${key}=${key === parsedSearchParams[key]}`,
    ),
  );

  // console.log(
  //   [`country=${tabText}`, { ...parsedSearchParams }].filter(Boolean).join('&'),
  // );

  return [`country=${tabText}`, { ...parsedSearchParams }]
    .filter(Boolean)
    .join('&');
};
