"use client";

import { useEffect, useState } from "react";
import classNames from "classnames";
import { Logo } from "../logo";
import {
  FavsRecipesHeader,
  Nav,
  Socials,
  OvenIcon,
  OvenBakedIcon,
} from "@/components";
import styles from "./index.module.scss";

export const HeaderMobile = () => {
  const [isMenuOnShow, setIsMenuOnShow] = useState(false);

  const handleClickMenu = () => {
    setIsMenuOnShow(!isMenuOnShow);
  };

  useEffect(() => {
    const body = document.body;

    if (isMenuOnShow) {
      body.style.height = "100vh";
      body.style.overflowY = "hidden";
      body.style.position = "fixed";
    } else {
      body.style.height = "100vh";
      body.style.overflowY = "visible";
      body.style.position = "static";
    }
  }, [isMenuOnShow]);

  return (
    <div className={styles.headerMobile}>
      <div className={styles.headerMobile__header}>
        <Logo setIsMenuOnShow={setIsMenuOnShow} />
        <div className={styles.headerMobile__buttons}>
          <FavsRecipesHeader />
          <button
            type="button"
            className={styles.headerMobile__menuBtn}
            onClick={handleClickMenu}
          >
            {isMenuOnShow ? (
              <OvenBakedIcon className={styles.headerMobile__menuBtn__icon} />
            ) : (
              <OvenIcon className={styles.headerMobile__menuBtn__icon} />
            )}
          </button>
        </div>
      </div>
      <div
        className={classNames(styles.headerMobile__menu, {
          [styles.headerMobile__menu_onShow]: isMenuOnShow,
        })}
      >
        <Nav isMobMenu setIsMenuOnShow={setIsMenuOnShow} />
        <Socials isMobMenu />
      </div>
    </div>
  );
};
