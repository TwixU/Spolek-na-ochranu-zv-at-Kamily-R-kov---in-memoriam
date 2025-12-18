import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
// styles import removed

// Let's stick to inline/standard CSS classes defined in index.css or a specific file to keep it simple as per plan.
// We will use standard classes.

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const isActive = (path: string) => location.pathname === path;

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Programs', path: '/programs' },
        { name: 'Get Involved', path: '/get-involved' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header style={{
            backgroundColor: 'var(--color-white)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            position: 'sticky',
            top: 0,
            zIndex: 1000
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '80px'
            }}>
                {/* Logo Area */}
                <Link to="/" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {/* Placeholder Logo Icon */}
                    <Heart fill="var(--color-primary)" color="var(--color-primary)" size={32} />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{
                            fontFamily: 'var(--font-heading)',
                            fontWeight: '700',
                            fontSize: '1.2rem',
                            color: 'var(--color-primary-dark)',
                            lineHeight: '1.1'
                        }}>
                            Spolek na ochranu zvířat
                        </span>
                        <span style={{
                            fontSize: '0.8rem',
                            color: 'var(--color-text-light)',
                            fontStyle: 'italic'
                        }}>
                            Kamily Ráčkové – in memoriam
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav style={{ display: 'none', gap: '30px' }} className="desktop-nav">
                    <style>{`
            @media (min-width: 768px) {
              .desktop-nav { display: flex !important; }
              .mobile-toggle { display: none !important; }
            }
          `}</style>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            style={{
                                fontWeight: isActive(link.path) ? '700' : '500',
                                color: isActive(link.path) ? 'var(--color-primary)' : 'var(--color-text-main)',
                                transition: 'color 0.3s ease',
                                fontSize: '1rem'
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/get-involved"
                        style={{
                            backgroundColor: 'var(--color-primary)',
                            color: 'white',
                            padding: '10px 20px',
                            borderRadius: 'var(--radius-md)',
                            fontWeight: '600',
                            transition: 'background-color 0.3s'
                        }}
                    >
                        Donate
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={toggleMenu}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--color-text-main)'
                    }}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div style={{
                    position: 'absolute',
                    top: '80px',
                    left: 0,
                    right: 0,
                    backgroundColor: 'var(--color-white)',
                    padding: '20px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    borderTop: '1px solid var(--color-border)'
                }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={closeMenu}
                            style={{
                                fontSize: '1.2rem',
                                fontWeight: isActive(link.path) ? '700' : '500',
                                color: isActive(link.path) ? 'var(--color-primary)' : 'var(--color-text-main)'
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;
