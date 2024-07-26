import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Customer1 from '../../img/customer01.webp';
import Customer2 from '../../img/customer02.webp';
import Storyboard from '../../img/customer-storyboard.webp';
import CustomerStoryboardImage from '../../img/satisfaction_storyboard_image.webp';
import StoryboardPDF from '../../pdf/improving-customer-satisfaction-storyboard.pdf';
import actionMap from '../../img/action-map.webp';
import Development1 from '../../img/customer-development01.webp';
import Development2 from '../../img/customer-development02.webp';
import Development3 from '../../img/customer-development03.webp';
import BackButton from '../../components/layout/BackButton';
import classes from '../../styles/CustomerStoryboard.module.css';

const CustomerStoryboard = () => {
  return (
    <div>
      <Helmet>
        <title>
          Adolf Schmuck | Projects | Improving Customer Satisfaction Storyboard
        </title>
      </Helmet>
      <Container className={classes.Container}>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={12}>
              <div>
                <h2 className={classes.Title}>Storyboard:</h2>
                <h2 className={classes.Title}>
                  Improving Customer Satisfaction
                </h2>
              </div>
            </Col>
          </Row>

          <br />

          <Row>
            <Col md={2}></Col>
            <Col col={8}>
              <div className={classes.ProjectDiv}>
                <p style={{ textAlign: 'left' }}>
                  This is the storyboard for{' '}
                  <a href='/portfolio/improving-customer-satisfaction'>
                    <span>Improving Customer Satisfaction</span>
                  </a>
                  , an interactive training module created using Articulate
                  Storyline for employees to learn about different ways to
                  improve customer satisfaction. It was created to plan and
                  design a scenario-based learning experience that includes
                  scenarios, each with a correct choice and a distractor. After
                  defining the overall goal of the project with an action map, I
                  created the storyboard, where I planned and outlined every
                  aspect of the module, from the color scheme used to the text.
                  Once the storyboard was completed, I developed the project
                  using Articulate Storyline.
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
                    src={CustomerStoryboardImage}
                    alt='Improving Customer Satisfaction Storyboard'
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
                  <strong>Tools Used: </strong>
                </p>
              </div>
            </Col>
            <Col md={2}></Col>
          </Row>

          <Row>
            <Col md={2}></Col>
            <Col col={8}>
              <div className={classes.ProjectDiv}>
                <p>Microsoft Word</p>

                <br />

                <Button
                  className={classes.CheckItOut}
                  variant='dark'
                  src={StoryboardPDF}
                  href={StoryboardPDF}
                  rel='noopener noreferrer'
                  target='_blank'
                  style={{
                    boxShadow: 'none',
                  }}
                >
                  View Storyboard
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
                <h2 className={classes.Title}>Visual Storyboard</h2>
              </div>
            </Col>
          </Row>

          <br />

          <Row>
            <Col md={2}></Col>
            <Col col={8}>
              <div className={classes.ProjectDiv}>
                <p style={{ textAlign: 'left' }}>
                  The visual storyboard includes basic information about the
                  layout of the project, such as the font and the color scheme
                  used, the button states, and the player settings. It also
                  lists every slide in complete detail, along with the title of
                  the slide, images and text used, buttons included and what
                  each button does, notes for the developer, and detailed notes
                  on animations used. In the case where different layers are
                  used, the information provided is organized by layer,
                  including images of each layer used. To view the entire
                  storyboard in PDF format, click the View Storyboard button
                  above.
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
                  <a
                    href={Storyboard}
                    data-fancybox='images'
                    data-caption='Visual Storyboard for Improving Customer Satisfaction'
                  >
                    <Image
                      className={classes.Image2}
                      src={Storyboard}
                      alt='Visual Storyboard for Improving Customer Satisfaction'
                      fluid
                    />
                  </a>
                </p>
              </div>
            </Col>
          </Row>

          <br />
          <br />

          <Row>
            <Col md={12}>
              <div>
                <h2 className={classes.Title}>Action Map</h2>
              </div>
            </Col>
          </Row>

          <br />

          <Row>
            <Col md={2}></Col>
            <Col col={8}>
              <div className={classes.ProjectDiv}>
                <p style={{ textAlign: 'left' }}>
                  The problem that this training module sets out to solve is
                  that of customer satisfaction. Specifically, the goal is to
                  improve customer satisfaction. As the ultimate goal of the
                  module is to improve customer satisfaction, it is in the
                  center of the action map and branches out to the actions that
                  the users of this module (i.e., employees) need to perform in
                  order to reach the goal. There are different actions that
                  employees can take to improve customer satisfaction
                  (personalize interactions, encourage feedback, maintain
                  etiquette), each with their own set of examples and an
                  interactive scenario that plays out in a situation
                  illustrating each of these. This way of modeling this training
                  module allows the content and interactions in the slides to
                  clearly and directly relate back to the primary goal.
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
                  <a
                    href={actionMap}
                    data-fancybox='images'
                    data-caption='Action Map for Improving Customer Satisfaction'
                  >
                    <Image
                      className={classes.Image2}
                      src={actionMap}
                      alt='Action Map for Improving Customer Satisfaction'
                      fluid
                    />
                  </a>
                </p>
              </div>
            </Col>
          </Row>

          <br />
          <br />

          <Row>
            <Col md={12}>
              <div>
                <h2 className={classes.Title}>Development</h2>
              </div>
            </Col>
          </Row>

          <br />

          <Row>
            <Col md={2}></Col>
            <Col col={8}>
              <div className={classes.ProjectDiv}>
                <p style={{ textAlign: 'left' }}>
                  The development of this non-linear training module in
                  Articulate Storyline makes an extensive use of layers,
                  triggers, and animations in order to create a more engaging
                  user experience. This is especially the case in the main
                  content of the module, i.e., the presented actions and the
                  real-life scenarios between a customer and a salesperson.
                </p>
                <p style={{ textAlign: 'left' }}>
                  An example of this can be seen in the scenario created to
                  encourage customer feedback (see images below). At first
                  glance from the Base Layer (Feedback Scenario), it may seem as
                  though the text is jumbled on top of each other ("Customer"
                  and "Customer Service Representative"). However, upon closer
                  inspection of the timeline, you can see that every element in
                  the layer is animated in and out at precisely the right
                  moment, so that when the actual slide is seen in real time,
                  everything is animated in and out seamlessly.
                </p>
                <p style={{ textAlign: 'left' }}>
                  Since I wanted to create a more engaging user experience
                  without interrupting the flow of the content by having to go
                  to a separate slide, I wanted the transition to the feedback
                  ("correct" or "incorrect") to happen on the same slide. To do
                  this, I created both a Correct Layer and an Incorrect Layer. I
                  added triggers on both the correct and incorrect responses (as
                  well as on their corresponding rectangular shapes), and set
                  the triggers up so that if the learner clicks on the correct
                  text (or shape), the Correct Layer is shown. Likewise, if the
                  learner clicks on the incorrect text (or shape), the Incorrect
                  Layer is shown. To complete the user experience, I added fade
                  in effects to different elements in the Correct/Incorrect
                  Layers (e.g., text, icon, buttons), so that they fade in
                  nicely when the layers are shown.
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
                  <a
                    href={Development1}
                    data-fancybox='images'
                    data-caption='Improving Customer Satisfaction in Development'
                  >
                    <Image
                      className={classes.Image2}
                      src={Development1}
                      alt='Improving Customer Satisfaction in Development'
                      fluid
                    />
                  </a>
                </p>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <div className={classes.ProjectDiv}>
                <p className='imglist'>
                  <a
                    href={Development2}
                    data-fancybox='images'
                    data-caption='Improving Customer Satisfaction in Development'
                  >
                    <Image
                      className={classes.Image2}
                      src={Development2}
                      alt='Improving Customer Satisfaction in Development'
                      fluid
                    />
                  </a>
                </p>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <div className={classes.ProjectDiv}>
                <p className='imglist'>
                  <a
                    href={Development3}
                    data-fancybox='images'
                    data-caption='Improving Customer Satisfaction in Development'
                  >
                    <Image
                      className={classes.Image2}
                      src={Development3}
                      alt='Improving Customer Satisfaction in Development'
                      fluid
                    />
                  </a>
                </p>
              </div>
            </Col>
          </Row>

          <br />
          <br />

          <Row>
            <Col md={12}>
              <div>
                <h2 className={classes.Title}>Project Screenshots</h2>
              </div>
            </Col>
          </Row>

          <br />

          <div className={classes.ProjectDiv}>
            <Row>
              <Col>
                <div className={classes.ProjectDiv}>
                  <p className='imglist'>
                    <a
                      href={Customer1}
                      data-fancybox='images'
                      data-caption='Screenshot of Improving Customer Satisfaction Training Module'
                    >
                      <Image
                        className={classes.Image}
                        src={Customer1}
                        alt='Screenshot of Improving Customer Satisfaction Training Module'
                        fluid
                      />
                    </a>
                  </p>
                </div>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <div className={classes.ProjectDiv}>
                  <p className='imglist'>
                    <a
                      href={Customer2}
                      data-fancybox='images'
                      data-caption='Screenshot of Improving Customer Satisfaction Training Module'
                    >
                      <Image
                        className={classes.Image}
                        src={Customer2}
                        alt='Screenshot of Improving Customer Satisfaction Training Module'
                        fluid
                      />
                    </a>
                  </p>

                  <figure>
                    <figcaption style={{ fontSize: '12px' }}>
                      Images used created by{' '}
                      <a
                        href='https://www.freepik.com/'
                        rel='noopener noreferrer'
                        target='_blank'
                      >
                        <span>Freepik</span>
                      </a>
                      .
                    </figcaption>
                  </figure>
                </div>
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

export default CustomerStoryboard;
