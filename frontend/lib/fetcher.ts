export async function fetcher<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    credentials: 'include'
  });
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return (await response.json()) as T;
}
