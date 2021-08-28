import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import customerMockup from '../../img/customer-mockup.webp';
import Customer1 from '../../img/customer01.webp';
import Customer2 from '../../img/customer02.webp';
import Storyboard from '../../img/customer-storyboard.webp';
import StoryboardPDF from '../../pdf/improving-customer-satisfaction-storyboard.pdf';
import actionMap from '../../img/action-map.webp';
import Development1 from '../../img/customer-development01.webp';
import Development2 from '../../img/customer-development02.webp';
import Development3 from '../../img/customer-development03.webp';
import BackButton from '../../components/layout/BackButton';
import classes from '../../styles/Customer.module.css';

const Customer = () => {
  return (
    <div>
      <Helmet>
        <title>
          Adolf Schmuck | Projects | Improving Customer Satisfaction
        </title>
      </Helmet>
      <Container className={classes.Container}>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={12}>
              <div>
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
                  Improving Customer Satisfaction is a training module created
                  for employees to learn about different ways to improve
                  customer satisfaction. It can become difficult to always
                  maintain positive levels of customer satisfaction, with a
                  variety of factors, such as a customer's experience and living
                  up to a customer's expectations coming into play. This
                  training module aims to improve customer satisfaction by
                  presenting different actions that can be taken (personalize,
                  encourage feedback, maintain etiquette), along with providing
                  examples of each action. For each case, there is a scenario
                  illustrating the different actions that can be taken, with the
                  opportunity for learners to choose the correct response for
                  each situation. In these scenarios, learners are given
                  different situations between a customer and a salesperson, and
                  are provided choices as to how to best respond in the given
                  situation. As this is a non-linear training module, learners
                  can choose which learning path to take from the main menu,
                  rather than having to go through each step in a set order.
                  Upon completion of the training, learners are then able to
                  exit the module.
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
                    src={customerMockup}
                    alt='Improving Customer Satisfaction'
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
                <p>Articulate Storyline, Freepik, GIMP, Canva</p>

                <br />

                <Button
                  className={classes.CheckItOut}
                  variant='primary'
                  href='https://improving-customer-satisfaction.netlify.app/'
                  rel='noopener noreferrer'
                  target='_blank'
                  style={{
                    marginRight: '5px',
                    boxShadow: 'none',
                  }}
                >
                  View Module
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
                  Being able to have happy customers and maintain positive
                  levels of customer satisfaction is the key step towards an
                  elevated customer experience. It is not always easy to
                  maintain positive levels of customer satisfaction, as there
                  are different factors that can come into play, such as bad
                  customer service, high prices, taking customers for granted,
                  and more. Fortunately, there are different ways to increase
                  customer satisfaction, with the ultimate goal being that of
                  turning satsified customers into loyal customers over time.
                  The aim of this module, therefore, is to help employees learn
                  about different actions that can be taken to improve customer
                  satisfaction.
                </p>
              </div>
            </Col>
            <Col md={2}></Col>
          </Row>

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
                  I created this training module using Articulate Storyline to
                  help learners recognize different ways of improving customer
                  satisfaction. Learners are presented with different actions
                  that can be taken (personalize, encourage feedback, maintain
                  etiquette), with an explanation of what each action means
                  (e.g., "Build relationships with customers by taking the time
                  to get to know them"). Examples are then given for each of
                  these strategies (e.g., "Use the customer’s name and order
                  details when speaking"). For each one, the learner is then
                  presented with a real-life scenario between a customer and a
                  salesperson, and is then presented with options of how to
                  respond in the given situation. Upon choosing, the learner is
                  then given feedback accordingly. This feedback is important
                  for learners, as they are reminded of the explanation of the
                  action in question so that they know how best to respond in
                  such situations.
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
                  After completing the training module, learners should be able
                  to recognize and use different strategies to improve customer
                  satisfaction with effectiveness. Given a set of scenarios
                  throughout the module, learners should be able to select the
                  correct response for each of the given situations. After
                  completing the training, learners should be able to respond
                  strategically to real-life interactions with customers in a
                  manner that leads to the improvement of customer satisfaction.
                </p>
              </div>
            </Col>
            <Col md={2}></Col>
          </Row>

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
                  below.
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
                <br />

                <Button
                  className={classes.CheckItOut}
                  variant='primary'
                  src={StoryboardPDF}
                  href={StoryboardPDF}
                  rel='noopener noreferrer'
                  target='_blank'
                  style={{
                    marginRight: '5px',
                    boxShadow: 'none',
                  }}
                >
                  View Storyboard
                </Button>
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

export default Customer;
