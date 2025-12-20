import { getStyles } from "./queries";

export default async function StylesHome() {
  const posts = await getStyles();

  return (
    <div>
      <h1>Styles</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
}
