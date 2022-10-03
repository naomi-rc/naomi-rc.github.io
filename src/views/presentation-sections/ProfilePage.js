/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import PresentationNavbar from "components/Navbars/PresentationNavbar.js";
import PresentationHeader from "components/Headers/PresentationHeader.js";
import PortfolioFooterLight from "components/Footers/PortfolioFooterLight.js";

function ProfilePage(props) {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <PresentationNavbar />
      <PresentationHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
              <img
                style={{
                  padding: "15px",
                  maxWidth: "230px",
                  margin: "-85px auto 0",
                  display: "inline-block"

                }}
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/profile/profile_picture.jpg").default}
              />
            <div className="name">
              <h2 className="title">
                Naomi Catwell 
              </h2>              
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center project-title" md="10">
                <h3 className="presentation-blurb">
                {props.locale.presentation_title}
                </h3>
                <br/>
                <h5 className="presentation-blurb">
                  {props.locale.presentation_blurb}
                </h5>
                <br/>
                <h5 className="presentation-blurb">{props.locale.presentation_call_to_action}</h5>
              
              <br/>
              <img
                style={{
                  maxWidth:"300px",
                  width: "300px"
                }}
                alt="..."
                className="owner avatar img-no-padding img-responsive"
                src={require("assets/img/profile/linkedinQR.png").default}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <PortfolioFooterLight />
    </>
  );
}

export default ProfilePage;
