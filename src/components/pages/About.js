import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Adolf Schmuck | About</title>
      </Helmet>
      <Container>
        <Row>
          <Col md={12}>
            <header>
              <h1>About</h1>
            </header>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
