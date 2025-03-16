'use client';
import { useRef } from 'react';
import styles from './sections.module.css';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Section2 = () => {
  const sectionRef = useRef(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section 
      ref={sectionRef}
      className={`${styles.section2} scroll-animation ${isVisible ? 'visible' : ''}`}
    >
      <div className={styles.icon}>
        <Image src="/img/tısnkişstrti.png" alt="Icon" width={23} height={23} />
      </div>
      <p>The Meeting Point of Elegance and Style.</p>
    </section>
  );
};

export default Section2; 