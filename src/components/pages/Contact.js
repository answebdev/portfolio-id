import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import '../../styles/Contact.css';

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Adolf Schmuck | Contact</title>
      </Helmet>
      <Container>
        <Row>
          <Col md={12}>
            <div>
              <h1>Contact</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
