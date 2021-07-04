import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import mockup from '../../img/mockuper2.png';
import canvas from '../../img/canvas.png';
import classes from '../../styles/Projects.module.css';

// Canvas logo image: https://www.pinclipart.com/pindetail/ibJJhox_canvas-logo-transparent-background-clipart/

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
                {/* <h1>Projects</h1> */}
                <h1 className={classes.PageTitle}>Featured Work</h1>
              </div>
            </Col>
          </Row>

          <br />
          {/* <br /> */}

          <Row>
            <Col md={6}>
              <div className={classes.ImgDiv}>
                {/* Photo by <a href="https://unsplash.com/@jessbaileydesigns?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jess Bailey</a> on <a href="https://unsplash.com/s/photos/classroom?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
                {/* Source: https://unsplash.com/photos/l3N9Q27zULw */}

                {/* Mockup: https://mockuper.net/generator/mockup/43/apple-cinema-display */}

                <Image
                  // src='https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
                  src={mockup}
                  fluid
                  alt='Mockup'
                />
              </div>
            </Col>

            <Col md={6}>
              <h3 className={classes.ProjectName}>Participial Adjectives</h3>
              <p className={classes.P}>
                An interactive lesson created using Articulate Storyline to
                improve students' understanding of participial adjectives at an
                international language school.
              </p>
              {/* <p className={classes.P}>
                A learning app that harnesses the power of data-driven design
                for improving learner performance and enhancing learning
                offerings at an international language school.
              </p> */}
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

          {/* <Row>
            <Col md={12}>
              <div>
                <h2 className={classes.ProjectName}>How to Play Guitar</h2>
              </div>
            </Col>
          </Row>

          <br /> */}

          <Row>
            <Col md={6}>
              <div className={classes.ImgDiv}>
                <Image src={canvas} fluid alt='Mockup' />
              </div>
            </Col>

            <Col md={6}>
              <h3 className={classes.ProjectName}>
                Canvas Beginners (Instructor-led Training)
              </h3>
              <p className={classes.P}>
                A learning module on how to complete different aspects of Canvas
                developed for instructor learners who have minimal experience
                using Canvas, as well as limited technological knowledge.
              </p>
              <p>
                <strong>Tools used: </strong>Canvas, Microsoft Word, Snagit,
                Canva
              </p>
              <br />
              <Button
                className={classes.SeeMoreBtn}
                variant='primary'
                href='/projects/canvas-beginners'
                style={{ marginRight: '5px', boxShadow: 'none' }}
              >
                See More
              </Button>
            </Col>

            {/* <Col md={6}>
              <div className={classes.ImgDiv}>
                <Image src={canvas} fluid alt='Mockup' />
              </div>
            </Col> */}
          </Row>

          <br />
          <br />
          <hr />
          <br />
          <br />

          <Row>
            <Col md={12}>
              <div>
                <h2 className={classes.ProjectName}>
                  Deploying a Website with Netlify
                </h2>
              </div>
            </Col>
          </Row>

          <br />

          <Row>
            <Col md={6}>
              <div className={classes.ImgDiv}>
                {/* <Image
                  src='https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                  fluid
                /> */}

                <p className='imglist'>
                  <a
                    href='https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                    data-fancybox='images'
                    data-caption='Deploying a Website with Netlify'
                  >
                    <Image
                      style={{ maxWidth: '100%' }}
                      src='https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                      alt=''
                      title='Deploying a Website with Netlify'
                      fluid
                    />
                  </a>
                </p>
              </div>
            </Col>

            {/* <Col md={1}></Col> */}

            <Col md={6}>
              <h3>About This Project</h3>
              <p className={classes.P}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </Col>
          </Row>

          <br />

          <Row>
            <Col md={4}>
              <h3>Details</h3>
              <div className={classes.Info}>
                <p>
                  <strong>
                    <i class='fas fa-desktop'></i> Type:{' '}
                  </strong>
                  Custom eLearning Development
                </p>
                <p>
                  <strong>
                    <i class='far fa-calendar-alt'></i> Date:{' '}
                  </strong>
                  August 2021
                </p>
              </div>
            </Col>
            <Col md={4}>
              <h3>Tools</h3>
              <div className={classes.Info}>
                <p>
                  <i class='far fa-check-square'></i> Articulate Storyline
                </p>
                <p>
                  <i class='far fa-check-square'></i> Adobe Illustrator
                </p>
              </div>
            </Col>
            <Col md={4}>
              <h3>Skills</h3>
              <div className={classes.Info}>
                <p>
                  <i class='far fa-check-square'></i> Instructional Design
                </p>
                <p>
                  <i class='far fa-check-square'></i> eLearning Development
                </p>
              </div>
            </Col>
          </Row>

          <br />
        </div>
      </Container>
    </div>
  );
};

export default Projects;
