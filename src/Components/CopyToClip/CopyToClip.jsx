import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

import { useCopyToClipboard } from "react-use";
import Tooltip from "rc-tooltip";

import styled from "styled-components";
import "rc-tooltip/assets/bootstrap.css";

const STATUS_COPY = {
  COPY: "copy",
  COPIED: "copied",
};

const TITLE_BY_STATUS = {
  [STATUS_COPY.COPY]: "скопировать",
  [STATUS_COPY.COPIED]: "скопировано",
};

const CopyToClip = ({ value, children }) => {
  const [, copyToClipboard] = useCopyToClipboard();
  const [statusCopy, setStatusCopy] = useState(STATUS_COPY.COPY);

  const handleClickCopy = useCallback(() => {
    copyToClipboard(value);
    setStatusCopy(STATUS_COPY.COPIED);
  }, [copyToClipboard, value]);

  const handleMouseLeaveAwayCopy = useCallback(() => {
    setTimeout(() => {
      setStatusCopy(STATUS_COPY.COPY);
    }, 140);
  }, [setStatusCopy]);

  return (
    <Tooltip
      placement="right"
      trigger={["hover"]}
      overlay={<TooltipWrap>{TITLE_BY_STATUS[statusCopy]}</TooltipWrap>}
    >
      <Wrapper
        onClick={handleClickCopy}
        onMouseLeave={handleMouseLeaveAwayCopy}
      >
        {children}
      </Wrapper>
    </Tooltip>
  );
};

const Wrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;

  cursor: pointer;
`;

const TooltipWrap = styled.span`
  width: max-content;
`;

CopyToClip.prototype = {
  value: PropTypes.string.isRequired,
};

export default CopyToClip;
