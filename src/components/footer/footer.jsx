import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerNav}>
          <nav>
            <h3>PRODUCTS</h3>
            <ul>
              <li><Link href="/product">Necklace</Link></li>
              <li><Link href="/product">Earring</Link></li>
              <li><Link href="/product">Ring</Link></li>
              <li><Link href="/product">Wrist Watch</Link></li>
            </ul>
          </nav>
          <nav>
            <h3>CONTENT</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/product">Products</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/about">About</Link></li>
              <li>
                <Link href="/store">
                  <Image src="/img/shopping.png" alt="Store" width={17} height={17} />
                  Store
                </Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h3>CONTACT</h3>
            <ul>
              <li>
                <Link href="tel:+1234567890">
                  <Image src="/img/icons/phone.png" alt="Phone" width={17} height={17} />
                  +123 456 7890
                </Link>
              </li>
              <li>
                <Link href="mailto:info@elifjewelry.com">
                  <Image src="/img/icons/new-post.png" alt="Email" width={17} height={17} />
                  info@elifjewelry.com
                </Link>
              </li>
              <li>
                <Link href="https://maps.google.com" target="_blank">
                  <Image src="/img/icons/map-marker.png" alt="Location" width={17} height={17} />
                  Istanbul, Turkey
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.search}>
            <h6>The Jewel You Want To Look For</h6>
            <form>
              <input type="text" placeholder="e.g. necklace, ring" />
              <button type="submit">
                <Image src="/img/search.png" alt="Search" width={20} height={20} />
              </button>
            </form>
          </div>
        </div>
        <div className={styles.copy}>
          <div>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
          <div className={styles.text}>
            © {new Date().getFullYear()} elifjewelry. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
