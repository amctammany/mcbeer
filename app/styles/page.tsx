import { getStyles } from "./queries";
import StylesTablePage from "./_components/StylesTablePage/StylesTablePage";

export default async function StylesHome() {
  const styles = await getStyles();

  return <StylesTablePage styles={styles} />;
}
