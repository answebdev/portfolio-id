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
                  Cake carrot cake liquorice macaroon jelly dessert macaroon
                  jelly-o cake. Cookie ice cream sweet chocolate cake lemon
                  drops icing. Biscuit sugar plum dragée liquorice jujubes
                  dessert cotton candy tart. Jelly-o donut sweet croissant.
                  Cotton candy lollipop chocolate bar ice cream donut brownie.
                  Pie sesame snaps soufflé pastry chupa chups jelly beans.
                  Gummies croissant oat cake jujubes cake sweet. Jelly-o
                  chocolate cake apple pie gummies gingerbread bonbon. Croissant
                  caramels candy canes. Cupcake caramels soufflé marshmallow
                  topping liquorice apple pie. Marzipan biscuit pastry dessert
                  lemon drops. Danish halvah cupcake fruitcake. Cake candy
                  bonbon pudding sesame snaps.
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
                    Cake carrot cake liquorice macaroon jelly dessert macaroon
                    jelly-o cake. Cookie ice cream sweet chocolate cake lemon
                    drops icing. Biscuit sugar plum dragée liquorice jujubes
                    dessert cotton candy tart. Jelly-o donut sweet croissant.
                    Cotton candy lollipop chocolate bar ice cream donut brownie.
                    Pie sesame snaps soufflé pastry chupa chups jelly beans.
                    Gummies croissant oat cake jujubes cake sweet. Jelly-o
                    chocolate cake apple pie gummies gingerbread bonbon.
                    Croissant caramels candy canes. Cupcake caramels soufflé
                    marshmallow topping liquorice apple pie. Marzipan biscuit
                    pastry dessert lemon drops. Danish halvah cupcake fruitcake.
                    Cake candy bonbon pudding sesame snaps.
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
                    Cake carrot cake liquorice macaroon jelly dessert macaroon
                    jelly-o cake. Cookie ice cream sweet chocolate cake lemon
                    drops icing. Biscuit sugar plum dragée liquorice jujubes
                    dessert cotton candy tart. Jelly-o donut sweet croissant.
                    Cotton candy lollipop chocolate bar ice cream donut brownie.
                    Pie sesame snaps soufflé pastry chupa chups jelly beans.
                    Gummies croissant oat cake jujubes cake sweet. Jelly-o
                    chocolate cake apple pie gummies gingerbread bonbon.
                    Croissant caramels candy canes. Cupcake caramels soufflé
                    marshmallow topping liquorice apple pie. Marzipan biscuit
                    pastry dessert lemon drops. Danish halvah cupcake fruitcake.
                    Cake candy bonbon pudding sesame snaps.
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
