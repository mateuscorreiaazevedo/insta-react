const BASE_URL = "http://localhost:9002"

export async function getService (url) {
  const response = await fetch(BASE_URL + url)
  return await response.json()
}
