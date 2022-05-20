import styles from "./HomepageBody.module.css";
import HomePageForm from "./HomePageForm";
import Timer from "./Timer";

const HomepageBody = () => {
  return (
    <>
      <div className={styles.homePageBodyContainer}>
        <h3 className={styles.homePageBodyHeader}>
          SOMETHING AWESOME IS <br /> COMING SOON
        </h3>
        <p className={styles.homePageParagraph}>
          Your all-in-one affiliate marketing tracking software track, automate
          and <br />
          optimize your campaigns
        </p>
        <div>
          <Timer />
        </div>
        <div>
          <HomePageForm />
        </div>
        <div className="wishlist">k</div>
      </div>
    </>
  );
};

export default HomepageBody;
