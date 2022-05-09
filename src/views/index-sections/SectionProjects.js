import {React, useState, useCallback } from 'react';
import { Modal, ModalGateway } from 'react-images';
import {
  Container,
  Row,
  Col,
  Carousel,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane
} from "reactstrap";
import ProjectGallery from './ProjectGallery';
import 'assets/scss/custom.scss'


function SectionProjects(data) {
  

  const [currentProject, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const projects = data.projects;
  const webprojects = projects.filter((project) => project.category === 'web');
  const gamedevprojects = projects.filter((project) => project.category === 'gamedev');
  const gamejamprojects = projects.filter((project) => project.category === 'gamejam');
  const vrprojects = projects.filter((project) => project.category === 'vr');
  const otherprojects = projects.filter((project) => project.category === 'other');

  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const openLightbox = useCallback(
    (projectSrc) => {
      const index = projects.findIndex((project) => project === projectSrc)
      setCurrentImage(index)
      setViewerIsOpen(true)
    },
    [projects],
  )

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }
  return (
    <>
      <Container className="tim-container">        
        <div id="images">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h2 className="title">MY PROJECTS</h2> 
              </Col>
            </Row>
            <Row>
            <Col className="ml-auto mr-auto" md="12">
              <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                  <Nav id="tabs" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={activeTab === "1" ? "active pointer" : "pointer"}
                        onClick={() => {
                          toggle("1");
                        }}
                      >
                        Web
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === "2" ? "active pointer" : "pointer"}
                        onClick={() => {
                          toggle("2");
                        }}
                      >
                        Game Development
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === "3" ? "active pointer" : "pointer"}
                        onClick={() => {
                          toggle("3");
                        }}
                      >
                        Game Jams
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === "4" ? "active pointer" : "pointer"}
                        onClick={() => {
                          toggle("4");
                        }}
                      >
                        VR
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === "5" ? "active pointer" : "pointer"}
                        onClick={() => {
                          toggle("5");
                        }}
                      >
                        Other
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </div>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <ProjectGallery projects={webprojects} onClick={openLightbox} />
                </TabPane>
                <TabPane tabId="2">
                  <ProjectGallery projects={gamedevprojects} onClick={openLightbox} />
                </TabPane>
                <TabPane tabId="3">
                  <ProjectGallery projects={gamejamprojects} onClick={openLightbox} />
                </TabPane>
                <TabPane tabId="4">
                  <ProjectGallery projects={vrprojects} onClick={openLightbox} />
                </TabPane>
                <TabPane tabId="5">
                  <ProjectGallery projects={otherprojects} onClick={openLightbox} />
                </TabPane>
              </TabContent>
            </Col>
            
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentProject}
                    views={projects.map((project) => ({
                      srcset: '',
                      source: project,
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
}

export default SectionProjects;
