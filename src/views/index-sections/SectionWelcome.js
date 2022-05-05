import React from "react";
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

function SectionWelcome() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Hi! WELCOME TO MY PAGE!</h2> 
              <h3 className="title">Stay a while and exlore 😄</h3> 
              <h2>
                <small>I am a software engineering student form Montreal whose curiosity for code and enthusiasm
                   for interactive media has led her to the XR world and game development. 
                  I love creating tools that are the epidemy of convenience and experiences 
                  that capture people's imagination.🤸🏽‍♀️</small>
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
