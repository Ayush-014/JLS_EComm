import React from 'react';
import { Button } from '../index.components.js';
import { FOOTER_DATA } from '../../../constant.jsx';

const Footer = () => {
  const renderListItems = (items) => (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item}>
          <a href="#" className="hover:font-medium transition-colors">
            {item}
          </a>
        </li>
      ))}
    </ul>
  );

  const renderContactInfo = (contact) => (
    <ul className="space-y-2">
      <li>
        <a href={`mailto:${contact.email}`} className="text-lg hover:font-medium transition-colors">
          {contact.email}
        </a>
      </li>
      {contact.phone && (
        <li>
          <a href={`tel:${contact.phone.replace(/-/g, '')}`} className="text-lg hover:font-medium transition-colors">
            {contact.phone}
          </a>
        </li>
      )}
    </ul>
  );

  const renderAppButtons = (apps) => (
    <div className="space-y-2">
      {Object.values(apps).map((app) => (
        <Button 
          key={app.text}
          variant="outline" 
          className="w-full flex items-center justify-center gap-2"
          onClick={() => window.open(app.url, '_blank')}
        >
          {app.icon}
          {app.text}
        </Button>
      ))}
    </div>
  );

  return (
    <footer className="pt-8 pb-4 bg-gray-100">
      <div className="container mx-auto">
        {/* followUs at top with w-full */}
        <div className="w-full mb-8 text-center bg-gray-900 text-white p-6">
          <h3 className="text-xl font-bold mb-4">FOLLOW US</h3>
          <div className="flex justify-center space-x-6">
            {Object.entries(FOOTER_DATA.SOCIAL_MEDIA_HANDLES).map(([platform, data]) => (
              <a 
                key={platform}
                href={data.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label={platform}
              >
                <span className="w-6 h-6 block">
                  {data.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* 2nd div */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-4">
          {/* render apps */}
          <div className="space-y-4">
            <h3 className="text-lg">DOWNLOAD APP</h3>
            {renderAppButtons(FOOTER_DATA.APPS)}
          </div>

          {/* company info */}
          <div className="space-y-4">
            <h3 className="text-lg">OUR COMPANY</h3>
            {renderListItems(FOOTER_DATA.COMPANY)}
          </div>

          {/* customerCare */}
          <div className="space-y-4">
            <h3 className="text-lg">CUSTOMER CARE</h3>
            {renderListItems(FOOTER_DATA.CUSTOMER_CARE)}
          </div>

          {/* contact */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg">CONTACT US</h3>
              {renderContactInfo(FOOTER_DATA.CONTACT)}
            </div>
          </div>

          {/* career */}
          <div className="space-y-4">
            <h3 className="text-lg">CAREERS</h3>
            <p className="text-lg">
              DROP YOUR ENQUIRIES AT<br />
              <a href={`mailto:${FOOTER_DATA.CAREER.email}`} className="hover:font-medium transition-colors">
                {FOOTER_DATA.CAREER.email}
              </a>
            </p>
          </div>
        </div>

        {/* cpyright last block */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} JLS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;