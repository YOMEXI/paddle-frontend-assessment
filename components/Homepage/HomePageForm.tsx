import styles from "./HomePageForm.module.css";

const HomePageForm = () => {
  return (
    <>
      <form className={styles.HomePageFormContainer}>
        <div className={styles.HomePageFormBox}>
          <label className={styles.HomePageFormLabel}></label>
          <input
            type="text"
            className={styles.HomePageFormInput}
            placeholder="First Name"
          />
        </div>
        <div className={styles.HomePageFormBox}>
          <label className={styles.HomePageFormLabel}></label>
          <input
            type="text"
            className={styles.HomePageFormInput}
            placeholder="Last Name"
          />
        </div>
      </form>
      <form action="">
        <div className={styles.HomePageWishlistFormContainer}>
          <input
            type="text"
            className={styles.HomePageWishlistForm}
            placeholder="Enter your email address"
          />
          <button className={styles.HomePageWishlistButton}>
            JOIN OUR WAITING LIST
          </button>
        </div>
      </form>
    </>
  );
};

export default HomePageForm;
