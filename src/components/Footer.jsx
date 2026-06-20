import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full border-t border-outline-variant/60 bg-surface-container-lowest">
      <div className="flex flex-col md:flex-row justify-between items-start gap-gutter px-margin-mobile md:px-margin-desktop py-huge max-w-container-max mx-auto">
        <div className="space-y-xl w-full md:w-1/3">
          <Link to="/" className="font-display-lg text-headline-md text-primary select-none block">
            AESTHETE
          </Link>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-[20rem] leading-relaxed">
            Redefining modern luxury through the lens of architectural minimalism and editorial integrity.
          </p>
          <div className="flex gap-lg">
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">camera</span>
            </a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">link</span>
            </a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-xl w-full md:w-2/3">
          <div className="space-y-md">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block font-semibold">COLLECTIONS</span>
            <ul className="space-y-sm">
              <li>
                <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="/shop">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="/shop">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="/collections">
                  Archive
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-md">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block font-semibold">EDITORIAL</span>
            <ul className="space-y-sm">
              <li>
                <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">
                  The Vision
                </a>
              </li>
              <li>
                <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">
                  Materiality
                </a>
              </li>
              <li>
                <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">
                  Runway
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-md">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block font-semibold">SUPPORT</span>
            <ul className="space-y-sm">
              <li>
                <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">
                  Shipping
                </a>
              </li>
              <li>
                <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">
                  Returns
                </a>
              </li>
              <li>
                <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-md">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block font-semibold">SOCIAL</span>
            <ul className="space-y-sm">
              <li>
                <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">
                  Instagram
                </a>
              </li>
              <li>
                <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">
                  Pinterest
                </a>
              </li>
              <li>
                <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">
                  Vimeo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="px-margin-mobile md:px-margin-desktop py-lg border-t border-outline-variant max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant font-label-sm text-label-sm">
        <span>© 2024 AESTHETE. ALL RIGHTS RESERVED.</span>
        <div className="flex gap-8">
          <a className="hover:text-primary uppercase tracking-wider" href="#">Privacy Policy</a>
          <a className="hover:text-primary uppercase tracking-wider" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
