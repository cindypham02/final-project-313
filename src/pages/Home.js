import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Accordion from '../components/Accordion';

// Import images directly from the src/images folder
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';

const Home = () => {
  return (
    <div>
      <Header title="Portfolio Showcase Home" />
      <main className="p-6">
        {/* Featured Images Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Featured Work</h2>
          {/* Pass images array to the Carousel component */}
          <Carousel images={[image1, image2, image3]} />
        </section>

        {/* Skills and Expertise Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Skills and Expertise</h2>
          <Accordion title="Programming Languages" content="JavaScript, Python, SQL, EJS, and HTML." />
          <Accordion 
            title="Development Tools" 
            content={(
              <>
                Frontend: React, jQuery, Bootstrap, Tailwind CSS <br />
                Backend: Node.js, Express.js <br />
                Collaboration: Github <br />
                Deployment: Render
              </>
            )}
          />
          <Accordion title="UI/UX Design" content="Proficient in creating user-friendly designs with tools such as Figma, Adobe, and Canva." />
          <Accordion title="Database Management" content="Experienced in SQL for creating, querying, and managing relational databases." />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

