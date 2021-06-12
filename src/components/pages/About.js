import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import classes from '../../styles/About.module.css';

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
      <Container className={classes.Container}>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={12}>
              <div>
                <h1>About</h1>
                <p className={classes.P}>
                  Bonbon soufflé chocolate bar jelly beans cake sesame snaps
                  cheesecake tart caramels. Macaroon brownie jelly-o. Powder
                  jelly beans candy donut sweet lemon drops. Tootsie roll donut
                  pie chupa chups gummi bears oat cake tart marzipan gummies.
                  Bonbon apple pie jujubes topping marshmallow apple pie. Gummi
                  bears liquorice wafer ice cream gingerbread jujubes chocolate
                  cake. Marshmallow jelly icing gummi bears. Jelly-o donut apple
                  pie brownie chocolate cake croissant macaroon danish wafer.
                  Marzipan cake chocolate bar carrot cake liquorice. Muffin
                  macaroon dragée tiramisu jelly-o topping liquorice liquorice.
                  Gummies croissant cake pudding topping. Toffee soufflé cake
                  marshmallow dragée.
                </p>
                <p className={classes.P}>
                  Bonbon soufflé chocolate bar jelly beans cake sesame snaps
                  cheesecake tart caramels. Macaroon brownie jelly-o. Powder
                  jelly beans candy donut sweet lemon drops. Tootsie roll donut
                  pie chupa chups gummi bears oat cake tart marzipan gummies.
                  Bonbon apple pie jujubes topping marshmallow apple pie. Gummi
                  bears liquorice wafer ice cream gingerbread jujubes chocolate
                  cake. Marshmallow jelly icing gummi bears. Jelly-o donut apple
                  pie brownie chocolate cake croissant macaroon danish wafer.
                  Marzipan cake chocolate bar carrot cake liquorice. Muffin
                  macaroon dragée tiramisu jelly-o topping liquorice liquorice.
                  Gummies croissant cake pudding topping. Toffee soufflé cake
                  marshmallow dragée.
                </p>
                <p className={classes.P}>
                  Bonbon soufflé chocolate bar jelly beans cake sesame snaps
                  cheesecake tart caramels. Macaroon brownie jelly-o. Powder
                  jelly beans candy donut sweet lemon drops. Tootsie roll donut
                  pie chupa chups gummi bears oat cake tart marzipan gummies.
                  Bonbon apple pie jujubes topping marshmallow apple pie. Gummi
                  bears liquorice wafer ice cream gingerbread jujubes chocolate
                  cake. Marshmallow jelly icing gummi bears. Jelly-o donut apple
                  pie brownie chocolate cake croissant macaroon danish wafer.
                  Marzipan cake chocolate bar carrot cake liquorice. Muffin
                  macaroon dragée tiramisu jelly-o topping liquorice liquorice.
                  Gummies croissant cake pudding topping. Toffee soufflé cake
                  marshmallow dragée.
                </p>
                <p className={classes.P}>
                  Bonbon soufflé chocolate bar jelly beans cake sesame snaps
                  cheesecake tart caramels. Macaroon brownie jelly-o. Powder
                  jelly beans candy donut sweet lemon drops. Tootsie roll donut
                  pie chupa chups gummi bears oat cake tart marzipan gummies.
                  Bonbon apple pie jujubes topping marshmallow apple pie. Gummi
                  bears liquorice wafer ice cream gingerbread jujubes chocolate
                  cake. Marshmallow jelly icing gummi bears. Jelly-o donut apple
                  pie brownie chocolate cake croissant macaroon danish wafer.
                  Marzipan cake chocolate bar carrot cake liquorice. Muffin
                  macaroon dragée tiramisu jelly-o topping liquorice liquorice.
                  Gummies croissant cake pudding topping. Toffee soufflé cake
                  marshmallow dragée.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;
