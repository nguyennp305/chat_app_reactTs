import styles from "./HeaderAllPages.module.scss";
import LogoUet from "../../__assets__/VNU-UET-logo.jpg";
import { useRef } from "react";
import { BsMessenger } from 'react-icons/bs'
import { useNavigate } from "react-router-dom";

export const HeaderAllPages = () => {
  // nếu là màn mobile <= 500 thì mất dòng trợ lý ảo
  const windowWidth = useRef(window.innerWidth);
  const navigate = useNavigate()
  const changeRoute = () => {
      navigate('/messages/conversations')
  }
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
            <button onClick={changeRoute} className={styles["message-icon"]}><BsMessenger className={styles["image-logo-message"]} /></button>
            <button onClick={changeRoute} className={styles["message-icon"]}><BsMessenger className={styles["image-logo-message"]} /></button>
        </div>
      </div>
    </div>
  );
};
