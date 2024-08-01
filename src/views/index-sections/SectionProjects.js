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
import ProjectNavItem from './SectionProjectsNavItem';
import 'assets/css/custom.css'


function SectionProjects(data) {
  

  const [currentProject, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const projects = data.projects;
  
  const xrprojects = projects.filter((project) => project.category === 'xr');
  const gamedevprojects = projects.filter((project) => project.category === 'gamedev');
  const hapticsprojects = projects.filter((project) => project.category === 'haptics');
  const webprojects = projects.filter((project) => project.category === 'web');
  const miscprojects = projects.filter((project) => project.category === 'misc');

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
                <h2 className="title">PROJECTS</h2> 
              </Col>
            </Row>
            <Row>
            <Col className="ml-auto mr-auto" md="12">
              <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                  <Nav id="tabs" role="tablist" tabs>
                    <ProjectNavItem index="1" category="AR/VR" activeTab={activeTab} toggle={toggle}/>
                    <ProjectNavItem index="2" category="Game Development" activeTab={activeTab} toggle={toggle}/>
                    <ProjectNavItem index="3" category="Haptics" activeTab={activeTab} toggle={toggle}/>
                    <ProjectNavItem index="4" category="Web" activeTab={activeTab} toggle={toggle}/>
                    <ProjectNavItem index="5" category="Miscellanous" activeTab={activeTab} toggle={toggle}/>
                  </Nav>
                </div>
              </div>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <ProjectGallery projects={xrprojects} onClick={openLightbox} />
                </TabPane>
                <TabPane tabId="2">
                  <ProjectGallery projects={gamedevprojects} onClick={openLightbox} />
                </TabPane>
                <TabPane tabId="3">
                  <ProjectGallery projects={hapticsprojects} onClick={openLightbox} />
                </TabPane>
                <TabPane tabId="4">
                  <ProjectGallery projects={webprojects} onClick={openLightbox} />
                </TabPane>
                <TabPane tabId="5">
                  <ProjectGallery projects={miscprojects} onClick={openLightbox} />
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
