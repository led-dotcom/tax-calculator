import { fireEvent, render, screen } from '@testing-library/react'

import Form from './Form'

const mockOnSubmit = vi.fn()

describe('Form', () => {
  it('should render Input component', async () => {
    render(
      <Form
        isValidIncome={true}
        isValidYear={true}
        onSubmit={mockOnSubmit}
        isPending={false}
      />
    )

    const income = screen.getByPlaceholderText('20000')
    expect(income).toBeInTheDocument()

    const year = screen.getByPlaceholderText('2022')
    expect(year).toBeInTheDocument()
  })

  it('should be type number', async () => {
    render(
      <Form
        isValidIncome={true}
        isValidYear={true}
        onSubmit={mockOnSubmit}
        isPending={false}
      />
    )

    const income = screen.getByPlaceholderText('20000') as HTMLInputElement
    fireEvent.change(income, { target: { value: '1000' } })
    expect(income.value).toBe('1000')

    const year = screen.getByPlaceholderText('2022') as HTMLInputElement
    fireEvent.change(year, { target: { value: '2022' } })
    expect(year.value).toBe('2022')
  })

  it('should show error message', async () => {
    render(
      <Form
        isValidIncome={false}
        isValidYear={false}
        onSubmit={mockOnSubmit}
        isPending={false}
      />
    )

    const incomeError = screen.getByText('Not a valid income.')
    expect(incomeError).toBeVisible()

    const yearError = screen.getByText('Not a valid year.')
    expect(yearError).toBeVisible()
  })
})
