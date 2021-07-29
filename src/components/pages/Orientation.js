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
                  learner is able to remember. The sidebar is always accessible
                  so that the learner can easily navigate to any lesson for
                  reference. Since the course contains a lesson with information
                  on the company's website, I created a mockup Home Page using
                  HTML and CSS for the lesson. Similarly, I also created a
                  mockup floor plan of the building, since the course contains
                  an interactive labeled graphic of the floor plan of the
                  company building. This course will help orient new employees
                  and help them learn about the company for which they will
                  work, as well as help them learn about the inner workings and
                  structure of its organization.
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
                <p>
                  Articulate Rise, Snagit, Canva, HTML, CSS, Bootstrap, Floor
                  Plan Creator
                </p>

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
                  different roles within an organization and what each person is
                  responsible for, etc. Depending on the organization, the
                  amount of information a new employee needs to learn can vary.
                  The aim of this course, therefore, is to help new employees
                  familiarize themselves with key areas of the company (ACME Web
                  Services) for which they will work. Moreover, this course was
                  designed in such a way that employees can go back and easily
                  navigate to any section of the course for reference at any
                  time.
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
                  orient themselves in their new environment and to help them
                  understand the workings of their new company, its culture, and
                  organizational structure. The course is divided into sections
                  (company, workplace, services), beginning with an introduction
                  that provides a description of the course and its objectives,
                  and ends with a knowledge check that tests learners on the
                  information presented. Each of the sections contains lessons
                  with basic important information that a new employee needs to
                  learn when beginning employment at a new organization (e.g.,
                  company history, team structure, services offered, etc.). A
                  variety of interactive features are used (e.g., tabs,
                  flashcard, interactive labeled graphic) in the presentation of
                  the material to promote learner interest. A sidebar is kept
                  displayed so that learners can easily navigate to different
                  sections if they feel they need to refer to a particular
                  lesson. The knowledge check at the end contains a mix of
                  multiple-choice and multiple-response questions, which allow
                  the learners to check how much of the new information they
                  have remembered. Learners are given feedback and are also able
                  to retake the quiz. The feedback given provides learners with
                  an explanation of the information in the question, thereby
                  reminding learners of the information presented in the
                  lessons.
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
                  correct answer(s) for each question. Furthermore, learners are
                  able to easily navigate to any lesson at any time, if they
                  ever need to refer to any lesson.
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
                  layout of the project such the font and the color scheme used.
                  It also lists every slide in complete detail, along with the
                  title of the slide, images and text used, buttons included and
                  what each button does, notes for the developer, and detailed
                  notes on animations used. In the case where activities or
                  multiple choice questions are used, detailed information is
                  given regarding the questions and answers used, as well as the
                  correct answers given (seen in later slides). To view the
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
                  To provide the option of implementing this lesson on its own
                  without the need for an LMS, I wanted to integrate a
                  certificate of completion into the lesson. To do this, I
                  created a custom branded certificate on Canva, with an image,
                  fonts, and colors that matched my lesson scheme. I then used
                  JavaScript to print the student's name and date on the
                  certificate, so that the name and current date would appear on
                  the certificate when downloaded in PDF format. The&nbsp;
                  <a
                    href='https://rawgit.com/MrRio/jsPDF/master/docs/index.html'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <span>jsPDF</span>
                  </a>
                  &nbsp;library is used to generate the PDF, and a script is
                  added in the <code>story.html</code> file to communicate this
                  to the Storyline course. The following code in the image below
                  was added in Storyline to the{' '}
                  <strong>Download Certificate</strong> button Trigger as
                  Executable JavaScript. I first used Visual Studio Code so that
                  I could more easily configure the settings appropriate to my
                  project, such as setting the font size and color, choosing a
                  name for the downloaded file (i.e., Certificate.pdf), calling
                  the variable used for the name in Storyline, etc.
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
