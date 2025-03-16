import styles from './banner.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.bannerBox}>
          <h1 style={{fontStyle: 'italic'}}>Elif JEWELRY</h1>
          <h2>The Meeting Point of Elegance and Style</h2>
          <Link href="/product" className={styles.btn}>For more</Link>
        </div>
        <div className={`${styles.bannerBox} ${styles.bannerImage}`}>
          <Link href="#">
            <Image 
              src="/img/resim1.png" 
              alt="Banner Image"
              width={500}
              height={500}
              style={{maxWidth: '100%', height: 'auto'}}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
