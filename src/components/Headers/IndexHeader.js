import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import Typical from 'react-typical';

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundColor:"#19a5aa"
        }}
      >
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  "DEVELOPER",
                  1200,
                  "VR ENTHUSIAST",
                  1200,
                  "LANGUAGE LEARNER",
                  1200,
                ]}
                />
              </h1>
            </div>
            <h2 className="presentation-subtitle text-center">              
              
        
            </h2>
          </Container>
        </div>        
        <h6 className="category category-absolute">          
            <img
              alt="..."
              className="creative-tim-logo"
              src={require("assets/img/mouse-arrow-down.gif").default}
            />
        </h6>
      </div>
    </>
  );
}

export default IndexHeader;
