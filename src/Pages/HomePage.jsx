import { NavLink } from "react-router-dom";
import styles from "./HomePage.module.css";
import PageNav from "../Components/PageNav";

function HomePage() {
  return (
    <main className={styles.main}>
      <PageNav />
      <section className={styles.section}>
        <div className={styles.textBox}>
          <h1>NexTech Finance</h1>
          <h2>Empowering Your Financial Future with NexTech Excellence.</h2>
          <p>
            NexTech Finance is a cutting-edge financial institution at the
            intersection of technology and innovation. Committed to reshaping
            the future of banking, we leverage the latest advancements in
            financial technology to empower individuals and businesses in
            achieving their financial goals.
          </p>
        </div>
        <div className={styles.imgBox}>
          <NavLink to="aboutus">
            Welcome to NexTech Finance, where your financial future begins!
          </NavLink>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
