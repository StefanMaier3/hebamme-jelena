'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={80}
              height={80}
              priority
            />
          </Link>
        </div>

        <button className="mobile-menu-button" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link href="/uber-mich">Über mich</Link></li>
            <li><Link href="/kurse">Kurse</Link></li>
            <li><Link href="/leistungen">Leistungen</Link></li>
            <li><Link href="/preise">Preise</Link></li>
            <li><Link href="/kontakt">Kontakt</Link></li>
          </ul>
        </nav>

        <div className="cta-button">
          <Link href="/contact" className="call-today-btn">
            CALL TODAY
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 