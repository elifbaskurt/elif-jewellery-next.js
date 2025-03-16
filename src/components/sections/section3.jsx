'use client';
import { useRef } from 'react';
import styles from './sections.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Section3 = () => {
  const sectionRef = useRef(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section 
      ref={sectionRef}
      className={`${styles.section3} scroll-animation ${isVisible ? 'visible' : ''}`}
    >
      <div className={styles.text}>
        <h3>History Of Our Company...</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos ab consequatur, architecto
          numquam eaque cumque? Harum nostrum veniam suscipit eos.
        </p>
        <Link href="/about" className={`${styles.btn} ${styles.colorGreen}`}>For More</Link>
      </div>
      <div className={styles.image}>
        <Image src="/img/toplutakı.jpg" alt="Jewelry Collection" width={600} height={400} />
      </div>
    </section>
  );
};

export default Section3; 