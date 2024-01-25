import SideBar from "../Components/SideBar";
import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <main className={styles.main}>
      <SideBar />
      <section>
        <h1>About us</h1>
        <img src="img/logoDark.png" alt="Logo" />
      </section>
    </main>
  );
}

export default AboutUs;
