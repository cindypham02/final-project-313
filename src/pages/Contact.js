import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from '../components/Modal';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header title="Contact" />
      <main className="contact-main p-6">
        <h2 className="contact-title text-2xl mb-4">Contact Me</h2>
        <ul className="contact-details">
          <li className="contact-item mb-2">University Email: qdpham@purdue.edu</li>
          <li className="contact-item mb-2">Email: cindypham0814@gmail.com</li>
          <li className="contact-item">Phone: (317) 260-1745</li>
        </ul>

        {/* Button Modal */}
        <button
          onClick={openModal}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 mt-6"
        >
          Click Here For Social Media
        </button>

        {/* Modal */}
        <Modal 
  isOpen={isModalOpen} 
  onClose={closeModal} 
  content={
    <>
      Social Media: <br />
      LinkedIn: @Cindy Pham <br />
      Github: @cdpham and @cindypham02
    </>
  } 
/>

      </main>
      <Footer />
    </div>
  );
};

export default Contact;

