import React from "react";
import { Container, Row, Col } from "reactstrap";

function SectionWelcome() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">HI! WELCOME TO MY PAGE! 👋</h2> 
              <h2>
                <small>I am a student researcher and software engineering graduate from Montreal 
                  whose curiosity for code and enthusiasm for interactive media has led her to the XR world and game development. 
                  I love creating tools that augment our learning experiences and capture people's imagination.🤸🏽‍♀️</small>
              </h2>
            </Col>            
          </Row>          
        </Container>
      </div>
      <br/>
    </>
  );
}

export default SectionWelcome;
