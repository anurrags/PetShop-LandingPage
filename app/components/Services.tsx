import styles from "./Services.module.css";

const services = [
  {
    title: "Professional Grooming",
    description: "Personalized spa sessions using organic, chemical-free products for a healthy glow.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"/><path d="M11 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"/><path d="M15 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"/><path d="M19 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"/><path d="M5 16h14"/><path d="M5 8h14"/><path d="M3 12a9 9 0 0 1 9-9 9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9Z"/>
      </svg>
    )
  },
  {
    title: "Vet Care Excellence",
    description: "Preventative wellness exams and advanced diagnostics by India's top pet specialists.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/><path d="m9 12 2 2 4-4"/>
      </svg>
    )
  },
  {
    title: "Premium Nutrition",
    description: "A curated range of biologically appropriate pet foods and hand-made organic treats.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18h12"/><path d="M6 14h12"/><path d="M6 10h12"/><path d="M3 22h18"/><path d="M3 6h18"/><path d="M3 2h18"/>
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Our <span>Services</span></h2>
          <p className={styles.subtitle}>Tailored care systems for the discerning pet owner.</p>
        </div>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className="card">
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
