import React from 'react'
import {
    Card,
    Row,
    Col,
    CardBody, 
    CardImg,
    CardText,
    CardTitle
  } from "reactstrap";
import 'assets/scss/flexbin.scss'

function ProjectGallery(data) {
    const projects = data.projects;
    //const onClick = data.onClick;
  return (
    <Row xs={1} md={3} className="">
    {projects.map((project, idx) => (
        <Col key={idx}>
        <Card >
            <CardImg variant="top" src={project.imgSrc} style={{"height": "18vw","objectFit": "contain" }} />
            <CardBody>
            <h5><CardTitle className="text-center title">{project.name}</CardTitle></h5>
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
