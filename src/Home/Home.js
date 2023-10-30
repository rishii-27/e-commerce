import React from "react";
import { Container, Button } from "react-bootstrap";
import "../Home/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section bg-dark text-white text-center py-5">
        <h1>Welcome to the Art Gallery</h1>
        <Link to="/contactus">
          <Button variant="primary">Contact Artwork</Button>
        </Link>
      </div>

      {/* Discover the Extraordinary */}
      <Container className="my-5 ">
        <h2>Discover the Extraordinary</h2>
        <p>
          As you step into our digital gallery, be prepared to be mesmerized. We
          curate a diverse collection of art from talented artists worldwide.
          From traditional oil paintings to contemporary digital art, we
          celebrate a multitude of artistic styles and mediums. Our aim is to
          showcase the extraordinary, to immerse you in a world where every
          stroke, every color, and every concept tells a unique story.
        </p>
      </Container>

      {/* A Home for Artists */}
      <Container className="my-5">
        <h2>A Home for Artists</h2>
        <p>
          We're more than just a gallery; we're a haven for artists. We believe
          in nurturing creativity, and our platform serves as a launching pad
          for emerging talents. Whether you're a painter, sculptor,
          photographer, or any other form of creative artist, we offer you a
          space to exhibit your work to a global audience. Our commitment is to
          provide exposure, support, and a sense of community for all artists.
        </p>
      </Container>

      {/* Passion Meets Collection */}
      <Container className="my-5">
        <h2>Passion Meets Collection</h2>
        <p>
          Our collection is a reflection of our passion for art. It's a
          handpicked selection of pieces that evoke emotion, provoke thought,
          and simply take your breath away. We invite you to explore our
          ever-evolving gallery, where you'll find a variety of themes, moods,
          and inspirations. Whether you're an art collector, enthusiast, or
          someone just beginning their art journey, we're here to guide you
          through a world of endless possibilities.
        </p>
      </Container>

      {/* Connecting Art Enthusiasts */}
      <Container className="my-5">
        <h2>Connecting Art Enthusiasts</h2>
        <p>
          Art is more than just visuals; it's a connection. It's the bond that
          forms between the artist and the viewer. We're committed to
          facilitating this connection by providing you with in-depth insights
          into the artist's inspiration and journey. When you purchase a piece
          from our gallery, you're not just buying art; you're becoming a part
          of a story, a narrative that will continue to unfold.
        </p>
      </Container>

      {/* Art for Change */}
      <Container className="my-5">
        <h2>Art for Change</h2>
        <p>
          We're not just about aesthetics; we believe art has the power to drive
          change. Our gallery showcases artwork that addresses important social
          issues, challenges norms, and promotes inclusivity. Art has the
          capacity to bring about awareness and ignite action, and we're
          dedicated to supporting this purpose.
        </p>
      </Container>

      {/* Get Inspired */}
      <Container className="my-5">
        <h2>Get Inspired</h2>
        <p>
          Art has the power to inspire and elevate. At the Art Gallery, you'll
          find inspiration at every turn. Whether you're a seasoned art
          aficionado or just beginning to explore the world of creativity, we
          invite you to join us on this remarkable journey.
        </p>
      </Container>
    </div>
  );
};

export default Home;
