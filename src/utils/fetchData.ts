export async function fetchData(
  url: string,
  options?: RequestInit
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> {
  const response = await fetch(url, options)

  if (!response.ok) {
    throw new Error(
      `HTTP error! Status: ${response.status} ${response.statusText}`
    )
  }
  return response.json()
}
