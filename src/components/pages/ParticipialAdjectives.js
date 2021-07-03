import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Adj01 from '../../img/adj1.png';
import Adj02 from '../../img/adj2.png';
import Mockup from '../../img/adjMockup06.jpg';
import Storyboard from '../../img/storyboard.png';
import StoryboardPDF from '../../pdf/storyboard.pdf';
import certificate from '../../pdf/certificate.pdf';
import JSCode from '../../img/JavaScriptCode.png';
import StorylineJS from '../../img/StorylineJavaScript.png';
import Certificate from '../../img/certificate-pdf.png';

import BackButton from '../../components/layout/BackButton';

import classes from '../../styles/ParticipialAdjectives.module.css';

const ParticipialAdjectives = () => {
  return (
    <div>
      <Helmet>
        <title>Adolf Schmuck | Projects | Participial Adjectives</title>
      </Helmet>
      <Container className={classes.Container}>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={12}>
              <div>
                <h2 className={classes.Title}>Participial Adjectives</h2>
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
                  for pre-intermediate (A2-B1 CEFR
                  <sup>
                    <a style={{ textDecoration: 'none' }} href='#fn1' id='ref1'>
                      1
                    </a>
                  </sup>
                  ) ESL learners. A common grammar area of confusion for ESL
                  (English as a Second Language) learners is the use of
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
                {/* <p style={{ float: 'left' }}> */}
                <p style={{ textAlign: 'left', marginTop: '30px' }}>
                  <hr />
                  <sup id='fn1'>
                    1. CEFR: The Common European Framework of Reference for
                    Languages.
                    <a href='#ref1' title='Jump back to footnote 1'>
                      ↩
                    </a>
                  </sup>
                </p>
                {/* <p style={{ textAlign: 'left' }}>
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
                </p> */}
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
                    className={classes.Image}
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
                <p>Articulate Storyline, Canva, SCORM Cloud (Testing)</p>

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
                  View Lesson
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
                  title of the slide, images and text used, button(s) included
                  and what each button does, notes for the developer, and
                  detailed notes on animations used. In the case where
                  activities or multiple choice questions are used, detailed
                  information is given regarding the questions and answers used,
                  as well as the correct answers given (seen in later slides).
                  To view the entire storyboard in PDF format, click the View
                  Storyboard button below.
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
                    data-caption='Visual Storyboard for Participial Adjectives'
                  >
                    <Image
                      className={classes.Image2}
                      // style={{ maxWidth: '75%' }}
                      src={Storyboard}
                      alt='Visual Storyboard for Participial Adjectives'
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
                <h2 className={classes.Title}>Printable PDF</h2>
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
                  certificate of completion into the course. To do this, I
                  created a custom branded certificate on Canva, with an image,
                  fonts, and colors that matched my lesson scheme. I then used
                  JavaScript to print the student's name and date on the
                  certificate, so that the name and current date would appear on
                  the certificate when downloaded in PDF format. The jsPDF
                  library is used to generate the PDF, and a script is added in
                  the <code>story.html</code> file to communicate this to the
                  Storyline course. The following code was added in Storyline to
                  the <strong>Download Certificate</strong> button Trigger as
                  Executable JavaScript. I first used Visual Studio Code so that
                  I could more easily add the settings appropriate to my
                  project, such as setting the font size and color, choosing a
                  name for the downloaded file (i.e., Certificate.pdf), calling
                  the name variable used in Storyline, etc.
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
                    href={JSCode}
                    data-fancybox='images'
                    data-caption='JavaScript Code for PDF Certificate'
                  >
                    <Image
                      className={classes.Image2}
                      // style={{ maxWidth: '75%' }}
                      src={JSCode}
                      alt='JavaScript Code for PDF Certificate'
                      fluid
                    />
                  </a>
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className={classes.ProjectDiv}>
                <p className='imglist'>
                  <a
                    href={StorylineJS}
                    data-fancybox='images'
                    data-caption='JavaScript Code in Storyline'
                  >
                    <Image
                      className={classes.Image2}
                      // style={{ maxWidth: '75%' }}
                      src={StorylineJS}
                      alt='JavaScript Code in Storyline'
                      fluid
                    />
                  </a>
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className={classes.ProjectDiv}>
                <p className='imglist'>
                  <a
                    href={Certificate}
                    data-fancybox='images'
                    data-caption='Certificate in PDF Format'
                  >
                    <Image
                      className={classes.Image2}
                      // style={{ maxWidth: '75%' }}
                      src={Certificate}
                      alt='Certificate in PDF Format'
                      fluid
                    />
                  </a>
                </p>
                <br />
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
                </Button>
              </div>
            </Col>
          </Row>

          <br />
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
          <br />

          <Row>
            <Col md={12}>
              <div>
                <h2 className={classes.Title}>Project Screenshots</h2>
              </div>
            </Col>
          </Row>

          <br />
          <br />

          <div className={classes.ProjectDiv}>
            <Row>
              <Col md={6}>
                <p className='imglist'>
                  <a
                    href={Adj01}
                    data-fancybox='images'
                    data-caption='Participial Adjectives'
                  >
                    <Image
                      className={classes.Image3}
                      // style={{ maxWidth: '90%' }}
                      src={Adj01}
                      alt='Participial Adjectives'
                      fluid
                    />
                  </a>
                </p>
              </Col>

              <Col md={6}>
                <p className='imglist'>
                  <a
                    href={Adj02}
                    data-fancybox='images'
                    data-caption='Participial Adjectives'
                  >
                    <Image
                      className={classes.Image3}
                      // style={{ maxWidth: '90%' }}
                      src={Adj02}
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
