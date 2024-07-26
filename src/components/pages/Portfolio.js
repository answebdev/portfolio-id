import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import adjectives from '../../img/participial_adjectives_card.webp';
import customerSatisfaction from '../../img/improving_customer_satisfaction_card.webp';
import orientation from '../../img/new_employee_orientation_card.webp';
import netlify from '../../img/netlify_card.webp';
import canvas from '../../img/canvas_card.webp';
import adjStoryboard from '../../img/participial_adjectives_storyboard_card.webp';
import satisfactionStoryboard from '../../img/customer_satisfaction_storyboard.webp';
import orientationStoryboard from '../../img/new_employee_orientation_storyboard.webp';
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
                <h5 className={`${classes.PageSubtitle} ${'animated zoomIn'}`}>
                  eLearning &bull; Instructor-Led Training &bull; Storyboards
                </h5>
              </div>
            </Col>
          </Row>

          <br />

          <Row>
            <Col>
              <div className={`${classes.CardContainer} ${'d-flex flex-row'}`}>
                <Card className={classes.Card}>
                  <Card.Img
                    variant='top'
                    src={adjectives}
                    alt='Participial Adjectives'
                  />
                  <Card.Body className='d-flex flex-column'>
                    <Card.Title style={{ marginBottom: '20px' }}>
                      <strong>Participial Adjectives</strong>
                    </Card.Title>
                    <Card.Text>
                      {/* <p>
                        An interactive lesson created using Articulate Storyline
                        to improve students' understanding of participial
                        adjectives at an international language school.
                      </p> */}
                      <p>
                        <strong>Type:</strong> eLearning
                        <br style={{ marginBottom: '8px' }} />
                        <strong>Tools Used:</strong> Articulate Storyline,
                        Canva, Visual Studio Code, jsPDF
                      </p>
                    </Card.Text>
                    <Button
                      // className={classes.SeeMoreBtn}
                      className={`${classes.SeeMoreBtn} ${'mt-auto'}`}
                      variant='dark'
                      href='/portfolio/participial-adjectives'
                    >
                      See More
                    </Button>
                  </Card.Body>
                </Card>

                <Card className={classes.Card}>
                  <Card.Img
                    variant='top'
                    src={customerSatisfaction}
                    alt='Improving Customer Satisfaction'
                  />
                  <Card.Body className='d-flex flex-column'>
                    <Card.Title style={{ marginBottom: '20px' }}>
                      <strong>Improving Customer Satisfaction</strong>
                    </Card.Title>
                    <Card.Text>
                      {/* <p>
                        An interactive training module created using Articulate
                        Storyline for employees to learn about different ways to
                        improve customer satisfaction.
                      </p> */}
                      <p>
                        <strong>Type:</strong> eLearning
                        <br style={{ marginBottom: '8px' }} />
                        <strong>Tools Used:</strong> Articulate Storyline,
                        Freepik, MindMeister, GIMP, Canva
                      </p>
                    </Card.Text>
                    <Button
                      // className={classes.SeeMoreBtn}
                      className={`${classes.SeeMoreBtn} ${'mt-auto'}`}
                      variant='dark'
                      href='/portfolio/improving-customer-satisfaction'
                    >
                      See More
                    </Button>
                  </Card.Body>
                </Card>

                <Card className={classes.Card}>
                  <Card.Img
                    variant='top'
                    src={orientation}
                    alt='New Employee Orientation'
                  />
                  <Card.Body className='d-flex flex-column'>
                    <Card.Title style={{ marginBottom: '20px' }}>
                      <strong>New Employee Orientation</strong>
                    </Card.Title>
                    <Card.Text>
                      {/* <p>
                        An Articulate Rise course designed as an orientation
                        training module for new employees to learn about their
                        new company, its culture, and organizational structure.
                      </p> */}
                      <p>
                        <strong>Type:</strong> eLearning
                        <br style={{ marginBottom: '8px' }} />
                        <strong>Tools Used:</strong> Articulate Rise, Snagit,
                        Canva, Floor Plan Creator, Visual Studio Code
                      </p>
                    </Card.Text>
                    <Button
                      // className={classes.SeeMoreBtn}
                      className={`${classes.SeeMoreBtn} ${'mt-auto'}`}
                      variant='dark'
                      href='/portfolio/new-employee-orientation'
                    >
                      See More
                    </Button>
                  </Card.Body>
                </Card>

                <Card className={classes.Card}>
                  <Card.Img
                    variant='top'
                    src={netlify}
                    alt='Using Netlify To Host Your Web Application'
                  />
                  <Card.Body className='d-flex flex-column'>
                    <Card.Title style={{ marginBottom: '20px' }}>
                      <strong>
                        Using Netlify To Host Your Web Application
                      </strong>
                    </Card.Title>
                    <Card.Text>
                      {/* <p>
                        An eLearning video created using Camtasia to help
                        Netlify customers learn how to host their static web
                        applications on Netlify.
                      </p> */}
                      <p>
                        <strong>Type:</strong> eLearning
                        <br style={{ marginBottom: '8px' }} />
                        <strong>Tools Used:</strong> Camtasia, Snagit
                      </p>
                    </Card.Text>
                    <Button
                      className={`${classes.SeeMoreBtn} ${'mt-auto'}`}
                      // className={classes.SeeMoreBtn}
                      variant='dark'
                      href='/portfolio/using-netlify-to-host-your-web-application'
                    >
                      See More
                    </Button>
                  </Card.Body>
                </Card>

                <Card className={classes.Card}>
                  <Card.Img variant='top' src={canvas} alt='Canvas Modules' />
                  <Card.Body className='d-flex flex-column'>
                    <Card.Title style={{ marginBottom: '20px' }}>
                      <strong>Canvas Modules</strong>
                    </Card.Title>
                    <Card.Text>
                      {/* <p>
                        A learning module on how to complete different aspects
                        of Canvas developed for instructor learners who have
                        minimal experience with Canvas, as well as limited
                        technological knowledge.
                      </p> */}

                      <p>
                        <strong>Type:</strong> Instructor-Led Training
                        <br style={{ marginBottom: '8px' }} />
                        <strong>Tools Used:</strong> Canvas, Microsoft Word,
                        Snagit, Screencast-o-Matic (video overview)
                      </p>
                    </Card.Text>
                    <Button
                      className={`${classes.SeeMoreBtn} ${'mt-auto'}`}
                      // className={classes.SeeMoreBtn}
                      variant='dark'
                      href='/portfolio/canvas-modules'
                    >
                      See More
                    </Button>
                  </Card.Body>
                </Card>

                <Card className={classes.Card}>
                  <Card.Img
                    variant='top'
                    src={adjStoryboard}
                    alt='Participial Adjectives Storyboard'
                  />
                  <Card.Body className='d-flex flex-column'>
                    <Card.Title>
                      <strong>Participial Adjectives</strong>
                    </Card.Title>
                    <div style={{ marginBottom: '20px' }}>
                      <Card.Subtitle className='mb-2 text-muted'>
                        Storyboard
                      </Card.Subtitle>
                    </div>
                    <Card.Text>
                      {/* <p>
                        A learning module on how to complete different aspects
                        of Canvas developed for instructor learners who have
                        minimal experience with Canvas, as well as limited
                        technological knowledge.
                      </p> */}

                      <p>
                        <strong>Type:</strong> Storyboard
                        <br style={{ marginBottom: '8px' }} />
                        <strong>Tools Used:</strong> Microsoft Word
                      </p>
                    </Card.Text>
                    <Button
                      className={`${classes.SeeMoreBtn} ${'mt-auto'}`}
                      // className={classes.SeeMoreBtn}
                      variant='dark'
                      href='/portfolio/participial-adjectives-storyboard'
                    >
                      See More
                    </Button>
                  </Card.Body>
                </Card>

                <Card className={classes.Card}>
                  <Card.Img
                    variant='top'
                    src={satisfactionStoryboard}
                    alt='Improving Customer Satisfaction Storyboard'
                  />
                  <Card.Body className='d-flex flex-column'>
                    <Card.Title>
                      <strong>Improving Customer Satisfaction</strong>
                    </Card.Title>
                    <div style={{ marginBottom: '20px' }}>
                      <Card.Subtitle className='mb-2 text-muted'>
                        Storyboard
                      </Card.Subtitle>
                    </div>
                    <Card.Text>
                      {/* <p>
                        A learning module on how to complete different aspects
                        of Canvas developed for instructor learners who have
                        minimal experience with Canvas, as well as limited
                        technological knowledge.
                      </p> */}

                      <p>
                        <strong>Type:</strong> Storyboard
                        <br style={{ marginBottom: '8px' }} />
                        <strong>Tools Used:</strong> Microsoft Word
                      </p>
                    </Card.Text>
                    <Button
                      className={`${classes.SeeMoreBtn} ${'mt-auto'}`}
                      // className={classes.SeeMoreBtn}
                      variant='dark'
                      href='/portfolio/improving-customer-satisfaction-storyboard'
                    >
                      See More
                    </Button>
                  </Card.Body>
                </Card>

                <Card className={classes.Card}>
                  <Card.Img
                    variant='top'
                    src={orientationStoryboard}
                    alt='New Employee Orientation Storyboard'
                  />
                  <Card.Body className='d-flex flex-column'>
                    <Card.Title>
                      <strong>New Employee Orientation</strong>
                    </Card.Title>
                    <div style={{ marginBottom: '20px' }}>
                      <Card.Subtitle className='mb-2 text-muted'>
                        Storyboard
                      </Card.Subtitle>
                    </div>
                    <Card.Text>
                      {/* <p>
                        A learning module on how to complete different aspects
                        of Canvas developed for instructor learners who have
                        minimal experience with Canvas, as well as limited
                        technological knowledge.
                      </p> */}

                      <p>
                        <strong>Type:</strong> Storyboard
                        <br style={{ marginBottom: '8px' }} />
                        <strong>Tools Used:</strong> Microsoft Word
                      </p>
                    </Card.Text>
                    <Button
                      className={`${classes.SeeMoreBtn} ${'mt-auto'}`}
                      // className={classes.SeeMoreBtn}
                      variant='dark'
                      href='/portfolio/new-employee-orientation-storyboard'
                    >
                      See More
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>

          <br />
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
