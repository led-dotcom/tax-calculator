import { TaxBracket } from '../../../types/tax'

export default function Details({
  income,
  taxBrackets
}: {
  income: string
  taxBrackets?: TaxBracket[]
}) {
  const incomeNum = parseInt(income)

  const level1 = taxBrackets?.[0]?.max ?? 0
  const level1Rate = taxBrackets?.[0]?.rate ?? 0
  let level1Tax = incomeNum * level1Rate ?? 0
  if (incomeNum > level1) {
    level1Tax = level1 * level1Rate
  }

  const level2 = taxBrackets?.[1]?.max ?? 0
  const level2Rate = taxBrackets?.[1]?.rate ?? 0
  let level2Tax = 0
  if (incomeNum > level1 && incomeNum <= level2) {
    level2Tax = (incomeNum - level1) * level2Rate
  } else if (incomeNum > level2) {
    level2Tax = (level2 - level1) * level2Rate
  }

  const level3 = taxBrackets?.[2]?.max ?? 0
  const level3Rate = taxBrackets?.[2]?.rate ?? 0
  let level3Tax = 0
  if (incomeNum > level2 && incomeNum <= level3) {
    level3Tax = (incomeNum - level2) * level3Rate
  } else if (incomeNum > level3) {
    level3Tax = (level3 - level2) * level3Rate
  }

  const level4 = taxBrackets?.[3]?.max ?? 0
  const level4Rate = taxBrackets?.[3]?.rate ?? 0
  let level4Tax = 0
  if (incomeNum > level3 && incomeNum <= level4) {
    level4Tax = (incomeNum - level3) * level4Rate
  } else if (incomeNum > level4) {
    level4Tax = (level4 - level3) * level4Rate
  }

  const level5Rate = taxBrackets?.[4]?.rate ?? 0
  let level5Tax = 0
  if (incomeNum > level4) {
    level5Tax = (incomeNum - level4) * level5Rate
  }

  return (
    <>
      <h1 className="mx-auto text-center">Total Tax</h1>
      <p className="mx-auto text-center">$0</p>
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
    </>
  )
}
