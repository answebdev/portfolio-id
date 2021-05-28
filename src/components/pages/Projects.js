import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import '../../styles/Projects.css';

const Projects = () => {
  return (
    <div>
      <Helmet>
        <title>Adolf Schmuck | Projects</title>
      </Helmet>
      <Container>
        <Row>
          <Col md={12}>
            <div>
              <h1>Projects</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
