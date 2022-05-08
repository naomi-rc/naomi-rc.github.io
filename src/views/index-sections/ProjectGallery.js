import React from 'react'
import {
    Card,
    Container,
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselIndicators,
    CarouselCaption,
    CardBody, 
    CardImg,
    CardText,
    CardTitle
  } from "reactstrap";
import 'assets/scss/flexbin.scss'

function ProjectGallery(data) {
    const projects = data.projects;
    const onClick = data.onClick;
  return (
    <Row xs={1} md={3} className="g-4">
    {projects.map((project, idx) => (
        <Col key={idx}>
        <Card >
            <CardImg variant="top" src={project.imgSrc} style={{"height": "18vw","object-fit": "contain" }} />
            <CardBody>
            <CardTitle>{project.name}</CardTitle>
            <CardText>
                {project.description}
            </CardText>
            </CardBody>
        </Card>
        </Col>
    ))}
    </Row>
  )
}

export default ProjectGallery
