import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import classes from '../../styles/Contact.module.css';

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Adolf Schmuck | Contact</title>
      </Helmet>
      <Container className={classes.Container}>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              {/* <h3>
                <strong>Contact Form</strong>
              </h3> */}
              <div>
                <h1 className={classes.PageTitle}>Contact Me</h1>
              </div>
              <br />
              <div className='content'>
                {/* <p>
                  I am currently looking for an instructional design position.
                  Contact me if you'd like to discuss potential opportunities or
                  just say hi!
                </p> */}
                <p>
                  You can contact me directly by email or through LinkedIn, or
                  you can fill out the form below. I hope to hear from you soon!
                </p>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <p>
                    <strong>Email:</strong> adolf.schmuck@gmail.com
                  </p>
                  <p>
                    <a
                      href='https://www.linkedin.com/in/adolf-schmuck/'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      <span className={classes.LinkInIcon}>
                        <i class='fab fa-linkedin'></i>
                      </span>
                    </a>
                  </p>
                </div>

                <br />

                <Form
                  action='/success'
                  name='adolf-schmuck-contact-form'
                  method='POST'
                  data-netlify='true'
                >
                  <input
                    type='hidden'
                    name='form-name'
                    value='adolf-schmuck-contact-form'
                  />
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type='name'
                      name='name'
                      placeholder='Name'
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type='email'
                      name='email'
                      placeholder='email@example.com'
                      required
                    />
                    {/* <Form.Text className='text-muted'>
                      Your email will never be shared with anyone else.
                    </Form.Text> */}
                  </Form.Group>
                  <Form.Group controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as='textarea'
                      name='message'
                      rows='5'
                      required
                    />
                  </Form.Group>
                  <div className='field'>
                    <div data-netlify-recaptcha='true'></div>
                  </div>
                  <Button
                    className={classes.SendBtn}
                    // className='actions'
                    variant='dark'
                    type='submit'
                    value='Send Message'
                    id='submit-btn'
                  >
                    Send Message
                  </Button>
                </Form>
                <br />
              </div>
            </Col>
            <Col md={3}></Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
