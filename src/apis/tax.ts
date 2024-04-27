import { fetchData } from '../utils/fetchData'

import { TaxBracket } from '../types/tax'

export const fetchTaxYear = async (
  year: string
): Promise<{ tax_brackets: TaxBracket[] }> => {
  return fetchData(`tax-calculator/tax-year/${year}`)
}
