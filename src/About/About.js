import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutImg from "./About.jpg";
import "../About/About.css";

const About = () => {
  return (
    <div>
      <Container className="my-5 about-us-page">
        <h1 className="text-center">About Us</h1>
        <br />
        <Row>
          <Col md={6}>
            <img
              src={AboutImg}
              alt="Art Gallery"
              className="img-fluid rounded"
            />
          </Col>
          <Col md={6}>
            <h2>Our Story</h2>
            <p>
              Welcome to the Art Gallery! We are passionate about promoting and
              showcasing the finest art pieces from talented artists around the
              world. Our gallery is a place where art lovers can immerse
              themselves in the world of creativity and imagination.
            </p>
            <h2>Our Mission</h2>
            <p>
              <p>
                At the core of our mission is a dedication to fostering a
                vibrant and inclusive global art community. We are committed to
                providing artists of all backgrounds a platform to showcase
                their work, connecting them with a diverse audience of art
                enthusiasts and collectors.
              </p>
              <p>
                We aim to make art accessible, engaging, and educational. Our
                goal is to create an environment where everyone can explore and
                appreciate the beauty of artistic expression, regardless of
                their prior experience. We believe that art is a powerful means
                of expression and a catalyst for positive change. It has the
                potential to challenge assumptions, raise awareness, and inspire
                meaningful conversations. We're dedicated to supporting art that
                addresses important social issues, champions diversity and
                inclusion, and promotes sustainability.{" "}
              </p>

              <p>
                Through our gallery, we strive to offer a curated experience
                that brings together a diverse array of artistic styles and
                mediums. We are passionate about helping emerging talents find
                their voice and supporting established artists in their ongoing
                journeys.{" "}
              </p>
              <p>
                In summary, our mission is to bridge the gap between artists and
                art lovers, facilitate creative expression and education, and be
                a force for positive change. We envision a world where art is
                celebrated, valued, and used to connect people and inspire
                transformative action.
              </p>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
