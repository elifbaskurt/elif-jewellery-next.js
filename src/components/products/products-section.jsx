'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './products.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  const sectionRef = useRef(null);
  const isVisible = useScrollAnimation(sectionRef);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data/products.json');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`${styles.section} scroll-animation ${isVisible ? 'visible' : ''}`}
    >
      <div className={styles.title}>
        <h1>
          <span style={{ fontSize: '45px', fontStyle: 'italic' }}>Elif JEWELRY:</span> 
          "Discover Elegance and Sparkle in Every Piece, Create Glamorous Memories."
        </h1>
        <p>
          As Elif Jewelry, we are proud to offer you the perfect combination of elegance and sparkle. Each of our
          pieces is designed with carefully selected stones and superior quality materials and produced to offer
          unique elegance and elegance. Each product in our collections is meticulously processed by our master
          craftsmen and detailed to reflect perfection. We are here to make every moment unforgettable with Elif
          Jewelry's unique designs.
        </p>
        <p>
          We are aware of the meaning and feeling a jewel carries. That's why Elif Jewelry aims to create pieces
          that have value not only aesthetically but also emotionally. Each one is designed as a symbol of love,
          affection and special moments. Each product we offer to our valued customers is prepared to make the
          important moments in your life even more special. Underline the most precious moments in your life and
          create unforgettable memories with Elif Jewelry.
        </p>
        <p>
          Elif Jewelry's wide product range has a variety that will appeal to every taste and style. We offer
          many options, from simple and stylish designs for daily use to magnificent pieces to shine on special
          occasions. Our products aim to appeal to people of all ages and styles by reflecting a perfect blend of
          classic and modern designs. Pamper yourself and your loved ones with Elif Jewelry; Crown every moment
          with sparkling details.
        </p>
      </div>

      <div className={styles.portfolio}>
        {products.map((product) => (
          <div key={product.id} className={styles.item}>
            <Image 
              src={product.image} 
              alt={product.name} 
              width={300} 
              height={300}
              objectFit="cover"
            />
            <div className={styles.action}>
              <Link href={`/product/${product.id}`}>Product information</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection; 