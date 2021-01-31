import React from "react";

import Icon from "./Icon";

import "./CircleFAButton.scss";

interface Props {
  iconName: string;
}

const CircleFAButton: React.FC<Props> = ({ iconName, ...restProps }) => {
  return (
    <div className="circle-fa-button">
      <Icon iconName={iconName} inverse={true} size="4x" {...restProps} />
    </div>
  );
};


export default CircleFAButton;
