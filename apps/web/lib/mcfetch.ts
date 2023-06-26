export const mcfetch = async ({
  query,
  variables,
}: {
  query: string;
  variables?: any;
}) => {
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
  return res.json();
};
