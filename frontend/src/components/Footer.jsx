import React from 'react';
import { Link } from 'react-router-dom';
import FOOTER_LINKS from '../assets/footer_links';
import SOCIALS from '../assets/socials';
import FOOTER_CONTACT_INFO from '../assets/footer_contact';

const Footer = () => {
  return (
    <footer className="p-20 bg-slate-50">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-8 sm:justify-between md:flex-1">
          {/* Brand Name */}
          <div>
            <Link to={'/'} className="font-semibold text-xl">Shoppee</Link>
          </div>

          {/* Footer Links */}
          {FOOTER_LINKS.map((col) => (
            <FooterColumn title={col.title} key={col.title}>
              <ul className='flex flex-col gap-2 text-gray-600'>
                {col.links.map((link) => (
                  <li key={link}>
                    <Link to="/" className="hover:text-gray-800">{link}</Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          ))}

          {/* Contact Info */}
          <FooterColumn title={FOOTER_CONTACT_INFO.title}>
            <ul className='flex flex-col gap-2 text-gray-600'>
              {FOOTER_CONTACT_INFO.links.map((link) => (
                <li key={link.label}>
                  <p className="font-medium">{link.label}:</p>
                  <p className="text-gray-500">{link.value}</p>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Social Links */}
          <FooterColumn title="Follow Us">
            <ul className='flex gap-4'>
              {SOCIALS.links.map((link, index) => (
                <li key={index}>
                  <Link to={link.url} target="_blank" rel="noopener noreferrer">
                    <img src={link} alt="social-icon" className='h-8 w-8' />
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center text-gray-500 mt-8 border-t pt-4">
          <p>&copy; {new Date().getFullYear()} Shoppee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className='min-w-[200px]'>
      {title && <h4 className='font-semibold mb-2'>{title}</h4>}
      {children}
    </div>
  );
};

export default Footer;
