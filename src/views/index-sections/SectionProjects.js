import {React, useState, useCallback } from 'react';
import { Modal, ModalGateway } from 'react-images';
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import ProjectGallery from './ProjectGallery';


function SectionProjects(data) {
  const [currentProject, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)
  const projects = data.projects;
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
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">MY PROJECTS</h2> 
              </Col>
            </Row>
            <Row>
            <ProjectGallery projects={projects.web} onClick={openLightbox} />
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
