import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import '../../styles/Projects.css';

const Projects = () => {
  return (
    <div>
      <Helmet>
        <title>Adolf Schmuck | Projects</title>
        <style type='text/css'>{`
        body {
          background-color: #ffffff;
        }
    `}</style>
      </Helmet>
      <Container>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={12}>
              <div>
                <h1>Projects</h1>
                <p>
                  Each work sample includes a project description, associated
                  design documents, storyboard files, and/or narration scripts.
                </p>
              </div>
            </Col>
          </Row>

          <br />

          <Row>
            <Col md={12}>
              <div>
                <h2>Dealing with Laziness</h2>
              </div>
            </Col>
          </Row>

          <br />

          <Row>
            <Col md={5}>
              <Image
                src='https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                fluid
              />
            </Col>

            <Col md={1}></Col>

            <Col md={6}>
              <h3>About This Project</h3>
              <p>
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
              <p>
                <strong>
                  <i class='fas fa-desktop'></i> Type:{' '}
                </strong>
                Custom eLearning Development
              </p>
              <p>
                <strong>
                  <i class='fas fa-user'></i> Client:{' '}
                </strong>
                Grossmont Client
              </p>
              <p>
                <strong>
                  <i class='far fa-calendar-alt'></i> Date:{' '}
                </strong>
                December 2021
              </p>
            </Col>
            <Col md={4}>
              <h3>Tools</h3>
              <p>
                <i class='far fa-check-square'></i> Articulate Storyline
              </p>
              <p>
                <i class='far fa-check-square'></i> Adobe Illustrator
              </p>
            </Col>
            <Col md={4}>
              <h3>Skills</h3>
              <p>
                <i class='far fa-check-square'></i> Instructional Design
              </p>
              <p>
                <i class='far fa-check-square'></i> eLearning Development
              </p>
            </Col>
          </Row>

          <br />
          <hr />
          <br />

          <Row>
            <Col md={12}>
              <div>
                <h2>How to Play Guitar</h2>
              </div>
            </Col>
          </Row>

          <br />

          <Row>
            <Col md={5}>
              <Image
                src='https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                fluid
              />
            </Col>

            <Col md={1}></Col>

            <Col md={6}>
              <h3>About This Project</h3>
              <p>
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
                October 2021
              </p>
            </Col>
            <Col md={4}>
              <h3>Tools</h3>
              <p>
                <i class='far fa-check-square'></i> Articulate Storyline
              </p>
              <p>
                <i class='far fa-check-square'></i> Adobe Illustrator
              </p>
            </Col>
            <Col md={4}>
              <h3>Skills</h3>
              <p>
                <i class='far fa-check-square'></i> Instructional Design
              </p>
              <p>
                <i class='far fa-check-square'></i> eLearning Development
              </p>
            </Col>
          </Row>

          <br />

          <br />
          <hr />
          <br />

          <Row>
            <Col md={12}>
              <div>
                <h2>Deploying a Website with Netlify</h2>
              </div>
            </Col>
          </Row>

          <br />

          <Row>
            <Col md={5}>
              <Image
                src='https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                fluid
              />
            </Col>

            <Col md={1}></Col>

            <Col md={6}>
              <h3>About This Project</h3>
              <p>
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
                November 2021
              </p>
            </Col>
            <Col md={4}>
              <h3>Tools</h3>
              <p>
                <i class='far fa-check-square'></i> Articulate Storyline
              </p>
              <p>
                <i class='far fa-check-square'></i> Adobe Illustrator
              </p>
            </Col>
            <Col md={4}>
              <h3>Skills</h3>
              <p>
                <i class='far fa-check-square'></i> Instructional Design
              </p>
              <p>
                <i class='far fa-check-square'></i> eLearning Development
              </p>
            </Col>
          </Row>

          <br />
        </div>
      </Container>
    </div>
  );
};

export default Projects;
