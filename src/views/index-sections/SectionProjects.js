import React from "react";
import { Container, Row, Col } from "reactstrap";

function SectionProjects() {
  return (
    <>
      <Container className="tim-container">        
        <div id="images">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">MY PROJECTS</h2> 
              </Col>
            </Row>
            <Row>
              <Col md="3" sm="6">
                <h4 className="images-title">Rounded Image</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/uriel-soberanes.jpg").default}
                />
                <div className="img-details">
                  <div className="author">
                    <img
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={
                        require("assets/img/faces/joe-gardner-2.jpg").default
                      }
                    />
                  </div>
                  <p>Sonia Green</p>
                </div>
              </Col>
              <Col className="mr-auto ml-auto" md="2" sm="3">
                <h4 className="images-title">Circle Image</h4>
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/faces/kaci-baum-2.jpg").default}
                />
                <p className="text-center">Brigitte Bardot</p>
              </Col>
              <Col className="mr-auto" md="2" sm="3">
                <h4 className="images-title">Thumbnail</h4>
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/faces/erik-lucatero-2.jpg").default}
                />
                <p className="text-center">John Keynes</p>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
}

export default SectionProjects;
