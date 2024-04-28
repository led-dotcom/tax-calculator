import { useEffect, useState } from 'react'

import useTaxBrackets from '../../hooks/useTaxBrackets'

import Form from './form/Form'
import Details from './details/Details'

import { CustomForm } from '../../types'

export default function Tax() {
  const [income, setIncome] = useState('')

  const [year, setYear] = useState('')

  const [isSubmit, setIsSubmit] = useState(false)

  const handleSubmit = (e: React.FormEvent<CustomForm>) => {
    e.preventDefault()

    const target = e.currentTarget.elements
    setIncome(target.income.value)
    setYear(target.year.value)

    setIsSubmit(true)
  }

  const enabled = year !== '' && isSubmit

  const { isFetching, error, taxBrackets } = useTaxBrackets(year, enabled)

  useEffect(() => {
    if (error || taxBrackets) {
      setIsSubmit(false)
    }
  }, [error, taxBrackets])

  let content = <Details income={income} taxBrackets={taxBrackets} />

  if (error) {
    content = <p>Error: {error.message}</p>
  }

  return (
    <main className="min-w-96 container p-6 bg-white rounded space-y-4 sm:flex sm:items-center sm:space-x-4 sm:space-y-0">
      <div className="flex-1 p-6">
        <Form isPending={isFetching} onSubmit={handleSubmit} />
      </div>
      <div className="flex-1 p-10 rounded-xl shadow-lg space-y-2">
        {content}
      </div>
    </main>
  )
}
