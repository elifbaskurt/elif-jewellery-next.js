import styles from './contact-section.module.css';
import Image from 'next/image';

const ContactSection = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.contactContainer}>
        <div>
          <h1 className={styles.sectionTitle}>
            Contact <span>info</span>
          </h1>
        </div>
        <div className={styles.contactItems}>
          <div className={styles.contactItem}>
            <div className={styles.icon}>
              <Image 
                src="/img/icons/phone.png" 
                alt="Phone"
                width={70}
                height={70}
              />
            </div>
            <div className={styles.contactInfo}>
              <h1>Phone</h1>
              <h2>+1 234 123 1234</h2>
              <h2>+1 234 123 1234</h2>
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.icon}>
              <Image 
                src="/img/icons/new-post.png" 
                alt="Email"
                width={70}
                height={70}
              />
            </div>
            <div className={styles.contactInfo}>
              <h1>Email</h1>
              <h2>elifjewelry@gmail.com</h2>
              <h2>elifjewelry@gmail.com</h2>
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.icon}>
              <Image 
                src="/img/icons/map-marker.png" 
                alt="Address"
                width={70}
                height={70}
              />
            </div>
            <div className={styles.contactInfo}>
              <h1>Address</h1>
              <h2>Başakşehir</h2>
              <h2>İstanbul</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 