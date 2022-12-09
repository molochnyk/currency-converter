import React from 'react';
import styled from 'styled-components';

import Popup from 'reactjs-popup';

const PopupDefault = ({ children, triggerNameText }) => {
  return (
    <StyledPopup
      trigger={<StyledPopupTrigger>{triggerNameText}</StyledPopupTrigger>}
      position="center center"
      modal
      closeOnDocumentClick>
      {children}
    </StyledPopup>
  );
};

const StyledPopupTrigger = styled('button')`
  position: relative;
  min-height: 30px;

  margin: 0 0 20px 0;
  padding: 0 10px;

  border: none;

  border-radius: 5px;

  font-size: 14px;

  background: #2f98fa;
  color: #fff;

  cursor: pointer;

  transition: all 250ms ease-in;

  &:hover {
    background: #2f98faa9;
  }
`;

const StyledPopup = styled(Popup)`
  &-overlay {
    background: #2f98faa9;
  }

  &-content {
    position: relative;
    width: 100%;

    overflow-x: auto;

    max-width: 500px;
    max-height: 90vh;

    padding: 30px 40px;

    border-radius: 5px;

    background: #fff;
  }
`;

export default PopupDefault;
