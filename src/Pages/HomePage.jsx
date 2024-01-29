import { NavLink } from "react-router-dom";
import styles from "./HomePage.module.css";
import PageNav from "../Components/PageNav";
import Footer from "../Components/Footer";

function HomePage() {
  return (
    <>
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
            <div>
              <NavLink to="aboutus">About us</NavLink>
            </div>
          </div>
          <div className={styles.imgBox}>
            <div className={styles.heroBoxes}>
              <NavLink to="balance" className={styles.heroBox3}>
                <div>
                  <h3>Ensure the Security of Your Finances</h3>
                  <p>
                    Guarding your financial well-being is not just our
                    commitment; it's our assurance of a secure tomorrow.
                  </p>
                </div>
              </NavLink>
              <NavLink to="aboutus" className={styles.heroBox2}>
                <div>
                  <h3>We Pride Ourselves as Market Leaders</h3>
                  <p>
                    At the forefront of innovation and excellence, we proudly
                    lead the market, setting the standard for quality and
                    service.
                  </p>
                </div>
              </NavLink>
              <NavLink to="converter" className={styles.heroBox1}>
                <div>
                  <h3>Stay Informed on Currency Values</h3>
                  <p>
                    Empower your financial decisions by staying abreast of
                    real-time currency values - your key to informed and
                    strategic choices.
                  </p>
                </div>
              </NavLink>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default HomePage;
