import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classes from "./contactUs.module.css";

const Notification = ({
  open = undefined,
  status = undefined,
  message = "",
  onClose = () => {},
}) => {
  const [show, setShow] = useState(open);
  useEffect(() => {
    setShow(open);
  }, [open]);
  const handleOnClose = () => {
    onClose({});
    setShow(false);
  };

  let notificationClass = ` ${classes["notification-wrapper"]}`;
  if (status === 200) {
    notificationClass += ` ${classes["success"]}`;
  } else {
    notificationClass += ` ${classes["danger"]}`;
  }

  if (show)
    return (
      <div className={notificationClass}>
        <div>{message}</div>
        <span onClick={handleOnClose}>&#10008;</span>
      </div>
    );
  return <></>;
};

Notification.propTypes = {
  open: PropTypes.bool,
  status: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  message: PropTypes.string,
  onClose: PropTypes.func,
};

export default Notification;
