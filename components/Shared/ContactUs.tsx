import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import styles from "./ContactUs.module.css";

const contactUs = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <>
      <div className={styles.contactUsContainer}>
        <div className={styles.contactUsBox1}></div>
        <div className={styles.contactUsBoxArrow}>
          <p>
            <a href="/contactUs">
              <AiOutlineArrowRight />
            </a>
          </p>
        </div>
        <div className={styles.contactUsBox2}>
          <h2>
            Hey, we are still in the works, but you can send us a message!
          </h2>
          <form action="">
            <div>
              <label htmlFor="">First name</label>
              <input type="text" placeholder="Enter your first name" />
            </div>
            <div>
              <label htmlFor="">Last name</label>
              <input type="text" placeholder="Enter your last name" />
            </div>
            <div>
              <label htmlFor="">Email address</label>
              <input type="text" placeholder="Enter your email address" />
            </div>
            <p>Tell us what you need help with:</p>
            <textarea
              name=""
              id=""
              cols={50}
              rows={10}
              placeholder='Enter a topic, like " channel problem... "'
              style={{ padding: "1rem" }}
            ></textarea>
          </form>
        </div>
      </div>
    </>
  );
};

export default contactUs;
