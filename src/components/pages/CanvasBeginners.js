import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Adj01 from '../../img/adj1.png';
import Adj02 from '../../img/adj2.png';
import pdf from '../../pdf/grading-submitted-media-assignments-on-canvas.pdf';
import BackButton from '../../components/layout/BackButton';
import classes from '../../styles/CanvasBeginners.module.css';

// React PDF Viewer: https://react-pdf-viewer.dev/
import { Worker } from '@react-pdf-viewer/core';

// Import the main component
import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const CanvasBeginners = () => {
  // Create new plugin instance for React PDF Viewer
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div>
      <Helmet>
        <title>Adolf Schmuck | Projects | Canvas Beginners</title>
      </Helmet>
      <Container className={classes.Container}>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={12}>
              <div>
                <h2 className={classes.Title}>Canvas Beginners</h2>
              </div>
            </Col>
          </Row>

          <br />

          <Row>
            <Col md={2}></Col>
            <Col col={8}>
              <div className={classes.ProjectDiv}>
                <p style={{ textAlign: 'left' }}>
                  Participial Adjectives is a lesson on participial adjectives
                  for pre-intermediate (A2-B1 CEFR) ESL learners. A common
                  grammar area of confusion for ESL learners is the use of
                  participial adjectives, and knowing when to use the correct
                  form (e.g., "I am bored" versus "I am boring"). This
                  interactive Storyline lesson aims to clarify this area of
                  confusion by reviewing the different forms, and by allowing
                  the learner to check his or her understanding of the target
                  grammar presented. By the end, students should be able to
                  understand the difference between the past participle and
                  present participle forms, and when to use each form. The
                  lesson ends with a set of exercises aimed at testing the
                  learner's understanding of the grammar. Upon completion, the
                  learner is given the choice to review the answers, view the
                  results in printable form, or retry the exercises.
                </p>
              </div>
            </Col>
            <Col md={2}></Col>
          </Row>

          <br />

          <Row>
            <Col md={12}>
              <div className={classes.PDFViewer}>
                <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js'>
                  <div className={classes.ViewerComponent}>
                    <Viewer
                      fileUrl={pdf}
                      defaultScale={SpecialZoomLevel.PageFit}
                      initialPage={0}
                      plugins={[defaultLayoutPluginInstance]}
                    />
                  </div>
                </Worker>
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
                <p>Canvas, Microsoft Word, screenshot</p>

                <br />

                <Button
                  className={classes.CheckItOut}
                  variant='primary'
                  href='https://participial-adjectives.netlify.app/'
                  rel='noopener noreferrer'
                  target='_blank'
                  style={{
                    marginRight: '5px',
                    boxShadow: 'none',
                  }}
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
              <div>
                <h2 className={classes.Title}>Details</h2>
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
                    href={Adj01}
                    data-fancybox='images'
                    data-caption='Participial Adjectives'
                  >
                    <Image
                      style={{ maxWidth: '90%' }}
                      src={Adj01}
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

export default CanvasBeginners;
