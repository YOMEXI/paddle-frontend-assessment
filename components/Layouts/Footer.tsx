import styles from "./Footer.module.css";
import {
  TiSocialInstagram,
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialTwitter,
} from "react-icons/ti";

const Footer = () => {
  return (
    <>
      <div className={styles.footerContainerGlass}>
        <div className={styles.footerContainer}>
          <div className={styles.footerSocialLink}>
            <li className={styles.footerSocialLinks}>
              <TiSocialYoutube />
            </li>
            <li className={styles.footerSocialLinks}>
              <TiSocialFacebook />
            </li>
            <li className={styles.footerSocialLinks}>
              <TiSocialLinkedin />
            </li>
            <li className={styles.footerSocialLinks}>
              <TiSocialInstagram />
            </li>
            <li className={styles.footerSocialLinks}>
              <TiSocialTwitter />
            </li>
          </div>
          <div className={styles.footerTerms}>
            <div className={styles.footerConditions}>Terms of services</div>
            <div className={styles.footerConditions}>Privacy policy</div>
          </div>
          <div className={styles.footerTerms}>
            <p>Copyright 2021 @ peddle Technologies. All rights reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
