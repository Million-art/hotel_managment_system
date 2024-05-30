import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="px-5 py-3">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <h5>Social Links</h5>
          <p>LinkedIn</p>
          <p>Telegram</p>
          <p>Twitter (x)</p>
        </div>
        <div className="md:w-1/3 mb-4 md:mb-0">
          <h5>Social Links</h5>
        </div>
        <div className="md:w-1/3 mb-4 md:mb-0">
          <h5>Contact</h5>
          <p>+251 9-43-78-91-01</p>
          <p>+251 7-01-09-00-22</p>
        </div>
      </div>
      <hr className="my-4 md:hidden" />
      <div className="flex justify-center">
        <h5>&copy; All rights reserved 2024</h5>
      </div>
    </footer>
  );
};

export default Footer;
