import { fetchData } from '../utils/fetchData'

export const fetchTaxYear = async (year: string) => {
  return fetchData(`tax-calculator/tax-year/${year}`)
}
