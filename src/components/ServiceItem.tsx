import React from "react";
import PropTypes from "prop-types";

import CircleFAButton from "components/CircleFAButton";
import "./ServiceItem.scss";
import PortfolioDetailDialog from "./PortfolioDetailDialog";
import { Button } from "react-bootstrap";

const ServiceItem = ({ iconName, header, content, contentDetailed }) => {
  const [showDetail, setShowDetail] = React.useState(false);

  const openDialog = () => {
    setShowDetail(true);
  }

  const handleCloseDialog = () => {
    setShowDetail(false);
  }
  return (
    <>
      <CircleFAButton iconName={iconName} />
      <h4 className="service-item-heading">{header}</h4>
      <p className="text-muted">{content}</p>
      <Button variant="secondary mb-5" onClick={openDialog}>Find out more</Button>
      <PortfolioDetailDialog
        show={showDetail}
        onHide={handleCloseDialog}
        header={header}
        content={contentDetailed}
      />
    </>
  );
};

ServiceItem.propTypes = {
  iconName: PropTypes.string.isRequired,
  header: PropTypes.string,
  content: PropTypes.string,
};

ServiceItem.defaultProps = {
  header: "",
  content: "",
};

export default ServiceItem;
