import { useQuery } from '@tanstack/react-query'

import { fetchTaxYear } from '../apis/tax'

/** *
 * @param year
 * @param enabled  - if the query should be enabled
 * @returns
 */
export default function useTaxBrackets(year: string, enabled: boolean = false) {
  const { isFetching, error, data } = useQuery({
    queryKey: [year],
    queryFn: () => fetchTaxYear(year),
    enabled,
    // fresh the data for 2 mins
    staleTime: 2 * 60 * 1000
    // close automatic refetching to show error message easily
    // retry: false
  })
  return { isFetching, error, taxBrackets: data?.tax_brackets }
}
