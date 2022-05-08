import React from "react";
import { Row, Container } from "reactstrap";

function PortfolioFooter() {
  return (
    <footer className="footer section-dark footer-black footer-white">
      <Container>
        <Row>          
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by N. Catwell
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default PortfolioFooter;
