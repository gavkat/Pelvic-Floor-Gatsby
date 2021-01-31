import React from "react";

import Image from "components/Image";

interface Props {
  imageFileName: string;
  href?: string;
}

const Client: React.FC<Props> = ({ imageFileName, href = null }) => {
  const imgPart = (
    <Image className="img-fluid d-block mx-auto" fileName={imageFileName} alt={imageFileName} />
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {imgPart}
      </a>
    );
  }

  return imgPart;
};

export default Client;
