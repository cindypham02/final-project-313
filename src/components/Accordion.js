import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item border p-4 mb-2">
      <button
        onClick={toggleAccordion}
        className="accordion-header text-xl font-semibold w-full text-left"
      >
        {title}
      </button>
      {isOpen && <div className="accordion-content mt-2">{content}</div>}
    </div>
  );
};

export default Accordion;
