export async function mcfetch<T extends object>({
  query,
  variables,
}: {
  query: string;
  variables?: any;
}) {
  const res = await fetch("http://localhost:4000", {
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json() as Promise<{ data: T }>;
}
