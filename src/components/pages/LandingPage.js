import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';
import { Helmet } from 'react-helmet';
import $ from 'jquery';
// import bg from '../../img/bg.jpg';
import profile from '../../img/profile-alt.jpg';
import resume from '../../pdf/AdolfSchmuckResume.pdf';

import '../../styles/LandingPage.css';

$(document).ready(function () {
  setTimeout(function () {
    $('#main').removeClass('is-loading');
  }, 1200);
});

// Tooltip
// $(function () {
//   $('[data-toggle="tooltip"]').tooltip();
// });

// $(document).ready(function () {
//   $('[data-toggle="tooltip"]').tooltip();
// });

const LandingPage = () => {
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
        
        .navbar,
        .footer {
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
                  <a
                    data-tip
                    // data-tip='Home'
                    href='/'
                    className='header-button animated fadeInLeft btn-links'
                    data-toggle='tooltip'
                    data-placement='bottom'
                  >
                    <ReactTooltip
                      place='bottom'
                      type='light'
                      effect='solid'
                      textColor='#000000'
                      backgroundColor='#ffffff'
                    >
                      <span>Home</span>
                    </ReactTooltip>
                    <i className='fas fa-home'></i>
                  </a>

                  <Link
                    data-tip
                    to='/about'
                    className='header-button animated fadeInLeft btn-links'
                    data-toggle='tooltip'
                    data-placement='bottom'
                  >
                    <ReactTooltip
                      place='bottom'
                      type='light'
                      effect='solid'
                      textColor='#000000'
                      backgroundColor='#ffffff'
                    >
                      <span>About</span>
                    </ReactTooltip>
                    <i className='fas fa-book'></i>
                  </Link>

                  <Link
                    data-tip
                    to='/projects'
                    className='header-button animated fadeInUp btn-links'
                    data-toggle='tooltip'
                    data-placement='bottom'
                  >
                    <ReactTooltip
                      place='bottom'
                      type='light'
                      effect='solid'
                      textColor='#000000'
                      backgroundColor='#ffffff'
                    >
                      <span>Projects</span>
                    </ReactTooltip>
                    <i className='fas fa-briefcase'></i>
                  </Link>

                  <Link
                    data-tip
                    to='/contact'
                    className='header-button animated fadeInRight btn-links'
                    data-toggle='tooltip'
                    data-placement='bottom'
                  >
                    <ReactTooltip
                      place='bottom'
                      type='light'
                      effect='solid'
                      textColor='#000000'
                      backgroundColor='#ffffff'
                    >
                      <span>Contact</span>
                    </ReactTooltip>
                    <i className='fas fa-envelope-square'></i>
                  </Link>

                  <a
                    data-tip
                    href={resume}
                    rel='noopener noreferrer'
                    target='_blank'
                    className='header-button animated fadeInRight btn-links'
                    data-toggle='tooltip'
                    data-placement='bottom'
                  >
                    <ReactTooltip
                      place='bottom'
                      type='light'
                      effect='solid'
                      textColor='#000000'
                      backgroundColor='#ffffff'
                    >
                      <span>Resume</span>
                    </ReactTooltip>
                    <i className='far fa-file-pdf'></i>
                  </a>
                </div>

                {/* <div className='animated zoomIn'>
                  <a
                    href='/'
                    className='header-button animated fadeInLeft btn-links'
                    data-toggle='tooltip'
                    data-placement='bottom'
                    title='Home'
                  >
                    <i className='fas fa-home'></i>
                  </a>
                  <a
                    href='about'
                    className='header-button animated fadeInLeft btn-links'
                    data-toggle='tooltip'
                    data-placement='bottom'
                    title='About'
                  >
                    <i className='fas fa-book'></i>
                  </a>
                  <a
                    href='projects'
                    className='header-button animated fadeInUp btn-links'
                    data-toggle='tooltip'
                    data-placement='bottom'
                    title='Projects'
                  >
                    <i className='fas fa-briefcase'></i>
                  </a>
                  <a
                    href='contact'
                    className='header-button animated fadeInRight btn-links'
                    data-toggle='tooltip'
                    data-placement='bottom'
                    title='Contact'
                  >
                    <i className='fas fa-envelope-square'></i>
                  </a>
                  <a
                    href='assets/pdf/Adolf_Schmuck_Resume.pdf'
                    rel='noopener noreferrer'
                    target='_blank'
                    className='header-button animated fadeInRight btn-links'
                    data-toggle='tooltip'
                    data-placement='bottom'
                    title='Resume'
                  >
                    <i className='far fa-file-pdf'></i>
                  </a>
                </div> */}
              </section>
            </header>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;

// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { Helmet } from 'react-helmet';
// import bg from '../../img/bg.jpg';

// const LandingPage = () => {
//   return (
//     <div>
//       <Helmet>
//         <title>Adolf Schmuck</title>
//         <style type='text/css'>{`
//         body {
//           background-color: #26231e;
//         }

//         .container {
//           max-width: 100%;
//           height: 100%;
//           margin: auto;
//           overflow: hidden;
//           padding: 0;
//         }

//         .navbar,
//         .footer {
//           display: none;
//         }
//     `}</style>
//       </Helmet>
//       <Container className='container' fluid>
//         <Row>
//           <Col md={12}>
//             <header
//               id='landing-header'
//               style={{
//                 backgroundImage: `url(${bg})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//               }}
//             >
//               <h1 id='landing-msg'>
//                 <a id='landing' href='/home'>
//                   Adolf Schmuck
//                 </a>
//               </h1>
//             </header>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default LandingPage;
