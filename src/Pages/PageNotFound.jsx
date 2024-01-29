import SideBar from "../Components/SideBar";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <main className={styles.main}>
      <SideBar />
      <h1>Page Not Found...</h1>
    </main>
  );
}

export default PageNotFound;
