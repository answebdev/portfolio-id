import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Canvas from '../../img/canvas.webp';
import pdf from '../../pdf/CanvasModules.pdf';
import BackButton from '../layout/BackButton';
import classes from '../../styles/CanvasModules.module.css';

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
        <title>Adolf Schmuck | Projects | Canvas Modules</title>
      </Helmet>
      <Container className={classes.Container}>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={12}>
              <div>
                <h2 className={classes.Title}>Canvas Modules</h2>
              </div>
            </Col>
          </Row>

          <br />

          <Row>
            <Col md={2}></Col>
            <Col col={8}>
              <div className={classes.ProjectDiv}>
                <p style={{ textAlign: 'left' }}>
                  I designed and developed this learning module for instructors
                  in the ESL Department at Grossmont College who have minimal
                  experience using Canvas, as well as limited technological
                  knowledge. Specifically, it details step-by-step how to create
                  a module in Canvas, as well as the different types of pages
                  that can be created in a module. Although it is intended as a
                  guide to help instructors set up their courses before the
                  start of the semester, it can also be used as a reference
                  guide that can be referred to at any time. The table of
                  contents allows instructors using this guide to easily
                  navigate to a section of their choice. The learning guide
                  begins with a basic navigation overview to familiarize
                  learners with the Dashboard and the Global Navigation Menu. It
                  then explains in detail how to create a module, as well as how
                  to create the different types of pages of a module. The
                  learning module ends by guiding the learner through the steps
                  taken to set up a Course Home Page. This module will give
                  learners the knowledge that they will be able to apply when
                  creating their own course modules.
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
              </div>
            </Col>
            <Col md={2}></Col>
          </Row>

          <br />

          <Row>
            <Col md={12}>
              <div>
                <h2 className={classes.Title}>Document</h2>
              </div>
            </Col>
          </Row>

          <br />

          <Row>
            <Col md={2}></Col>
            <Col col={8}>
              <div className={classes.ProjectDiv}>
                <p style={{ textAlign: 'left' }}>
                  Use the PDF viewer below to view the Canvas Modules document.
                  Viewer options include full screen mode, dark theme mode, a
                  download option, and more. To open Canvas Modules in a
                  separate window, click the Canvas Modules button below.
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
                <br />

                <Button
                  className={classes.CheckItOut}
                  variant='primary'
                  src={pdf}
                  href={pdf}
                  rel='noopener noreferrer'
                  target='_blank'
                  style={{
                    marginRight: '5px',
                    boxShadow: 'none',
                  }}
                >
                  Canvas Modules
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
                  all the more difficult. The aim of this learning module,
                  therefore, is to help instructors who are new to Canvas, or
                  who are not yet comfortable using Canvas, familiarize
                  themselves with the basic navigation and to help instructors
                  create modules and pages for their own courses.
                </p>
              </div>
            </Col>
            <Col md={2}></Col>
          </Row>

          <br />

          <div className={classes.ProjectDiv}>
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
                    Canvas using Snagit to show the basic navigation layout, to
                    show how to use the features necessary to create modules and
                    pages, and to show how to set up the Course Home Page. I
                    used screenshots and gave detailed instructions on how to
                    complete specific tasks. I also added visuals, such as
                    shapes and arrows, so that the learner can easily see what
                    is being referred to in the instructions. Finally, I created
                    a table of contents with hyperlinks so that the learner can
                    easily jump to different sections of the document, rather
                    than having to skim the whole document for a particular
                    section. That way, if a learner only needs to know how to
                    add page requirements, for example, he or she can easily
                    jump to that section merely by clicking on the hyperlink in
                    the table of contents.
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
                    After completing this learning module, learners should be
                    able to use Canvas effectively, with confidence and
                    accuracy. While going through the detailed steps in the
                    module, learners can follow along and apply the same steps
                    taken in their own course in Canvas. The learner will be
                    able to refer back to the screenshots and detailed steps
                    when struggling with concepts with accuracy. As a result,
                    learners should be able to set up their own modules in their
                    own courses effectively and have the confidence to set up
                    modules on their own in the future.
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
