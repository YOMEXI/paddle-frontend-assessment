import React from "react";
import Image from "next/image";
import styles from "./GithubCard.module.css";

const GithubCard = ({
  name,
  avatar,
  description,
  stars,
  issues,
  owner,
}: any) => {
  return (
    <div className={styles.GithubCardContainer}>
      <div className={styles.GithubCardBox1}>
        <Image src={owner.avatar_url} height={150} width={150} />
      </div>
      <div className={styles.GithubCardBox2}>
        <h2>{name}</h2>
        <p>{description}</p>
        <div>
          <button>Stars: {stars}k </button>
          <button>Issues: {issues}k</button>

          <span>Submitted by {owner.login} </span>
        </div>
      </div>
    </div>
  );
};

export default GithubCard;
