'use client';
import { useRef } from 'react';
import styles from './about.module.css';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutContent = () => {
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const text4Ref = useRef(null);
  const text5Ref = useRef(null);

  const isVisible1 = useScrollAnimation(text1Ref);
  const isVisible2 = useScrollAnimation(text2Ref);
  const isVisible3 = useScrollAnimation(text3Ref);
  const isVisible4 = useScrollAnimation(text4Ref);
  const isVisible5 = useScrollAnimation(text5Ref);

  return (
    <div className={styles.texttext}>
      <div 
        ref={text1Ref}
        className={`${styles.text} scroll-animation ${isVisible1 ? 'visible' : ''}`}
      >
        <h3 className={styles.textHeader}>The Story of Elif JEWELRY</h3>
        <p className={styles.textP}>
          Elif Jewelry has gained a solid place in the jewelry world with its years of experience
          and sense of elegance. Our founder Elif Hanım's passionate work and aesthetic vision are evident in every piece of
          our brand. Each of our designs comes to life with carefully selected stones and superior quality
          materials, thus offering a unique and unforgettable elegance to our valued customers.
        </p>
      </div>

      <div 
        ref={text2Ref}
        className={`${styles.text} scroll-animation ${isVisible2 ? 'visible' : ''}`}
      >
        <h3 className={styles.textHeader}>Our Mission</h3>
        <p className={styles.textP}>
          As Elif Jewelry, we aim to design jewelry that will make every woman and man feel
          special. Our collections, which are the symbols of elegance and elegance, consist of designs that you
          can use not only on special occasions but also in daily life. We always aim to offer the best with our
          customer satisfaction-oriented service approach.
        </p>
      </div>

      <div 
        ref={text3Ref}
        className={`${styles.text} scroll-animation ${isVisible3 ? 'visible' : ''}`}
      >
        <h3 className={styles.textHeader}>Our Vision</h3>
        <p className={styles.textP}>
          We act with the vision of being an innovative and leading brand in the jewelry industry.
          By blending classical and modern elements in our designs, we create collections that appeal to all ages
          and styles. As Elif Jewelry, we know that jewelry is not just an accessory but also a lifestyle, and we
          continue our work in this direction.
        </p>
      </div>

      <div 
        ref={text4Ref}
        className={`${styles.text} scroll-animation ${isVisible4 ? 'visible' : ''}`}
      >
        <h3 className={styles.textHeader}>Why Elif Jewelry?</h3>
        <p className={styles.textP}>
          Every piece of Elif Mücevher is designed to make your special moments even more special.
          Whether for yourself or as a gift to your loved ones, you can always make the right choice with Elif
          Jewelry's wide range of products. Our jewels, brought to life in the hands of our master craftsmen, are
          here to reflect your light.
        </p>
      </div>

      <div 
        ref={text5Ref}
        className={`${styles.text} scroll-animation ${isVisible5 ? 'visible' : ''}`}
      >
        <h3 className={styles.textHeader}>Communication</h3>
        <p className={styles.textP}>
          You can visit our contact page to contact us and get more information. We look forward to meeting you, our valued customers!
        </p>
      </div>
    </div>
  );
};

export default AboutContent; 