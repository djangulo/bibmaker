import React, { useState } from 'react';
import { Popup } from 'semantic-ui-react';

const usePopup = ({
  message,
  timeout = 2000,
  on = 'hover',
  position = 'top center'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  let timeoutCounter;

  const handleOpen = () => {
    setIsOpen(true);
    timeoutCounter = setTimeout(() => {
      setIsOpen(false);
    }, timeout);
  };
  const handleClose = () => {
    setIsOpen(false);
    clearTimeout(timeoutCounter);
  };

  const render = trigger => (
    <Popup
      open={isOpen}
      on={on}
      trigger={trigger}
      content={message}
      onClose={handleClose}
      onOpen={handleOpen}
      position={position}
    />
  );

  return {
    render,
    handleOpen,
    handleClose
  };
};

export default usePopup;
