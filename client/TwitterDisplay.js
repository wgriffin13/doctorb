import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class TwitterDisplay extends Component {
  loadTwitter() {
    console.log('Use Load twitter');
    window.twttr = (function(d, s, id) {
      let js,
        fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://platform.twitter.com/widgets.js';
      fjs.parentNode.insertBefore(js, fjs);
      t._e = [];
      t.ready = function(f) {
        t._e.push(f);
      };
      return t;
    })(document, 'script', 'twitter-wjs');
  }

  componentDidMount() {
    console.log('load');
    this.loadTwitter();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs md={12}>
            {/* <Col xs md={12}> */}
            <a
              className="twitter-timeline"
              href="https://twitter.com/VascularDr?ref_src=twsrc%5Etfw"
              data-width="360"
              data-height="1200"
            >
              Tweets by VascularDr
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TwitterDisplay;
