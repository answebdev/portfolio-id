import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import classes from '../../styles/About.module.css';

// import profile from '../../img/profile-alt.jpg';
import busan from '../../img/busan-crop.webp';

import thumb from '../../img/thumb-up.png';
import gear from '../../img/gear.png';
import checkmark from '../../img/checkmark.png';

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Adolf Schmuck | About</title>
      </Helmet>
      <Container className={classes.Container}>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={12}>
              <div>
                <h1 className={classes.PageTitle}>About Me</h1>
              </div>
            </Col>
          </Row>

          {/* <br /> */}
          <br />

          <Row>
            <Col md={5}>
              <div className={classes.ImgDiv}>
                <Image
                  className={classes.ProfileImage}
                  src={busan}
                  fluid
                  alt='Adolf Schmuck'
                />
              </div>
            </Col>

            <Col md={7}>
              {/* <p className={classes.P}>
                Hello and nice to meet you. I am a learning professional with a
                focus on instructional design and eLearning development. I am
                passionate about helping others learn and I love creating
                learning content and learning experiences that inspire interest.
                Most recently, I have been creating course content using the
                online Canvas LMS at Grossmont Community College, where I am
                currently employed as an instructor.
              </p> */}
              <p className={classes.P}>
                Hello and nice to meet you. I am passionate about helping others
                learn and I love creating learning content and learning
                experiences that inspire interest. Most recently, I have been
                creating course content using the online Canvas LMS at Grossmont
                Community College, where I am currently employed as an
                instructor.
              </p>
              <p className={classes.P}>
                I am a client-oriented learning professional with experience in
                creating engaging learning content and developing
                learner-centered solutions. I enjoy designing for various
                environments, such as face-to-face, online, and blended
                learning, and am a skilled trainer and communicator adept at
                delivering training and presentations for various audiences.
              </p>
              <p className={classes.P}>
                I have lived and worked abroad in Taiwan and South Korea. This
                experience has taught me to be adaptable and open to various
                ways of working.
              </p>
            </Col>
          </Row>

          <br />

          <hr />

          <Row>
            <Col md={12}>
              <div>
                <h5 style={{ fontWeight: '400' }}>Skills and Competencies</h5>
              </div>
            </Col>
          </Row>

          <br />

          <Row>
            <Col md={4} style={{ marginBottom: '40px' }}>
              <div>
                <div>
                  <Image
                    className={classes.Icon}
                    class='animated fadeIn'
                    src={checkmark}
                    fluid
                  />
                </div>
                <p
                  style={{
                    textAlign: 'center',
                    fontSize: '17.5px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                  }}
                >
                  Competencies
                </p>
                <div style={{ textAlign: 'center' }}>
                  <p>
                    ADDIE & Agile
                    <br />
                    Assessments
                    <br />
                    Authoring Tools <br />
                    eLearning
                    <br />
                    Intercultural Communication
                    <br />
                    Instructor-Led Training
                    <br />
                    Learning Management Systems <br />
                    Web Development
                    <br />
                    Needs Analysis
                    <br />
                    Online/Blended Learning
                    <br />
                    Storyboarding
                    <br />
                    Course Development
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} style={{ marginBottom: '40px' }}>
              <div>
                <div>
                  <Image className={classes.Icon} src={gear} fluid />
                </div>
                <p
                  style={{
                    textAlign: 'center',
                    fontSize: '17.5px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                  }}
                >
                  Technical
                </p>
                <div style={{ textAlign: 'center' }}>
                  <p>
                    Articulate Storyline
                    <br />
                    Articulate Rise
                    <br />
                    Camtasia
                    <br />
                    Snagit
                    <br />
                    Canvas (LMS)
                    <br />
                    Blackboard (LMS)
                    <br />
                    Audacity
                    <br />
                    Screencastify
                    <br />
                    Canva
                    <br />
                    GIMP
                    <br />
                    InVideo
                    <br />
                    PowerPoint
                  </p>
                </div>
              </div>
            </Col>

            <Col md={4} style={{ marginBottom: '40px' }}>
              <div>
                <div>
                  <Image className={classes.Icon} src={thumb} fluid />
                </div>
                <p
                  style={{
                    textAlign: 'center',
                    fontSize: '17.5px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                  }}
                >
                  Other
                </p>
                <div style={{ textAlign: 'center' }}>
                  <p>
                    HTML
                    <br />
                    CSS
                    <br />
                    JavaScript
                    <br />
                    jQuery
                    <br />
                    Bootstrap
                    <br />
                    Visual Studio Code
                    <br />
                    Zoom
                    <br />
                    Trello
                    <br />
                    Jira
                    <br />
                    Slack
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;
