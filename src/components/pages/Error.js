import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Error = () => {
  return (
    <div>
      <Helmet>
        <title>Adolf Schmuck | Error</title>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css'
        />
        <style type='text/css'>{`
        body {
          background-color: var(--primary) !important;
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

        h2,
        p {
          color: #ffffff;
        }

        h2 {
          letter-spacing: 1.5px;
        }

        p {
          font-size: 20px;
        }

        #error-msg {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        #back-div {
          text-align: center;
        }

        #error-btn {
          font-family: 'Lato';
          font-size: 16px;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: 0.25rem;
          background: #ffffff;
          border-color: #ffffff;
          color: var(--primary);
          transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
          border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
          margin-right: 5px;
          margin-bottom: 40px;
        }

        #error-btn:hover {
          background-color: #333333;
          color: #ffffff;
        }

        #error-btn:active {
          color: #ffffff !important;
          outline: none !important;
          box-shadow: none !important;
        }

        #error-btn:focus {
          background-color: var(--primary) !important;
          color: #ffffff !important;
          outline: none !important;
          box-shadow: none !important;
        }
    `}</style>
      </Helmet>
      <Container fluid>
        <Row>
          <Col md={12}>
            <div id='error-msg'>
              <h2 className='text-center animate__animated animate__hinge'>
                <strong>Oops!</strong>
              </h2>
              <br />
              <p className='text-center'>404 Page Not Found.</p>
              <br />
              <div id='back-div'>
                <Link class='btn btn-primary btn-sm' id='error-btn' to='/'>
                  <i className='fa fa-home'></i> Take Me Home
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Error;
