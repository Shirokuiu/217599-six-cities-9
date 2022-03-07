import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { parseSearchParams } from 'src/helpers/parse-search-params';

export const useAddQueryParams = <T>(queryParams: T): void => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const oldParsedSearchParams =
      parseSearchParams<Record<string, string>>(searchParams);

    setSearchParams({
      ...oldParsedSearchParams,
      ...queryParams,
    });
  }, [searchParams]);
};
