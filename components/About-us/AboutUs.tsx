import styles from "./AboutUs.module.css";
import { CgBorderStyleDotted } from "react-icons/cg";
import { AiOutlineArrowRight } from "react-icons/ai";

const AboutUs = () => {
  return (
    <>
      <div className={styles.aboutUsContainer}>
        <div className={styles.aboutUsBox1}>
          <h3 className={styles.aboutUsBox1Bg}></h3>
          <div className={styles.aboutUsBox1Container}>
            <div className={styles.aboutUsBox1Layer1}>
              <div className={styles.lines}></div>
              <div>About Us</div>
            </div>
            <div className={styles.aboutUsBox1Layer2}>
              <h2>Built for Saas and E-commerce</h2>
            </div>
            <p className={styles.aboutUsBox1Layer3}>
              Our tools are easy to set up and use with a user friendly
              dashboard that enables you to set up, launch, automate and manage
              multi-affiliate campaigns in 5 minutes.
            </p>
          </div>

          <div className={styles.aboutUsBox2Container}>
            <h1>
              Metricks was developed because just like you, we needed a product
              that could give us good value.
            </h1>
            <div className={styles.aboutUsBox2Layer1}>
              <div className={styles.aboutUsBox2Layer1Box1}>
                <div>
                  <div className={styles.lines}>
                    <span>01</span>
                  </div>
                  <div>Why us?</div>
                </div>
                <h4>
                  We pride ourselves in our ability to innovate and create
                  world-class tools that provide reliable and efficient
                  touchpoints between advertisers and affiliates.
                </h4>
              </div>
              <div className={styles.aboutUsBox2Layer1Box1}>
                <div>
                  <div className={styles.lines}>
                    <span>02</span>
                  </div>
                  <div>Growing with you</div>
                </div>
                <h4>
                  Leveraging the best technology, we have developed an
                  all-in-one affiliate marketing tracking software, a genius
                  tool to help you track, automate and optimize your influencer
                  campaigns, all from one dashboard.
                </h4>
              </div>
            </div>
          </div>
          <div className={styles.aboutUsBox2Container}>
            <div className={styles.aboutUsBox2Layer1}>
              <div className={styles.aboutUsBox2Layer1Box1}>
                <div>.............................</div>
                <div>.............................</div>
                <div>.............................</div>
                <div>.............................</div>
              </div>
              <div className={styles.aboutUsBox2Layer1Box1}>
                <h4>
                  Our team of experts are constantly brainstorming, testing and
                  developing new solutions with only one thing in mind - your
                  business growth. Your success is our success and by giving you
                  the tools you need to scale, we grow as well.
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.aboutUsBox2}>
          <h1>Got a Question?</h1>
          <p>
            See how Metricks can help your business grow with best Affiliate
            Marketing Tracking Software.
          </p>
          <a href="/contactUs">
            Contact us{" "}
            <div>
              <AiOutlineArrowRight />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
