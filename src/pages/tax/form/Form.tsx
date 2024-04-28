import { CustomForm } from '../../../types'

export default function Form({
  onSubmit,
  isPending
}: {
  onSubmit: (e: React.FormEvent<CustomForm>) => void
  isPending: boolean
}) {
  return (
    <>
      <form className="space-y-4" onSubmit={onSubmit}>
        <span className="block text-sm font-medium text-slate-700">income</span>
        <input
          id="income"
          type="text"
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
        <span className="block text-sm font-medium text-slate-700">year</span>
        <input
          id="year"
          type="text"
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
        <button
          disabled={isPending}
          className={`inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 ${
            isPending && 'cursor-not-allowed'
          }`}>
          {isPending && (
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          )}
          {isPending ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </>
  )
}
