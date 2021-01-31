import React from "react";

import CircleIcon from "../../components/CircleIcon";
import { SocialIconProps } from "./index";

const Linkedin: React.FC<SocialIconProps> = ({ userName }) => (
  <CircleIcon href={`https://linkedin.com/in/${userName}`} iconName="LinkedinIcon" />
);

export default Linkedin;
