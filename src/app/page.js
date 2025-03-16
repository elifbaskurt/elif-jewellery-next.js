import Banner from '@/components/banner/banner';
import Section1 from '@/components/sections/section1';
import Section2 from '@/components/sections/section2';
import Section3 from '@/components/sections/section3';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <Banner />
      <div className={styles.container}>
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </main>
  );
}
