'use client';
import { useRef } from 'react';
import styles from './sections.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Section1 = () => {
  const sectionRef = useRef(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section 
      ref={sectionRef}
      className={`${styles.section1} scroll-animation ${isVisible ? 'visible' : ''}`}
    >
      <div className={styles.lang}>
        <Link href="#"><Image src="/img/yüzük2.jpg" alt="Ring" width={100} height={100} /></Link>
        <Link href="#"><Image src="/img/takı6.jpeg" alt="Jewelry" width={100} height={100} /></Link>
        <Link href="#"><Image src="/img/takı4.jpg" alt="Jewelry" width={100} height={100} /></Link>
        <Link href="#"><Image src="/img/takı3.jpg" alt="Jewelry" width={100} height={100} /></Link>
        <Link href="#"><Image src="/img/takı5.jpg" alt="Jewelry" width={100} height={100} /></Link>
        <Link href="#"><Image src="/img/resim1.png" alt="Jewelry" width={100} height={100} /></Link>
      </div>
      <div className={styles.inner}>
        <h3 style={{textAlign: 'center', fontStyle: 'italic'}}>
          <span style={{fontSize: '50px', color: '#181E28'}}>J</span>
          EWELR
          <span style={{fontSize: '50px', color: '#181E28'}}>Y</span>
        </h3>
        <p style={{textAlign: 'center', fontStyle: 'italic'}}>
          Jewelry has been a symbol of elegance, elegance and prestige throughout history. The feelings that a
          sparkling diamond, a dazzling emerald or a sapphire ring makes a person feel are indescribable.
          Jewelry does not only have an aesthetic value; They also create an emotional bond. They represent a
          special memory, a loving reminder, or life's most important moments.
        </p>
        <p style={{textAlign: 'center', fontStyle: 'italic'}}>
          Wearing a piece of jewelery makes a person feel special and valuable. These rare pieces, which are
          symbols of elegance and magnificence, increase self-confidence and help a person express himself.
          Buying or giving a jewel as a gift is one of the most beautiful indicators of love, devotion and
          care. Jewelery also carries deep meaning as family heirlooms passed down through generations,
          carrying stories and emotions from the past to the future.
        </p>
      </div>
    </section>
  );
};

export default Section1; 