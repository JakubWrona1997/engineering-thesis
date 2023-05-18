import styles from "./Home.module.css";
import DocumentHeroLayout2 from "../../ui-components/DocumentHeroLayout2";
import Layout from "../NavBar/NavBar";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <DocumentHeroLayout2 width={"100%"} height={"100%"} overrides={{'Frame 419': {className: styles.slideFromLeft}, 'Frame 418':{className: styles.slideFromRight}}}/>
      </div>
    </Layout>
  );
}
