import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

import ReactWOW from 'react-wow';
import 'animate.css/animate.min.css';

import '../css/fontawesome-all.css';
import './contact.css';

const Contact: React.FC = () => {

    const currentYear = (): number => new Date().getFullYear();

    return (
        <section id="contact">
            <Container>
                <Row>
                    <Col lg="2"></Col>
                    <Col lg="8" className="text-center">
                        <h2 className="contact">Let's Get In Touch!</h2>
                        <hr className="contact" />
                        <p>
                            Ready to start your next project with me? Curious what I am up to? Have a food, film, book
                            or music recommendation?
                        </p>
                    </Col>
                </Row>
                <Row id="cicons">
                    <Col lg="4" className="text-center">
                        <a href="https://twitter.com/mhandlon">
                            {/*<ReactWOW animation="bounceIn" delay=".1s">*/}
                                <FontAwesomeIcon icon={faTwitter} className="fa-3x"/>
                                {/*<i className="fab fa-twitter fa-3x wow bounceIn" data-wow-delay=".1s"></i>*/}
                            {/*</ReactWOW>*/}
                            <p>mhandlon</p>
                        </a>
                    </Col>
                    <Col lg="4" className="text-center">
                        <a href="https://github.com/mhandlon">
                            {/*<i className="fab fa-github fa-3x wow bounceIn" data-wow-delay=".1s"></i>*/}
                            <FontAwesomeIcon icon={faGithub} className="fa-3x"/>
                            <p>mhandlon</p>
                        </a>
                    </Col>
                    <Col lg="4" className="text-center">
                        <a href="mailto:mhandlon@pm.me">
                            <FontAwesomeIcon icon={faEnvelope} className="fa-3x" />
                            {/*<i className="far fa-envelope fa-3x wow bounceIn" data-wow-delay=".1s"></i>*/}
                            <p>mhandlon@pm.me</p>
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12">
                        <p className="text-center copyright">
                            © 2014-{currentYear()} Michael Handlon
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;