import { useEffect, useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import { fetchTaxYear } from '../apis/tax'

export default function Main() {
  const [year, setYear] = useState('')

  const [isSubmit, setIsSubmit] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmit(true)
  }

  const enabled = year !== '' && isSubmit

  const {
    isPending,
    error,
    data: taxBrackets
  } = useQuery({
    queryKey: [year],
    queryFn: () => fetchTaxYear(year),
    enabled,
    // cache the data for 2 mins
    staleTime: 2 * 60 * 1000
    // close automatic refetching to show error message
    // retry: false
  })

  useEffect(() => {
    if (error) {
      setIsSubmit(false)
    }
    if (taxBrackets) {
      setIsSubmit(false)
    }
  }, [error, taxBrackets])

  let content

  if (isPending) {
    content = <p>Loading...</p>
  } else if (error) {
    content = <p>Error: {error.message}</p>
  } else if (taxBrackets) {
    content = (
      <>
        <h1 className="mx-auto text-center">Total Tax</h1>
        <p className="mx-auto text-center">$0</p>
      </>
    )
  }

  return (
    <main className="container p-6 bg-white rounded space-y-4 sm:flex sm:items-center sm:space-x-4 sm:space-y-0">
      <div className="flex-1 p-6 ">
        <form className="space-y-4" onSubmit={handleSubmit}>
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
      <div className="flex-1 p-6 rounded-xl shadow-lg">{content}</div>
    </main>
  )
}
