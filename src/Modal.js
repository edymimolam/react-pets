import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

// class Modal extends Component {
//   el = document.createElement("div");

//   componentDidMount() {
//     modalRoot.appendChild(this.el);
//   }

//   componentWillUnmount() {
//     console.log(this.el);
//     modalRoot.removeChild(this.el);
//   }

//   render() {
//     return createPortal(this.props.children, this.el);
//   }
// }

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const el = elRef.current;
    modalRoot.appendChild(el);
    return () => modalRoot.removeChild(el);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
