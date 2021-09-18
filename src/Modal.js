import React, { useEffect, useRef } from "react";
import reactDom from "react-dom";

const Modal = ({ onClose }) => {
  const modalRef = useRef();
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [onClose]);
  return reactDom.createPortal(
    <div className="modal">
      <div className="modal-content" ref={modalRef}>
        <div className="modal-title">Header</div>
        <div className="modal-body">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
          eius ullam cupiditate! Nostrum fugiat voluptas numquam velit possimus?
          Dolore ipsum consequatur eligendi libero, quam architecto voluptatibus
          eius eum animi pariatur.
        </div>
        <div className="modal-footer">
          <button onClick={onClose}> Close Modal</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
