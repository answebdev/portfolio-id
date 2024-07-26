import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Adj01 from '../../img/adj1.webp';
import Adj02 from '../../img/adj2.webp';
import AdjStoryboardImage from '../../img/adjectives_storyboard_image.webp';
import Storyboard from '../../img/storyboard.webp';
import StoryboardPDF from '../../pdf/participial-adjectives-storyboard.pdf';
import certificate from '../../pdf/certificate_02.pdf';
import JSCode from '../../img/JavaScriptCode.webp';
import StorylineJS from '../../img/StorylineJavaScript.webp';
import Certificate from '../../img/certificate-pdf_02.webp';
import BackButton from '../../components/layout/BackButton';
import classes from '../../styles/ParticipialAdjectivesStoryboard.module.css';

const ParticipialAdjectivesStoryboard = () => {
  return (
    <div>
      <Helmet>
        <title>
          Adolf Schmuck | Projects | Participial Adjectives Storyboard
        </title>
      </Helmet>
      <Container className={classes.Container}>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={12}>
              <div>
                <h2 className={classes.Title}>Storyboard:</h2>
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
                  This is the storyboard for{' '}
                  <a href='/portfolio/participial-adjectives'>
                    <span>Participial Adjectives</span>
                  </a>
                  , an interactive lesson created using Articulate Storyline to
                  improve students' understanding of participial adjectives at
                  an international language school. It was created to plan and
                  design an interactive learning experience that includes an
                  activity and multiple-choice questions to test the
                  understanding of the presented material. In it, I laid out the
                  framework for the lesson, outlining every aspect of the
                  lesson, from the images used to the downloadable certificate
                  at the end of the lesson. From there, I developed the project
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
                    src={AdjStoryboardImage}
                    alt='Participial Adjectives Storyboard'
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
                  used. It also lists every slide in complete detail, along with
                  the title of the slide, images and text used, buttons included
                  and what each button does, notes for the developer, and
                  detailed notes on animations used. In the case where
                  activities or multiple-choice questions are used, detailed
                  information is given regarding the questions and answers used,
                  as well as the correct answers given (seen in later slides).
                  To view the entire storyboard in PDF format, click the View
                  Storyboard button above.
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
                  variant='dark'
                  src={certificate}
                  href={certificate}
                  rel='noopener noreferrer'
                  target='_blank'
                  style={{
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

export default ParticipialAdjectivesStoryboard;
