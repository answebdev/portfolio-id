import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import mockup from '../../img/PartAdjProject.webp';
import netlify from '../../img/netlify.webp';
import canvas from '../../img/canvas.webp';
import classes from '../../styles/Projects.module.css';

// Canvas logo image source: https://www.pinclipart.com/pindetail/ibJJhox_canvas-logo-transparent-background-clipart/

const Projects = () => {
  return (
    <div>
      <Helmet>
        <title>Adolf Schmuck | Projects</title>
      </Helmet>
      <Container className={classes.Container}>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={12}>
              <div>
                <h1 className={classes.PageTitle}>Featured Work</h1>
              </div>
            </Col>
          </Row>

          <br />

          <Row>
            <Col md={6}>
              <div className={classes.ImgDiv}>
                <Image src={mockup} fluid alt='Mockup' />
              </div>
            </Col>

            <Col md={6}>
              <h3 className={classes.ProjectName}>Participial Adjectives</h3>
              <p className={classes.P}>
                An interactive lesson created using Articulate Storyline to
                improve students' understanding of participial adjectives at an
                international language school.
              </p>
              <p>
                <strong>Tools used: </strong>Articulate Storyline, Canva, SCORM
                Cloud (Testing)
              </p>
              <br />
              <Button
                className={classes.SeeMoreBtn}
                variant='primary'
                href='/projects/participial-adjectives'
                style={{ marginRight: '5px', boxShadow: 'none' }}
              >
                See More
              </Button>
            </Col>
          </Row>

          <br />

          <br />
          <hr />
          <br />
          <br />

          <Row>
            <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
              <h3 className={classes.ProjectName}>
                Canvas Modules (Instructor-led Training)
              </h3>
              <p className={classes.P}>
                A learning module on how to complete different aspects of Canvas
                developed for instructor learners who have minimal experience
                with Canvas, as well as limited technological knowledge.
              </p>
              <p>
                <strong>Tools used: </strong>Canvas, Microsoft Word, Snagit,
                Canva
              </p>
              <br />
              <Button
                className={classes.SeeMoreBtn}
                variant='primary'
                href='/projects/canvas-modules'
                style={{ marginRight: '5px', boxShadow: 'none' }}
              >
                See More
              </Button>
            </Col>

            <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
              <div className={classes.ImgDiv}>
                <Image src={canvas} fluid alt='Canvas Logo' />
              </div>
            </Col>
          </Row>

          <br />
          <br />
          <hr />
          <br />
          <br />

          <Row>
            <Col md={6}>
              <div className={classes.ImgDiv}>
                <Image
                  src={netlify}
                  fluid
                  alt='Using Netlify To Host Your Web Application'
                />
              </div>
            </Col>

            <Col md={6}>
              <h3 className={classes.ProjectName}>
                Using Netlify To Host Your Web Application
              </h3>
              <p className={classes.P}>
                An eLearning video created using Camtasia to help Netlify
                customers learn how to host their static web applications on
                Netlify.
              </p>
              <p>
                <strong>Tools used: </strong>Camtasia, Snagit
              </p>
              <br />
              <Button
                className={classes.SeeMoreBtn}
                variant='primary'
                href='/projects/using-netlify-to-host-your-web-application'
                style={{ marginRight: '5px', boxShadow: 'none' }}
              >
                See More
              </Button>
            </Col>
          </Row>

          <br />
        </div>
      </Container>
    </div>
  );
};

export default Projects;
