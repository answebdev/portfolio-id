import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import $ from 'jquery';
import profile from '../../img/profile-alt.jpg';
import resume from '../../pdf/AdolfSchmuckResume.pdf';

// import classes from '../../styles/Landing.module.css';

import '../../styles/LandingPage.css';

// $(document).ready(function () {
//   setTimeout(function () {
//     $('#main').removeClass('is-loading');
//   }, 1200);
// });

const LandingPage = () => {
  // Put animation effect in useEffect to ensure animation runs when component renders
  useEffect(() => {
    $(document).ready(function () {
      setTimeout(function () {
        $('#main').removeClass('is-loading');
      }, 1200);
    });
  });

  return (
    <div>
      <Helmet>
        <title>Adolf Schmuck</title>
        <style type='text/css'>{`
        body {
          background-color: #26231e;
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
    `}</style>
      </Helmet>
      <Container className='container' fluid>
        <Row>
          <Col md={12}>
            {/* Landing page Adapted from: https://codepen.io/donovanh/pen/PpbvZB  */}

            <header>
              <section className='header-content'>
                <Image
                  className='rocky-dashed animated fadeIn'
                  id='logo'
                  src={profile}
                  alt='Profile picture'
                  fluid
                />
                <div id='main' className='is-loading'>
                  <h1 className='header-title' id='name'>
                    ADOLF SCHMUCK
                  </h1>
                </div>
                <h3 className='header-subtitle animated zoomIn'>
                  INSTRUCTIONAL DESIGNER
                </h3>

                <br />
                <br />

                <div className='animated zoomIn'>
                  <span tooltip='Home' flow='down'>
                    <a
                      // data-tooltip='Home'
                      href='/'
                      className='header-button animated fadeInLeft btn-links'
                    >
                      <i className='fas fa-home'></i>
                    </a>
                  </span>

                  <span tooltip='About' flow='down'>
                    <Link
                      // data-tooltip='About'
                      to='/about'
                      className='header-button animated fadeInLeft btn-links'
                    >
                      <i className='fas fa-book'></i>
                    </Link>
                  </span>

                  <span tooltip='Projects' flow='down'>
                    <Link
                      // data-tooltip='Projects'
                      to='/projects'
                      className='header-button animated fadeInUp btn-links'
                    >
                      <i className='fas fa-briefcase'></i>
                    </Link>
                  </span>

                  <span tooltip='Contact' flow='down'>
                    <Link
                      // data-tooltip='Contact'
                      to='/contact'
                      className='header-button animated fadeInRight btn-links'
                    >
                      <i className='fas fa-envelope-square'></i>
                    </Link>
                  </span>

                  <span tooltip='Resume' flow='down'>
                    <a
                      href={resume}
                      rel='noopener noreferrer'
                      target='_blank'
                      className='header-button animated fadeInRight btn-links'
                    >
                      <i className='far fa-file-pdf'></i>
                    </a>
                  </span>
                </div>
              </section>
            </header>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
