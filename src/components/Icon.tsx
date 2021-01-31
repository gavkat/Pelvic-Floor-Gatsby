import React from "react";

import * as AllIcons from "../components/SystemIcons";


interface IconProps {
  inverse?: boolean;
  size: string;
}

interface Props extends IconProps {
  iconName: string;
}

const Icon: React.FC<Props> = ({ iconName, ...restProps }) => {
  // tslint:disable-next-line: no-any
  const IconComponent = (AllIcons as any)[iconName] as React.FC<IconProps>;

  if (IconComponent == null) {
    throw new Error(`icon [${iconName}] is not defined in config/Icons.jsx`);
  }

  return <IconComponent {...restProps} />;
};

export default Icon;
