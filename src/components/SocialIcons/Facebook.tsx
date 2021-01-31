import React from "react";

import CircleIcon from "../../components/CircleIcon";
import { SocialIconProps } from "./index";

const Facebook: React.FC<SocialIconProps> = ({ userName }) => (
  <CircleIcon href={`https://facebook.com/${userName}`} iconName="FacebookIcon" />
);

export default Facebook;
