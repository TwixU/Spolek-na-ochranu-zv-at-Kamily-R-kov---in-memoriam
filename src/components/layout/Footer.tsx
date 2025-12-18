import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-primary-dark)', color: 'white', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-md)' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>

                {/* About Column */}
                <div>
                    <h3 style={{ color: 'var(--color-secondary)', marginBottom: 'var(--spacing-sm)' }}>About Us</h3>
                    <p style={{ fontSize: '0.9rem', lineHeight: '1.6', opacity: 0.9 }}>
                        Spolek na ochranu zvířat Kamily Ráčkové – in memoriam.
                        Giving Animals a Second Chance. We are dedicated to rescuing, rehabilitating, and rehoming animals in need.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 style={{ color: 'var(--color-secondary)', marginBottom: 'var(--spacing-sm)' }}>Quick Links</h3>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <li><Link to="/about" style={{ opacity: 0.9 }}>About Us</Link></li>
                        <li><Link to="/programs" style={{ opacity: 0.9 }}>Our Programs</Link></li>
                        <li><Link to="/get-involved" style={{ opacity: 0.9 }}>Volunteer & Donate</Link></li>
                        <li><Link to="/contact" style={{ opacity: 0.9 }}>Contact Us</Link></li>
                        <li><Link to="/privacy" style={{ opacity: 0.9 }}>Privacy Policy</Link></li>
                        <li><Link to="/terms" style={{ opacity: 0.9 }}>Terms of Service</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 style={{ color: 'var(--color-secondary)', marginBottom: 'var(--spacing-sm)' }}>Contact</h3>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                            <MapPin size={20} color="var(--color-secondary)" />
                            <span style={{ fontSize: '0.9rem' }}>
                                Lucemburská 1599/31, Žižkov (Praha 3)<br />
                                130 00 Praha, Czech Republic
                            </span>
                        </li>
                        <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <Mail size={20} color="var(--color-secondary)" />
                            <a href="mailto:info@spoleknaochranu.org" style={{ fontSize: '0.9rem' }}>info@spoleknaochranu.org</a>
                        </li>
                        <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <Phone size={20} color="var(--color-secondary)" />
                            <a href="tel:+420710398001" style={{ fontSize: '0.9rem' }}>+420 710 398 001</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: 'var(--spacing-lg)', paddingTop: 'var(--spacing-md)', textAlign: 'center', fontSize: '0.8rem', opacity: 0.7 }}>
                <p>&copy; 2025 Spolek na ochranu zvířat Kamily Ráčkové – in memoriam. All rights reserved.</p>
                <p>IČO: 26549832</p>
            </div>
        </footer>
    );
};

export default Footer;
