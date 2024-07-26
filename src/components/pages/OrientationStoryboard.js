import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import CourseScreenshot01 from '../../img/course-screenshot01.webp';
import CourseScreenshot02 from '../../img/course-screenshot02.webp';
import OrientationStoryboardImage from '../../img/orientation_storyboard_image.webp';

import RiseStoryboard from '../../img/rise-storyboard.webp';
import RiseStoryboardPDF from '../../pdf/new-employee-orientation-storyboard.pdf';
import aws from '../../img/aws.webp';
import awsCode from '../../img/aws-code.webp';
import floorPlan from '../../img/floor-plan.webp';
import BackButton from '../../components/layout/BackButton';
import classes from '../../styles/Orientation.module.css';

const OrientationStoryboard = () => {
  return (
    <div>
      <Helmet>
        <title>
          Adolf Schmuck | Projects | New Employee Orientation Storyboard
        </title>
      </Helmet>
      <Container className={classes.Container}>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={12}>
              <div>
                <h2 className={classes.Title}>Storyboard:</h2>
                <h2 className={classes.Title}>New Employee Orientation</h2>
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
                  <a href='/portfolio/new-employee-orientation'>
                    <span>New Employee Orientation</span>
                  </a>
                  , an Articulate Rise course designed as an orientation
                  training module for new employees to learn about their new
                  company, its culture, and organizational structure. It was
                  written to plan and design the complete layout of the course.
                  In the storyboard, I laid out the structure of the course,
                  outlining every aspect of the course, from the text and images
                  used to the questions, answers, distractors, and feedback used
                  on the quiz at the end of the course. Once the storyboard was
                  written and finalized, I developed the course using Articulate
                  Rise.
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
                    src={OrientationStoryboardImage}
                    alt='New Employee Orientation Storyboard'
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
                  src={RiseStoryboardPDF}
                  href={RiseStoryboardPDF}
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
                <h2 className={classes.Title}>Text-based Storyboard</h2>
              </div>
            </Col>
          </Row>

          <br />

          <Row>
            <Col md={2}></Col>
            <Col col={8}>
              <div className={classes.ProjectDiv}>
                <p style={{ textAlign: 'left' }}>
                  The text-based storyboard includes basic information about the
                  layout of the course, such as the font and the colors used. It
                  also lists every lesson in complete detail, detailing each
                  block used (e.g. text, list, image, etc.), along with the type
                  of block used, its content, the settings used for each block,
                  etc. In the case where images are used, the storyboard notes
                  whether the images used come from the Content Library, or in
                  the case where files are used, the names of the image files
                  are given. For the knowledge check questions at the end, the
                  questions and question types (i.e., multiple-choice or
                  multiple-response) are provided, along with the choices and
                  the correct answer(s). Finally, the feedback given for each
                  question is also provided in the storyboard. To view the
                  entire storyboard in PDF format, click the View Storyboard
                  button above.
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
                    href={RiseStoryboard}
                    data-fancybox='images'
                    data-caption='Storyboard for New Employee Orientation'
                  >
                    <Image
                      className={classes.Image2}
                      src={RiseStoryboard}
                      alt='Storyboard for New Employee Orientation'
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
                <h2 className={classes.Title}>Mockups</h2>
              </div>
            </Col>
          </Row>

          <br />

          <Row>
            <Col md={2}></Col>
            <Col col={8}>
              <div className={classes.ProjectDiv}>
                <p style={{ textAlign: 'left' }}>
                  Since the course has a lesson dedicated to the company's
                  website and its goals, I built a mock Home Page using HTML,
                  CSS, and&nbsp;
                  <a
                    href='https://getbootstrap.com/'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <span>Bootstrap</span>
                  </a>
                  . Although the Home Page is not functional, I used a
                  screenshot of the Home Page in the lesson to help reinforce
                  the goals that the company has for its website. Since the
                  goals of the website are presented as a numbered list, the
                  learner can refer to the screenshot of the Home Page while
                  reading the different goals presented in the numbered list in
                  the lesson.
                </p>
                <p style={{ textAlign: 'left' }}>
                  Similary, I also created a mock floor plan of the company
                  office building with a tool called{' '}
                  <a
                    href='https://floorplancreator.net/'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <span>Floor Plan Creator</span>
                  </a>
                  . This floor plan is used in the course as an interactive
                  labeled graphic. Here, learners are able to explore different
                  areas of the office by clicking on the different markers on
                  the floor plan. After creating the floor plan, I downloaded it
                  as an image file, then used this image in Articulate Rise in
                  the lesson when creating the labeled graphic block.
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
                    href={aws}
                    data-fancybox='images'
                    data-caption='Mockup Home Page for ACME Web Services'
                  >
                    <Image
                      className={classes.Image2}
                      src={aws}
                      alt='Mockup Home Page for ACME Web Services'
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
                    href={awsCode}
                    data-fancybox='images'
                    data-caption='HTML Code for ACME Web Services Home Page Mockup'
                  >
                    <Image
                      className={classes.Image2}
                      src={awsCode}
                      alt='HTML Code for ACME Web Services Home Page Mockup'
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
                    href={floorPlan}
                    data-fancybox='images'
                    data-caption='Floor Plan Mockup for New Employee Orientation Course'
                  >
                    <Image
                      className={classes.Image2}
                      src={floorPlan}
                      alt='Floor Plan Mockup for New Employee Orientation Course'
                      fluid
                    />
                  </a>
                </p>
                {/* <br />
                <Button
                  className={classes.CheckItOut}
                  variant='dark'
                  src={certificate}
                  href={certificate}
                  rel='noopener noreferrer'
                  target='_blank'
                  style={{
                    marginRight: '5px',
                    boxShadow: 'none',
                  }}
                >
                  View Certificate
                </Button> */}
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
                      href={CourseScreenshot01}
                      data-fancybox='images'
                      data-caption='Screenshot of New Employee Orientation Course'
                    >
                      <Image
                        className={classes.Image}
                        src={CourseScreenshot01}
                        alt='Screenshot of New Employee Orientation Course'
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
                      href={CourseScreenshot02}
                      data-fancybox='images'
                      data-caption='Screenshot of New Employee Orientation Course'
                    >
                      <Image
                        className={classes.Image}
                        src={CourseScreenshot02}
                        alt='Screenshot of New Employee Orientation Course'
                        fluid
                      />
                    </a>
                  </p>
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

export default OrientationStoryboard;
