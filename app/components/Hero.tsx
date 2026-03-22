import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <span className={styles.badge}>India&apos;s Premium Pet Destination</span>
          <h1 className={styles.title}>
            The Ultimate Haven for Your Pet&apos;s <span>Well-being</span>
          </h1>
          <p className={styles.description}>
            Experience the finest collection of organic treats, professional grooming, 
            and expert veterinary care in a space designed for comfort and joy.
          </p>
          <div className={styles.ctas}>
            <button className="btn-primary">SHOP THE COLLECTION</button>
            <button className={styles.btnSecondary}>VISIT OUR DEN</button>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.imageDecor}></div>
          <Image 
            src="/hero.png" 
            alt="The Pawsome Den Interior" 
            width={600} 
            height={600} 
            priority
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
