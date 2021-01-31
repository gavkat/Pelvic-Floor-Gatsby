import React from "react";

import CircleIcon from "../../components/CircleIcon";
import { SocialIconProps } from "./index";

const Twitter: React.FC<SocialIconProps> = ({ userName }) => (
  <CircleIcon href={`https://twitter.com/${userName}`} iconName="TwitterIcon" />
);

export default Twitter;
