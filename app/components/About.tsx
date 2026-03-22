import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`${styles.container} container`}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/about.png" 
            alt="Premium Pet Care Clinic" 
            width={600} 
            height={700} 
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>India&apos;s #1 Destination for <span>Pet Care</span></h2>
          <p className={styles.text}>
            At Saffron Paws, we believe that pets are family. Our mission is to provide an 
            extraordinary level of care that goes beyond the basic needs. From the moment 
            you step into our sanctuary, you&apos;ll experience a blend of hospitality, 
            expertise, and genuine love for animals.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <h4>15k+</h4>
              <p>Happy Pets</p>
            </div>
            <div className={styles.stat}>
              <h4>10+</h4>
              <p>Top Specialists</p>
            </div>
            <div className={styles.stat}>
              <h4>24/7</h4>
              <p>Expert Support</p>
            </div>
          </div>
          <button className="btn-primary">DISCOVER OUR STORY</button>
        </div>
      </div>
    </section>
  );
}
