import React from "react";
import Title from "./Title";

function About() {
  return (
    <div className="about">
      <Title title="About us" />
      
      <p className="about__text">
        It was 1971: a year when the world was beginning to change rapidly with
        an exciting new spirit of digital invention, creativity and imagination
        along with a worldwide drive for new purpose. A new dawn. And yet,
        cycling was still very traditional, very conventional, conforming to
        some sort of rulebook: our founders believed that there had to be a
        better way.
      </p>

      <p className="about__text">
        So we ditched the rulebook, cut a new path and created a new way. From a
        Connecticut workshop we set about revolutionising cycling for the
        better, for everyone. We assumed nothing, we iterated and reiterated and
        from day one we have worked on pioneering materials, ergonomics and
        technology, and we haven’t looked back since.
      </p>
      <img
        src="https://d1mo5ln9tjltxq.cloudfront.net/-/media/images/about-images/aboutus12qa09.jpg?mh=1920&mw=2560&hash=C6F1B7F60AF682BEA81B295D2ABE62D3E4D6DE25"
        alt="img"
        className="about__image"
      />
      <p className="about__text">
        We heralded aluminium and carbon-fibre manufacturing while everybody
        else out there stuck with steel, we shook up the suspension
        establishment with single-sided forks, designing incredible frames and
        products that reinvented racing, creating award-winning bicycles that
        helped push people further.
      </p>
    </div>
  );
}

export default About;
