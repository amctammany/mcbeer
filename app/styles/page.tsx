import { TopBar } from "@/components/TopBar/TopBar";
import { getStyles } from "./queries";

export default async function StylesHome() {
  const posts = await getStyles();

  return (
    <div>
      <TopBar breadcrumbs={[{ title: "Styles", isCurrent: true }]} />
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
}
