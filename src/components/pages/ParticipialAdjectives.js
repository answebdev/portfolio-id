import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Adj01 from '../../img/adj1.webp';
import Adj02 from '../../img/adj2.webp';
import Mockup from '../../img/adjMockup06.webp';
import Storyboard from '../../img/storyboard.webp';
import StoryboardPDF from '../../pdf/participial-adjectives-storyboard.pdf';
import certificate from '../../pdf/certificate.pdf';
import JSCode from '../../img/JavaScriptCode.webp';
import StorylineJS from '../../img/StorylineJavaScript.webp';
import Certificate from '../../img/certificate-pdf.webp';
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
                  (English as a Second Language) learners is participial
                  adjectives, and knowing when to use the correct form (e.g., "I
                  am bored" versus "I am boring"). This interactive Storyline
                  lesson aims to clarify this area of confusion by reviewing the
                  different forms and providing examples for each, and by
                  allowing the learner to check his or her understanding of the
                  target grammar presented. The lesson includes an interactive
                  drag and drop matching exercise, along with a summary of the
                  forms presented, and a downloadable PDF of common participial
                  adjectives for learners. By the end, learners should be able
                  to understand the difference between the past participle and
                  present participle forms, and when to use each form. The
                  lesson ends with a set of exercises aimed at testing the
                  learner's understanding of the grammar. Upon completion, the
                  learner is given the choice to review the answers, view the
                  results in printable form, or retry the exercises, as well as
                  download a personalized certificate of completion in PDF
                  format that includes the learners name.
                </p>
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
                <p>Articulate Storyline, Canva, jsPDF</p>

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
                  A common area of confusion for ESL learners is participial
                  adjectives. Coming from an ESL teaching background, I
                  recognize this area of confusion and the common mistakes that
                  are made when participial adjectives are used. It is not
                  uncommon, for example, for learners to use the present
                  participle form (e.g., "I am boring"), instead of using the
                  past participle form ("I am bored"). The aim of this lesson,
                  therefore, is to help ESL learners understand the different
                  participial adjective forms, and to understand when to use
                  each form, so that they are able to use the correct form with
                  confidence.
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
                  I created this lesson using Articulate Storyline to help
                  learners understand the difference between the participial
                  adjective forms, and in what situations to use each form. An
                  explanation of each form is given, along with example
                  sentences using the grammatical forms. For review, a summary
                  of the target grammar is presented in a table, along with a
                  downloadable PDF of common participial adjectives that
                  learners can use for supplemental study. I then created an
                  interactive drag and drop matching exercise for learners to
                  engage in before testing their knowledge in the set of
                  exercise that follows. In the exercises that follow, learners
                  are given the opportunity to test their knowledge with a set
                  of mutliple choice exercises. Learners are given feedback and
                  are also able to review and/or retry the exercises. The option
                  to print the results provides a comprehensive report of the
                  exercises, which allows learners to visually compare their
                  answers to the correct answers. This feedback is important for
                  learners so that they are able to know how well they are able
                  to understand the target grammar.
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
                  After completing the lesson, learners should be able to
                  recognize the different participial adjective forms and use
                  them with confidence. Given a set of exercises at the end of
                  the lesson, learners should be able to select the correct
                  participial adjective form for each sentence. Furthermore,
                  learners will be able to download a supplemental PDF of common
                  participial adjectives that contains a list of common
                  adjectives in both the past and present participle forms,
                  along with examples for each. This can be downloaded and saved
                  by the learner to use as a supplemental resource for reference
                  in his or her studies.
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
                  used. It also lists every slide in complete detail, along with
                  the title of the slide, images and text used, buttons included
                  and what each button does, notes for the developer, and
                  detailed notes on animations used. In the case where
                  activities or multiple-choice questions are used, detailed
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
                <h2 className={classes.Title}>Printable PDF Certificate</h2>
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
                  JavaScript to print the learner's name and date on the
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
                    href={JSCode}
                    data-fancybox='images'
                    data-caption='JavaScript Code for PDF Certificate'
                  >
                    <Image
                      className={classes.Image2}
                      src={JSCode}
                      alt='JavaScript Code for PDF Certificate'
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
                    href={StorylineJS}
                    data-fancybox='images'
                    data-caption='JavaScript Code in Storyline'
                  >
                    <Image
                      className={classes.Image2}
                      src={StorylineJS}
                      alt='JavaScript Code in Storyline'
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
                    href={Certificate}
                    data-fancybox='images'
                    data-caption='Certificate in PDF Format'
                  >
                    <Image
                      className={classes.Image2}
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
                      href={Adj01}
                      data-fancybox='images'
                      data-caption='Screenshot of Participial Adjectives Lesson'
                    >
                      <Image
                        className={classes.Image}
                        src={Adj01}
                        alt='Screenshot of Participial Adjectives Lesson'
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
                      href={Adj02}
                      data-fancybox='images'
                      data-caption='Screenshot of Participial Adjectives Lesson'
                    >
                      <Image
                        className={classes.Image}
                        src={Adj02}
                        alt='Screenshot of Participial Adjectives Lesson'
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

export default ParticipialAdjectives;
