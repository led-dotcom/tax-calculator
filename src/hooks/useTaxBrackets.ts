import { useQuery } from '@tanstack/react-query'

import { fetchTaxYear } from '../apis/tax'

export default function useTaxBrackets(year: string, enabled: boolean = false) {
  const { fetchStatus, error, data } = useQuery({
    queryKey: [year],
    queryFn: () => fetchTaxYear(year),
    enabled,
    // cache the data for 2 mins
    staleTime: 2 * 60 * 1000
    // close automatic refetching to show error message
    // retry: false
  })
  return { fetchStatus, error, taxBrackets: data?.tax_brackets }
}
