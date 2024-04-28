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
      <div className="space-y-2 mb-10">
        <h1 className="mx-auto text-center text-sm font-semibold">
          Total taxes
        </h1>
        <p className="mx-auto text-center text-5xl font-semibold text-gray-500">
          {totalTax}
        </p>
      </div>
      <div className="pb-2 border-b-2 border-gray-800 font-semibold flex justify-between">
        <div>Tax brackets</div>
        <div>Tax per band</div>
      </div>
      <div className="pb-2 border-b-2 border-gray-200 text-sm flex justify-between">
        <div>{level1} or less</div>
        <div>{level1Tax}</div>
      </div>
      <div className="pb-2 border-b-2 border-gray-200 text-sm flex justify-between">
        <div>
          {level1} to {level2}
        </div>
        <div>{level2Tax}</div>
      </div>
      <div className="pb-2 border-b-2 border-gray-200 text-sm flex justify-between">
        <div>
          {level2} to {level3}
        </div>
        <div>{level3Tax}</div>
      </div>
      <div className="pb-2 border-b-2 border-gray-200 text-sm flex justify-between">
        <div>
          {level3} to {level4}
        </div>
        <div>{level4Tax}</div>
      </div>
      <div className="pb-2 border-b-2 border-gray-800 text-sm flex justify-between">
        <div>More than {level4}</div>
        <div>{level5Tax}</div>
      </div>
      <div className="font-semibold flex justify-between">
        <div className="mx-auto text-center">Tax Rate: </div>
        <div className="mx-auto text-center">{taxRate}</div>
      </div>
    </>
  )
}
