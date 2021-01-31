import React from "react";

import Icon from "components/Icon";

import "./CircleIcon.scss";

interface Props {
  href?: string;
  iconName?: string;
}

const CircleIcon: React.FC<Props> = ({ href = "", iconName = null }) => (
  <a className="circle-icon" href={href} target="_blank" rel="noopener noreferrer">
    <Icon iconName={iconName} />
  </a>
);

export default CircleIcon;
