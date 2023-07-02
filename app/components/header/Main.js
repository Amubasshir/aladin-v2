import Link from 'next/link';
import { FaOpencart } from 'react-icons/fa';

import { RiSearch2Line } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';
const Main = () => {
  const { cart } = useSelector((state) => ({ ...state }));
  return (
    <div className={styles.main}>
      <div className={styles.main_container}>
        <Link legacyBehavior href="/">
          <a className={styles.logo}>
            <img src="https://i.ibb.co/qdcJDqJ/aladin-text-logoo.png" alt="" />
          </a>
        </Link>
        <div className={styles.search}>
          <input type="text" placeholder="Search" />
          <div className={styles.search_icon}>
            <RiSearch2Line />
          </div>
        </div>
        <Link legacyBehavior href="/cart">
          <a className={styles.cart}>
            <FaOpencart />
            <span>0</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Main;
