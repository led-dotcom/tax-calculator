import { TaxBracket } from '../../../types/tax'

import calculateTax from '../../../utils/calculateTax'

export default function Details({
  income,
  taxBrackets
}: {
  income: string
  taxBrackets?: TaxBracket[]
}) {
  const {
    level1,
    level1Tax,
    level2,
    level2Tax,
    level3,
    level3Tax,
    level4,
    level4Tax,
    level5Tax,
    totalTax,
    taxRate
  } = calculateTax(income, taxBrackets)

  return (
    <>
      <h1 className="mx-auto text-center">Total Tax</h1>
      <p className="mx-auto text-center">${totalTax}</p>
      <div className="flex justify-between">
        <div>tax brackets</div>
        <div>tax per band</div>
      </div>
      <div className="flex justify-between">
        <div>${level1} or less</div>
        <div>${level1Tax}</div>
      </div>
      <div className="flex justify-between">
        <div>
          ${level1} to ${level2}
        </div>
        <div>${level2Tax}</div>
      </div>
      <div className="flex justify-between">
        <div>
          ${level2} to ${level3}
        </div>
        <div>${level3Tax}</div>
      </div>
      <div className="flex justify-between">
        <div>
          ${level3} to ${level4}
        </div>
        <div>${level4Tax}</div>
      </div>
      <div className="flex justify-between">
        <div>More than ${level4}</div>
        <div>${level5Tax}</div>
      </div>
      <h1 className="mx-auto text-center">Tax Rate: </h1>
      <p className="mx-auto text-center">{taxRate}</p>
    </>
  )
}
