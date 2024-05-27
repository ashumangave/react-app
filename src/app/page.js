import styles from "./page.module.css";
import Menu from "./component/menu/menu";
import Title from "./component/title/title";

const noLinkMenuList = [
  {
    key: "biodata",
    value: "Bio data",
  },
];
export default function Home() {
  return (
    <main className={styles.main}>
      <Menu />
    </main>
  );
}
