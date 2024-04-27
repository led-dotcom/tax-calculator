import { useState, useEffect } from 'react'

import { useQuery } from '@tanstack/react-query'

const fetchTaxYear = async (year: string) => {
  const response = await fetch(
    `http://localhost:5001/tax-calculator/tax-year/${year}`
  )
  return response.json()
}

export default function Main() {
  const [year, setYear] = useState('2022')

  const { isPending, error, data } = useQuery({
    queryKey: [year],
    queryFn: () => fetchTaxYear(year)
  })

  useEffect(() => {
    if (data) {
      console.log('year:', year)

      console.log('data:', data.tax_brackets)
    }
  }, [year, data])

  return (
    <main className="container p-6 bg-white rounded space-y-4 sm:flex sm:items-center sm:space-x-4 sm:space-y-0">
      <div className="flex-1 p-6 ">
        <form className="space-y-4">
          <span className="block text-sm font-medium text-slate-700">
            income
          </span>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
          <span className="block text-sm font-medium text-slate-700">year</span>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">
            submit
          </button>
        </form>
      </div>
      <div className="flex-1 p-6 rounded-xl shadow-lg">
        <h1 className="mx-auto text-center">Total Tax</h1>
        <p className="mx-auto text-center">$0</p>
      </div>
    </main>
  )
}
