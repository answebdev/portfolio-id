import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import '../../styles/About.css';

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Adolf Schmuck | About</title>
        <style type='text/css'>{`
        body {
          background-color: #ffffff;
        }
    `}</style>
      </Helmet>
      <Container>
        <Row>
          <Col md={12}>
            <div>
              <h1>About</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
