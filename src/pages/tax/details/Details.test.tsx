import { render, screen } from '@testing-library/react'

import Details from './Details'

it('renders the Details component', async () => {
  render(<Details income="100000" />)

  const totalTaxes = screen.getByText(/Tax brackets/i)

  expect(totalTaxes).toBeInTheDocument()
})
