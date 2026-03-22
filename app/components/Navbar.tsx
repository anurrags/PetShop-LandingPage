import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={`${styles.navbar} glass`}>
      <div className={`${styles.container} container`}>
        <Link href="/" className={styles.logo}>
          SAFFRON<span>PAWS</span>
        </Link>
        <div className={styles.links}>
          <Link href="#services" className={styles.link}>Services</Link>
          <Link href="#about" className={styles.link}>About</Link>
          <Link href="#testimonials" className={styles.link}>Testimonials</Link>
          <Link href="#contact" className={styles.link}>Contact</Link>
        </div>
        <button className="btn-primary">Book a Session</button>
      </div>
    </nav>
  );
}
