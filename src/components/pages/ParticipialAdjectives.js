import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
// import Adj01 from '../../img/adj01.png';
import Adj02 from '../../img/adj02.png';
import Adj03 from '../../img/adj03.png';
// import Adj04 from '../../img/adj04.png';
import Mockup from '../../img/adjMockup02.jpg';

import BackButton from '../../components/layout/BackButton';

import classes from '../../styles/ParticipialAdjectives.module.css';

const ParticipialAdjectives = () => {
  return (
    <div>
      <Helmet>
        <title>Adolf Schmuck | Projects | Participial Adjectives</title>
        <style type='text/css'>{`
        body {
          background-color: #ffffff;
        }
    `}</style>
      </Helmet>
      <Container className={classes.Container}>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={12}>
              <div className={classes.Title}>
                <h1>Participial Adjectives</h1>
              </div>
            </Col>
          </Row>

          <br />

          <Row>
            <Col md={2}></Col>
            <Col col={8}>
              <div className={classes.ProjectDiv}>
                <p style={{ textAlign: 'left' }}>
                  Lingua is a learning app for students at a large foreign
                  language school. Faced with lower student performance in
                  German courses, the school needed an accessible way for
                  students to gain targeted practice. As it affords this
                  practice, the Lingua app also utilizes Javascript xAPI to
                  collect information about learner interactions with the
                  materials - how long they took to complete it, what answers
                  they chose, and how many times they visited the help
                  materials. The result is a wealth of valuable learner data
                  that allows the language school to adjust what they’re
                  offering and better meet their learners’ evolving needs.
                </p>
              </div>
            </Col>
            <Col md={2}></Col>
          </Row>

          <br />

          <Row>
            <Col>
              <div className={classes.ProjectDiv}>
                <p className='imglist'>
                  {/* <a
                    href={Mockup}
                    data-fancybox='images'
                    data-caption='Participial Adjectives'
                  >
                    <Image
                      style={{ maxWidth: '45%' }}
                      src={Mockup}
                      alt=''
                      fluid
                    />
                  </a> */}
                  <Image
                    style={{ maxWidth: '55%' }}
                    src={Mockup}
                    alt='Participial Adjectives Mockup'
                    fluid
                  />
                </p>
              </div>
            </Col>
          </Row>

          <br />

          <Row>
            <Col md={2}></Col>
            <Col col={8}>
              <div className={classes.ProjectDiv}>
                <p>
                  <strong>Tools used: </strong>
                </p>
              </div>
            </Col>
            <Col md={2}></Col>
          </Row>

          <Row>
            <Col md={2}></Col>
            <Col col={8}>
              <div className={classes.ProjectDiv}>
                <p>Articulate Storyline, Adobe XD, Adobe Illustrator</p>

                <br />

                <Button
                  className={classes.CheckItOut}
                  variant='primary'
                  href='https://participial-adjectives.netlify.app/'
                  rel='noopener noreferrer'
                  target='_blank'
                  style={{ marginRight: '5px' }}
                >
                  Check It Out
                </Button>
              </div>
            </Col>
            <Col md={2}></Col>
          </Row>

          <br />
          <br />

          <Row>
            <Col md={12}>
              <div className={classes.Title}>
                <h2>Details</h2>
              </div>
            </Col>
          </Row>

          <br />

          <Row>
            <Col md={2}></Col>
            <Col col={8}>
              <div className={classes.ProjectDiv}>
                <p style={{ textAlign: 'left' }}>
                  In the last year, I’ve become increasingly interested in how
                  data can be leveraged to enhance the digital learning
                  experience and to increase learning efficacy. For me,
                  understanding specifically how learners are interacting with
                  the experiences I build not only helps me target improvements,
                  but allows me to make more strategic decisions for aligned
                  learning design in the future. If my solution is designed
                  well, the data can confirm the user research I conducted
                  before beginning development. At the same time, the data can
                  bring to light certain elements in my design that might not be
                  working as well as I had planned. With this information, I can
                  learn better what works well for particular user group and
                  spend my time - and theirs - more wisely in the future.
                </p>
                <p style={{ textAlign: 'left' }}>
                  This xAPI-enabled Lingua app was built in this spirit.
                  Designed to be used together with students’ existing curricula
                  as a blended learning solution, the app allows users to log
                  in, enter their credentials, and practice their language at a
                  personalized level. Inspired by the UI/UX heritage of popular
                  language-learning apps, Lingua presents learners with a series
                  of staggered exercises that build their competency with the
                  subject matter. The format ranges from multiple choice to free
                  response. At the end, learners receive feedback on their
                  performance, and this information, along with the data
                  collected, is relayed to the LRS for further analysis.
                </p>
              </div>
            </Col>
            <Col md={2}></Col>
          </Row>

          <br />

          <div className={classes.ProjectDiv}>
            <Row>
              <Col md={6}>
                <p className='imglist'>
                  <a
                    href={Adj02}
                    data-fancybox='images'
                    data-caption='Participial Adjectives'
                  >
                    <Image
                      style={{ maxWidth: '90%' }}
                      src={Adj02}
                      alt='Participial Adjectives'
                      fluid
                    />
                  </a>
                </p>
              </Col>

              <Col md={6}>
                <p className='imglist'>
                  <a
                    href={Adj03}
                    data-fancybox='images'
                    data-caption='Participial Adjectives'
                  >
                    <Image
                      style={{ maxWidth: '90%' }}
                      src={Adj03}
                      alt='Participial Adjectives'
                      fluid
                    />
                  </a>
                </p>
              </Col>
            </Row>

            <br />
            <br />

            <div>
              <Row>
                <Col md={12}>
                  <BackButton />
                </Col>
              </Row>
            </div>
          </div>

          <br />
        </div>
      </Container>
    </div>
  );
};

export default ParticipialAdjectives;