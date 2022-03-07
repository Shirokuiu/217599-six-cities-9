import { URLSearchParamsInit } from 'react-router-dom';

import { parseSearchParams } from 'src/helpers/parse-search-params';

type SetSearchParams = (
  nextInit: URLSearchParamsInit,
  navigateOptions?:
    | {
        replace?: boolean | undefined;
        state?: any;
      }
    | undefined,
) => void;

export const addQueryParams = <T>({
  searchParams,
  queryParams,
  setSearchParams,
  keySearchParams,
}: {
  searchParams: URLSearchParams;
  queryParams: T;
  setSearchParams: SetSearchParams;
  keySearchParams: string;
}) => {
  const oldParsedSearchParams =
    parseSearchParams<Record<string, string>>(searchParams);

  setSearchParams({
    ...oldParsedSearchParams,
    ...queryParams,
  });
};
