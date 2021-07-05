import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import classes from '../../styles/About.module.css';

import profile from '../../img/profile-alt.jpg';
import busan from '../../img/busan-crop.png';

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
                <h1 className={classes.PageTitle}>About</h1>
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
                I enjoy designing for various environment such as face-to-face,
                online, and blended learning. I especially enjoy creating
                e-learning as I can tap into my artistic skills to incorporate
                multimedia and storytelling. I like to incorporate my media and
                artistic skills with my instructional design skills to create
                engaging and dynamic learning programs and opportunities.
              </p>
              <p className={classes.P}>
                I have lived and worked abroad in Taiwan and South Korea. This
                experience has taught me to be adaptable and open to various
                ways of working.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;
