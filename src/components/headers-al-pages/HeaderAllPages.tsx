import styles from "./HeaderAllPages.module.scss";
import LogoUet from "../../__assets__/VNU-UET-logo.jpg";
import { useRef } from "react";
import { BsMessenger } from 'react-icons/bs'

export const HeaderAllPages = () => {
  // nếu là màn mobile <= 500 thì mất dòng trợ lý ảo
  const windowWidth = useRef(window.innerWidth);
  //  console.log('width: ', windowWidth.current);
  return (
    <div className={styles["header-pages"]}>
      <div className={styles["flex-header-row"]}>
        <div className={styles["flex-header-items-left"]}>
          <img
            className={styles["image-logo-header"]}
            src={LogoUet}
            alt="log_uet"
          />
          <div className={styles["items-left-content"]}>
            {windowWidth.current > 500 && (
              <span className={styles["text-mobile"]}>TRỢ LÝ ẢO</span>
            )}
            <span className={styles["text-mobile-hide"]}>
              DÀNH CHO CÁN BỘ, SINH VIÊN UET  
            </span>
          </div>
        </div>
        <div className={styles["flex-header-items-right"]}>
            <button className={styles["message-icon"]}><BsMessenger className={styles["image-logo-message"]} /></button>
            <button className={styles["message-icon"]}><BsMessenger className={styles["image-logo-message"]} /></button>
        </div>
      </div>
    </div>
  );
};
