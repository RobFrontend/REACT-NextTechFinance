import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      &copy; {new Date().getFullYear()} by robfrontend
    </footer>
  );
}

export default Footer;
