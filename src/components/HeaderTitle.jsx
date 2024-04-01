import React from "react";
import styles from "../styles/modules/title.module.scss";
import { LuListTodo } from "react-icons/lu";

function HeaderTitle(props) {
  return (
    <div className={styles.title__container}>
      <p className={styles.title}>{props.title}</p>
      <div className={styles.icon}>
        <LuListTodo />
      </div>
    </div>
  );
}

export default HeaderTitle;
