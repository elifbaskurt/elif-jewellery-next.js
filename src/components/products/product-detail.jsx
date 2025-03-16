import styles from './product-detail.module.css';
import Image from 'next/image';
import Link from 'next/link';

const ProductDetail = ({ product }) => {
  return (
    <section className={styles.productDetail}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className={styles.productImage}
            priority
          />
        </div>
        <div className={styles.info}>
          <h1>{product.name}</h1>
          <p className={styles.category}>Category: {product.category}</p>
          <p className={styles.description}>{product.description}</p>
          
          <div className={styles.actions}>
            <button className={styles.addToCart}>
              Add to Cart
            </button>
            <Link href="/product" className={styles.backButton}>
              Back to Products
            </Link>
          </div>
          
          <div className={styles.details}>
            <h2>Product Details</h2>
            <ul>
              <li>Material: Premium Quality</li>
              <li>Style: Modern</li>
              <li>Warranty: 2 Years</li>
              <li>Made in Turkey</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail; 