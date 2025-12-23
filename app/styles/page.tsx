import { getStyles } from "./queries";
import StylesTablePage from "./_components/StylesTablePage/StylesTablePage";

export default async function StylesHome() {
  const styles = await getStyles();
  console.log(styles.length);

  return <StylesTablePage styles={styles} />;
}
