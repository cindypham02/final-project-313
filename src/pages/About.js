import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Header title="About" />
      <main className="about-main p-6">
        <h2 className="about-title text-2xl mb-4">About Me</h2>
        <p className="about-text">
          Hello! My name is Cindy Pham, and I am a Senior at Purdue University Indianapolis,
          majoring in Software and Web Development. I have a strong passion for combining
          creativity with technical proficiency. I have dedicated my academic journey and
          projects to honing my skills in crafting dynamic user experiences and building
          innovative web solutions.
        </p>

        <h2 className="about-title text-2xl mb-4">Core Values</h2>
        <p className="about-text">
          I believe that innovation, creativity, and excellence are essential to 
          producing meaningful work. From designing web applications and crafting 
          visually engaging interfaces to building backend systems, I approach every 
          challenge with a commitment to detail and continuous learning. 
        </p>

         <h2 className="about-title text-2xl mb-4">What Sets Me Apart</h2>
        <p className="about-text">
          What makes me unique is my ability to merge technical knowledge with a 
          creative vision. I enjoy solving complex problems and bringing ideas to 
          life through code and design. I believe that the smallest details can 
          profoundly enhance the overall user experience. 
        </p>

      </main>
      <Footer />
    </div>
  );
};

export default About;
