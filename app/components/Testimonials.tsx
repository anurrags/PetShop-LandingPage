"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Golden Retriever Parent",
    quote: "The grooming experience at Saffron Paws is unmatched. Simba comes home looking like a star every single time!"
  },
  {
    name: "Arjun Mehta",
    role: "Cat Enthusiast",
    quote: "Finding a vet you can trust is hard. The team here is not just professional, but deeply compassionate."
  },
  {
    name: "Ananya Iyer",
    role: "New Pet Parent",
    quote: "Their organic treats are the only thing my picky eater loves. So glad I found this gem in the city!"
  },
  {
    name: "Rahul Verma",
    role: "Beagle Owner",
    quote: "Expert care and a warm Atmosphere. Saffron Paws is the only place I trust for my pet's wellness."
  }
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        if (scrollLeft >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll to the next child element
          const nextIndex = (activeIndex + 1) % testimonials.length;
          scrollTo(nextIndex);
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, activeIndex]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const children = Array.from(scrollRef.current.children) as HTMLElement[];
      
      // Find the index of the child closest to the center of the viewport
      const containerCenter = scrollLeft + clientWidth / 2;
      
      let closestIndex = 0;
      let minDistance = Infinity;
      
      children.forEach((child, i) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const distance = Math.abs(containerCenter - childCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      });
      
      setActiveIndex(closestIndex);
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const children = Array.from(scrollRef.current.children) as HTMLElement[];
      const targetChild = children[index];
      if (targetChild) {
        const containerWidth = scrollRef.current.clientWidth;
        const scrollTarget = targetChild.offsetLeft - (containerWidth / 2) + (targetChild.offsetWidth / 2);
        scrollRef.current.scrollTo({ left: scrollTarget, behavior: "smooth" });
      }
    }
  };

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className="container">
        <h2 className={styles.title}>Loved by <span>Pets</span>, Trusted by <span>Owners</span></h2>
        <div 
          className={styles.scrollContainer} 
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onScroll={handleScroll}
        >
          {testimonials.map((t, i) => (
            <div key={i} className={`${styles.card} card`}>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.footer}>
                <div>
                  <h4 className={styles.name}>{t.name}</h4>
                  <p className={styles.role}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.indicators}>
          {testimonials.map((_, i) => (
            <div 
              key={i} 
              className={`${styles.dot} ${i === activeIndex ? styles.active : ""}`}
              onClick={() => scrollTo(i)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
