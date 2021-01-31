import React from "react";

import CircleIcon from "../../components/CircleIcon";
import { SocialIconProps } from "./index";

const Github: React.FC<SocialIconProps> = ({ userName }) => (
  <CircleIcon href={`https://github.com/${userName}`} iconName="GithubIcon" />
);

export default Github;
