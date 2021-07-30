import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import CourseScreenshot01 from '../../img/course-screenshot01.webp';
import CourseScreenshot02 from '../../img/course-screenshot02.webp';
import orientation from '../../img/new-employee-orientation.webp';

import RiseStoryboard from '../../img/rise-storyboard.webp';
import RiseStoryboardPDF from '../../pdf/new-employee-orientation-storyboard.pdf';
import aws from '../../img/aws.webp';
import awsCode from '../../img/aws-code.webp';
import floorPlan from '../../img/floor-plan.webp';
import BackButton from '../../components/layout/BackButton';
import classes from '../../styles/Orientation.module.css';

const Orientation = () => {
  return (
    <div>
      <Helmet>
        <title>Adolf Schmuck | Projects | New Employee Orientation</title>
      </Helmet>
      <Container className={classes.Container}>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={12}>
              <div>
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
                  New Employee Orientation is a course designed as an
                  orientation training module for new employees of ACME Web
                  Services, a fictitious company that provides its clients a
                  variety of web services, such as web design, web development,
                  and hosting. This course was designed to help new employees
                  learn about their new company, its culture, and organizational
                  structure. The course is divided into different sections
                  (company, workplace, and services), each with their own
                  lessons. The course begins with an introduction that presents
                  a description of the course and its objectives, and ends with
                  a knowledge check to see how much of the information the
                  learner is able to remember. Also included is an interactive
                  labeled graphic activity that allows learners to explore
                  different areas of the office floor plan. To make navigation
                  convenient, the sidebar is always accessible so that learners
                  can easily navigate to any lesson for reference. By the end,
                  learners should be able to understand the workings of the
                  organization, including information about the company, the
                  workplace, and the services that are offered.
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
                    src={orientation}
                    alt='New Employee Orientation'
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
                <p>Articulate Rise, Snagit, Canva, Floor Plan Creator</p>

                <br />

                <Button
                  className={classes.CheckItOut}
                  variant='primary'
                  href='https://new-employee-orientation.netlify.app/'
                  rel='noopener noreferrer'
                  target='_blank'
                  style={{
                    marginRight: '5px',
                    boxShadow: 'none',
                  }}
                >
                  View Course
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
                  Starting a new job can be overwhelming. There is a lot of new
                  information that new employees need to know and learn, such as
                  the organizational structure, the company culture, the
                  different roles within an organization and what each person in
                  the role is responsible for, etc. Depending on the
                  organization, the amount of information a new employee needs
                  to learn can vary. The aim of this course, therefore, is to
                  help new employees familiarize themselves with key features of
                  the company (ACME Web Services) for which they will work, so
                  that they are comfortable with the information pertaining to
                  the organization that they are joining.
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
                  I created this course using Articulate Rise to help learners
                  orient themselves in their new work environment and to help
                  them understand the workings of their new company, its
                  culture, and organizational structure. The course is divided
                  into sections (company, workplace, services), beginning with
                  an introduction that provides a description of the course and
                  its objectives, and ends with a knowledge check that tests
                  learners on the information presented. Each of the sections
                  contains lessons with information that a new employee needs to
                  know when beginning employment at a new organization (e.g.,
                  company history, team structure, services offered, etc.).
                </p>
                <p style={{ textAlign: 'left' }}>
                  A variety of interactive Rise features are used (e.g., tabs,
                  flashcard, interactive labeled graphic) in the presentation of
                  the material to promote learner interest. One such feature is
                  the interactive labeled graphic feature that allows learners
                  to explore different areas of the office by clicking on the
                  different markers on the floor plan. To provide for a
                  convenient navigation experience, the sidebar is kept
                  displayed so that learners can easily navigate to different
                  sections of the course if they feel they need to refer to a
                  particular lesson. The knowledge check at the end contains a
                  mix of multiple-choice and multiple-response questions, which
                  allows learners to check how much of the new information they
                  have remembered. Learners are given feedback and are also able
                  to retake the quiz. The feedback given provides learners with
                  an explanation of the information in the question, thereby
                  reinforcing the information and reminding learners of the
                  information presented in the lessons.
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
                  After completing the course, learners should be able to
                  recognize and state the workings of the organization,
                  including information about the company, the workplace, and
                  the services that are offered. Given a set of exercises at the
                  end of the course, learners should be able to select the
                  correct answer(s) for each question. Furthermore, using the
                  sidebar for convenient navigation between lessons, learners
                  will be able to use this course as a reference guide and refer
                  back to any part of the course at any time when struggling to
                  remember any of the information.
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
                  button below.
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
                <br />

                <Button
                  className={classes.CheckItOut}
                  variant='primary'
                  src={RiseStoryboardPDF}
                  href={RiseStoryboardPDF}
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
                  variant='primary'
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

export default Orientation;
