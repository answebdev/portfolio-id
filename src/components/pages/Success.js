import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Success = () => {
  return (
    <div>
      <Helmet>
        <title>Adolf Schmuck | Success</title>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css'
        />
        <style type='text/css'>{`
        body {
          font-family: 'Lato';
          background-color: var(--background);
          color: #ff6347;
        }

        .container {
          max-width: 100%;
          height: 100%;
          margin: auto;
          overflow: hidden;
          padding: 0;
        }
        
        #navbar,
        #footer {
          display: none;
        }

        h3,
        p {
          color: var(--primary);
        }

        h3 {
          font-family: 'Oxygen', sans-serif;
          letter-spacing: 1.5px;
          font-weight: 700;
        }

        p {
          font-size: 20px;
        }

        #success-msg {
          text-align: center;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        #success-btn {
          font-family: 'Lato';
          font-size: 16px;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: 0.25rem;
          background: var(--primary);
          border-color: #ffffff;
          color: #ffffff;
          transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
          border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
          margin-right: 5px;
          margin-bottom: 40px;
        }

        #success-btn:hover {
          background-color: #ffffff !important;
          color: var(--primary) !important;
          text-decoration: none;
          border-color: var(--primary) !important;
        }

        #success-btn:active {
          background-color: var(--primary) !important;
          color: #ffffff !important;
          border: 1px solid var(--primary) !important;
          outline: none !important;
          box-shadow: none !important;
        }
    `}</style>
      </Helmet>
      <Container fluid>
        <Row>
          <Col md={12}>
            <div id='success-msg'>
              <h3 className='text-center'>Thank you!</h3>
              <br />

              <p className='text-center'>Your message has been sent.</p>
              <br />
              <div id='back-div'>
                <a
                  class='btn btn-primary btn-sm'
                  id='success-btn'
                  href='/contact'
                >
                  <i class='fas fa-pencil-alt'></i> Back to Form
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Success;
