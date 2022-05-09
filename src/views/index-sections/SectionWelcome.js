import React from "react";
import { Container, Row, Col } from "reactstrap";

function SectionWelcome() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">HI! WELCOME TO MY PAGE!</h2> 
              <h3 className="title">Stay a while and exlore 😄</h3> 
              <h2>
                <small>I am a software engineering student from Montreal whose curiosity for code and enthusiasm
                   for interactive media has led her to the XR world and game development. 
                  I love creating tools that are the epidemy of convenience and experiences 
                  that capture people's imagination.🤸🏽‍♀️</small>
                  <br />
                  <small>P.S. There's still plenty to come to this site!</small>
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
