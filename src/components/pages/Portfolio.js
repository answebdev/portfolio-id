import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import mockup from '../../img/PartAdjProject.webp';
import customerMockup from '../../img/customer-mockup.webp';
import orientation from '../../img/new-employee-orientation.webp';
import netlify from '../../img/netlify.webp';
import canvas from '../../img/canvas.webp';
import classes from '../../styles/Portfolio.module.css';

// Canvas logo image source: https://www.pinclipart.com/pindetail/ibJJhox_canvas-logo-transparent-background-clipart/

const Portfolio = () => {
  return (
    <div>
      <Helmet>
        <title>Adolf Schmuck | Portfolio</title>
      </Helmet>
      <Container className={classes.Container}>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={12}>
              <div>
                <h1 className={classes.PageTitle}>Portfolio</h1>
                <h5 style={{ fontWeight: '400' }} class='animated zoomIn'>
                  eLearning &bull; Instructor-Led Training
                </h5>
              </div>
            </Col>
          </Row>

          <br />

          <Row>
            <Col md={6}>
              <div className={classes.ImgDiv}>
                <Image src={mockup} fluid alt='Participial Adjectives' />
              </div>
            </Col>

            <Col md={6}>
              <h3 className={classes.ProjectName}>Participial Adjectives</h3>
              <p>
                An interactive lesson created using Articulate Storyline to
                improve students' understanding of participial adjectives at an
                international language school.
              </p>
              <p>
                <strong>Type: </strong>eLearning
              </p>
              <p>
                <strong>Tools used: </strong>Articulate Storyline, Canva, jsPDF
              </p>
              <br />
              <Button
                className={classes.SeeMoreBtn}
                variant='primary'
                href='/portfolio/participial-adjectives'
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
              {/* <h3 className={classes.ProjectName}>
                Improving Customer Satisfaction (in progress)
              </h3> */}
              {/* <p>
                An interactive Articulate Storyline module that provides
                training for employees to learn about different ways to improve
                customer satisfaction.
              </p> */}

              {/* Use this text when project is ready: */}
              <h3 className={classes.ProjectName}>
                Improving Customer Satisfaction
              </h3>
              <p>
                An interactive training module created using Articulate
                Storyline for employees to learn about different ways to improve
                customer satisfaction.
              </p>
              <p>
                <strong>Type: </strong>eLearning
              </p>
              <p>
                <strong>Tools used: </strong>Articulate Storyline, Freepik,
                GIMP, Canva
              </p>

              {/* <p>
                <em>Coming Soon!</em>
              </p> */}
              <br />
              <Button
                className={classes.SeeMoreBtn}
                variant='primary'
                href='/portfolio/improving-customer-satisfaction'
                style={{ marginRight: '5px', boxShadow: 'none' }}
              >
                See More
              </Button>
            </Col>

            <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
              <div className={classes.ImgDiv}>
                <Image
                  src={customerMockup}
                  fluid
                  alt='Improving Customer Satisfaction'
                />
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
                <Image src={orientation} fluid alt='New Employee Orientation' />
              </div>
            </Col>

            <Col md={6}>
              <h3 className={classes.ProjectName}>New Employee Orientation</h3>
              <p>
                An Articulate Rise course designed as an orientation training
                module for new employees to learn about their new company, its
                culture, and organizational structure.
              </p>
              <p>
                <strong>Type: </strong>eLearning
              </p>
              <p>
                <strong>Tools used: </strong>Articulate Rise, Snagit, Canva,
                Floor Plan Creator
              </p>
              <br />
              <Button
                className={classes.SeeMoreBtn}
                variant='primary'
                href='/portfolio/new-employee-orientation'
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
                Using Netlify To Host Your Web Application
              </h3>
              <p>
                An eLearning video created using Camtasia to help Netlify
                customers learn how to host their static web applications on
                Netlify.
              </p>
              <p>
                <strong>Type: </strong>eLearning
              </p>
              <p>
                <strong>Tools used: </strong>Camtasia, Snagit
              </p>
              <br />
              <Button
                className={classes.SeeMoreBtn}
                variant='primary'
                href='/portfolio/using-netlify-to-host-your-web-application'
                style={{ marginRight: '5px', boxShadow: 'none' }}
              >
                See More
              </Button>
            </Col>

            <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
              <div className={classes.ImgDiv}>
                <Image
                  src={netlify}
                  fluid
                  alt='Using Netlify To Host Your Web Application'
                />
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
                <Image src={canvas} fluid alt='Canvas Modules' />
              </div>
            </Col>

            <Col md={6}>
              <h3 className={classes.ProjectName}>Canvas Modules</h3>
              <p>
                A learning module on how to complete different aspects of Canvas
                developed for instructor learners who have minimal experience
                with Canvas, as well as limited technological knowledge.
              </p>
              <p>
                <strong>Type: </strong>Instructor-Led Training
              </p>
              <p>
                <strong>Tools used: </strong>Canvas, Microsoft Word, Snagit,
                Canva
              </p>
              <br />
              <Button
                className={classes.SeeMoreBtn}
                variant='primary'
                href='/portfolio/canvas-modules'
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

export default Portfolio;
