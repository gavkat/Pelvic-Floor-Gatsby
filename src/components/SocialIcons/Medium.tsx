import React from "react";

import CircleIcon from "../../components/CircleIcon";
import { SocialIconProps } from "./index";

const Medium: React.FC<SocialIconProps> = ({ userName }) => (
  <CircleIcon href={`https://medium.com/@${userName}`} iconName="MediumIcon" />
);

export default Medium;
