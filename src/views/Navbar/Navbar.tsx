import React from "react";
import clsx from "clsx";
import { useStaticQuery, graphql } from "gatsby";

import { Navbar, Container, Nav, Row } from "react-bootstrap";

import useWindowOnScroll from "hooks/useWindowOnScroll";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import Icon from "components/Icon";
import NavItem from "components/NavItem";
import Image from "components/Image";

import "./Navbar.scss";

const MyNavbar = () => {
  const {
    allMarkdownRemark: { nodes },
    markdownRemark = { frontmatter: {} },
  } = useStaticQuery(graphql`
    query NavBarQuery {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "//sections//" }
          frontmatter: { anchor: { ne: null } }
        }
        sort: { fields: fileAbsolutePath }
      ) {
        nodes {
          frontmatter {
            anchor
          }
        }
      }
      markdownRemark(fields: { fileName: { regex: "/navbar/i" } }) {
        frontmatter {
          brandStart
          brandHighlight
          brandImage
          menuText
        }
      }
    }
  `);

  const handleScrollToTop = useSmoothScrollTo(0);

  const [expanded, setExpanded] = React.useState(false);
  const toggleMenu = React.useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);
  const closeMenu = React.useCallback(() => {
    setExpanded(false);
  }, []);
  const handleBrandClick = React.useCallback(() => {
    closeMenu();
    handleScrollToTop();
  }, [closeMenu, handleScrollToTop]);

  const [shrink, setShrink] = React.useState(false);
  const handleWindowScroll = React.useCallback(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setShrink(scrollTop > 100);
  }, []);
  useWindowOnScroll(handleWindowScroll);

  const brand = markdownRemark.frontmatter.brandStart + markdownRemark.frontmatter.brandHighlight;

  return (
    <Navbar
      className={clsx("navbar-root", { "navbar-shrink": shrink })}
      expand="lg"
      fixed="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand className="cursor-pointer d-flex align-items-center" onClick={handleBrandClick}>
          <div className="navbar-logo">
            <Image
              fileName={markdownRemark.frontmatter.brandImage}
              alt={brand}
            />
          </div>
          <div className="navbar-title">
            {markdownRemark.frontmatter.brandStart + " "}
            <span className="font-weight-bold">{markdownRemark.frontmatter.brandHighlight}</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggleMenu} aria-label="Toggle navigation">
          {markdownRemark.frontmatter.menuText}
          <Icon iconName="BarsIcon" />
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="text-uppercase ml-auto">
            {nodes.map(({ frontmatter: { anchor } }) => (
              <NavItem key={anchor} to={anchor} onClick={closeMenu} />
            ))}
            <Navbar.Brand>

              <div className="navbar-sub pl-0 col d-lg-none">
                Bondi Junction
                <div className="font-weight-bold">
                  1300 886 009    0414 714 443
                  </div>
              </div>
              <div className="navbar-sub pl-0 mt-2 col d-lg-none">
                Hornsby & Pymble
                <div className="font-weight-bold">
                  02 9904 6599      0412 804 088
                  </div>
              </div>
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container>
        <Navbar.Brand>
          <div className="navbar-sub w-100 ml-1 d-none d-lg-block">
            Bondi Junction <span className="font-weight-bold mx-2">1300 886 009</span> OR <span className="font-weight-bold mx-2">0414 714 443</span>
            <span className="mx-4">|</span>Hornsby & Pymble <span className="font-weight-bold mx-2">02 9904 6599</span> OR <span className="font-weight-bold mx-2">0412 804 088</span>
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
