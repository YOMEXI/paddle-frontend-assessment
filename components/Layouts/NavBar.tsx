import styles from "./NavBar.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.navBarLogoContainer}>
        <div className={styles.navBarLogo}>
          <Image src={`/img/metricks.png`} width={60} height={40} />
        </div>
        <div className={styles.navBarLogoName}>METRICKS</div>
      </div>
      <div className={styles.navbarLinks}>
        <li className={styles.navBarLink}>
          <Link href="/about-us">
            <a>ABOUT US</a>
          </Link>
        </li>
        <li className={styles.navBarLink}>
          <Link href="/">
            <a>COMING SOON</a>
          </Link>
        </li>
        <li className={styles.navBarLink}>
          <Link href="/">
            <a>BLOG</a>
          </Link>
        </li>
        <li className={styles.navBarLink}>
          <Link href="/github">
            <a>GITHUB</a>
          </Link>
        </li>
        <li className={styles.navBarLink}>
          <Link href="/contactUs">
            <a className={styles.contactUs}>CONTACT US</a>
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Header;
