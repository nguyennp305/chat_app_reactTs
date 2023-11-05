import Dropdown from "react-bootstrap/Dropdown";
import "./test.scss";
import { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";

export const Test = () => {
  const [show, setShow] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const initialTransformRef = useRef<string | null>(null); // Lưu giá trị transform ban đầu

  const handleClose = () => {
    setShow(false);
    if (menuRef.current && initialTransformRef.current) {
      menuRef.current.style.transform = initialTransformRef.current; // Gán lại giá trị transform khi tắt popup
      console.log('menuRef.current.style.transform', menuRef.current.style.transform)

    }
  };

  const handleShow = () => {
    setShow(true);
    if (menuRef.current) {
      initialTransformRef.current = menuRef.current.style.transform; // Lưu giá trị transform ban đầu
      console.log('menuRef.current.style.transform', menuRef.current.style.transform)
    }
  };

  const overlayRef = useRef(null);

  // const handleOverlayClick = (e:any) => {
  //   if (e.target === overlayRef.current) {
  //     handleClose();
  //   }
  // };

  const handlePopupClick = (e:any) => {
    e.stopPropagation();
  };



  return (
    <div className="test">
      <div className="dropdown-test">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu ref={menuRef}>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>


      </div>
      <div className="form-right">
        <Button variant="primary" onClick={handleShow}>
          Show Popup
        </Button>

        {show && (
          <div
            className="popup-overlay"
            ref={overlayRef}
          >
            <div className="popup-content" onClick={handlePopupClick}>
              <h3>Popup Content</h3>
              <p>This is the content of the popup.</p>
              <Button variant="primary" onClick={handleClose}>
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};