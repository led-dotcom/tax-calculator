import { fetchData } from '../utils/fetchData'

export const fetchTaxYear = async (year: string) => {
  return fetchData(`http://localhost:5001/tax-calculator/tax-year/${year}`)
}
