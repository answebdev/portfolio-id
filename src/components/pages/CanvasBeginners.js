import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Canvas from '../../img/canvas.png';
import Adj01 from '../../img/adj1.png';
import Adj02 from '../../img/adj2.png';
import pdf from '../../pdf/CanvasBasics.pdf';
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
                  I designed and developed this project for instructors who have
                  minimal experience using Canvas, as well as limited
                  technological knowledge. More specifically, it details
                  step-by-step how to create a module in Canvas, along with
                  pages belonging to a module. It begins with a basic navigation
                  overview to familiarize learners with the dashboard and
                  sidebar navigation. It then explains in details how to create
                  a module. This module will give learners the knowledge that
                  they will be able to apply when creating their own course
                  modules.
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
                  <Image
                    className={classes.Image}
                    src={Canvas}
                    alt='Canvas Logo'
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
                <p>Canvas, Microsoft Word, Snagit, Canva</p>

                <br />

                {/* <Button
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
                </Button> */}
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

          <br />
          <br />

          <Row>
            <Col md={12}>
              <div>
                <h2 className={classes.Title}>Challenge</h2>
              </div>
            </Col>
          </Row>

          <br />

          <Row>
            <Col md={2}></Col>
            <Col col={8}>
              <div className={classes.ProjectDiv}>
                <p style={{ textAlign: 'left' }}>
                  Using Canvas to create a course can be daunting when one's
                  knowledge of Canvas is limited, especially when it is a
                  learner's first time using it. As an instructor, I remember
                  how daunting it was at first when switching over from
                  Blackboard to Canvas. Moreover, not everyone's technological
                  skills are at the same level, and a learner's limited
                  technological knowledge may also make certain tasks in Canvas
                  all the more difficult. The aim of this facilitator guide,
                  therefore, is to help instructors who are new to Canvas, or
                  who are not yet comfortable using Canvas, familiarize
                  themmselves with the basic navigation and to help instructors
                  create modules and pages for their own courses.
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

            <Row>
              <Col md={12}>
                <div>
                  <h2 className={classes.Title}>Solution</h2>
                </div>
              </Col>
            </Row>

            <br />

            <Row>
              <Col md={2}></Col>
              <Col col={8}>
                <div className={classes.ProjectDiv}>
                  <p style={{ textAlign: 'left' }}>
                    In creating this learning module, I took screenshots of
                    Canvas using Snagit to show the basic navigation layout, and
                    to show how to use the features necessary to create modules
                    and pages. I used screenshots and gave detailed instructions
                    on how to complete specific tasks.
                  </p>
                </div>
              </Col>
              <Col md={2}></Col>
            </Row>

            <br />

            <Row>
              <Col md={12}>
                <div>
                  <h2 className={classes.Title}>Result</h2>
                </div>
              </Col>
            </Row>

            <br />

            <Row>
              <Col md={2}></Col>
              <Col col={8}>
                <div className={classes.ProjectDiv}>
                  <p style={{ textAlign: 'left' }}>
                    After completing this learning module, learners will be able
                    to use Canvas effectively. While going through the detailed
                    steps in the module, learners can follow along and apply the
                    same steps taken in their own course in Canvas. The learner
                    will be able to refer back to the screenshots and detailed
                    steps when struggling with concepts with accuracy. As a
                    result, learners will be able to set up their own module in
                    their own courses effectively and have the confidence to set
                    up modules on their own in the future.
                  </p>
                </div>
              </Col>
              <Col md={2}></Col>
            </Row>

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
