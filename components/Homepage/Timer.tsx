import React, { useState, useEffect } from "react";
import styles from "./Timer.module.css";

const Timer = () => {
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  useEffect(() => {
    startTimer();
  }, []);
  let interval: any;

  const startTimer = () => {
    const countDownDate = new Date("June 2,2022").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));

      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));

      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        ///stop timer

        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  return (
    <>
      <div className={styles.timerContainer}>
        <div className={styles.timerContainerBox}>
          <div className={styles.timerValue}>{timerDays}</div>
          <div className={styles.timerSet}>Days</div>
        </div>
        <div className={styles.timerContainerBox}>
          <div className={styles.timerValue}>{timerHours}</div>
          <div className={styles.timerSet}>hours</div>
        </div>
        <div className={styles.timerContainerBox}>
          <div className={styles.timerValue}>{timerMinutes}</div>
          <div className={styles.timerSet}>Minutes</div>
        </div>
        <div className={styles.timerContainerBox}>
          <div className={styles.timerValue}>{timerSeconds}</div>
          <div className={styles.timerSet}>Seconds</div>
        </div>
      </div>
    </>
  );
};

export default Timer;
