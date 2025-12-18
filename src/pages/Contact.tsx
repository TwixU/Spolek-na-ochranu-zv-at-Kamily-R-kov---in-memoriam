import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Contact: React.FC<{ title?: string }> = ({ title }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            navigate('/thank-you');
        }, 500);
    };

    return (
        <div className="container" style={{ padding: 'var(--spacing-lg) var(--spacing-sm)' }}>
            {/* Header */}
            <h1 style={{
                textAlign: 'center',
                marginBottom: 'var(--spacing-md)',
                fontSize: '2.5rem'
            }}>
                {title}
            </h1>
            <p style={{
                textAlign: 'center',
                fontSize: '1.2rem',
                maxWidth: '800px',
                margin: '0 auto var(--spacing-lg)',
                color: 'var(--color-primary-dark)'
            }}>
                We’d Love to Hear From You
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>

                {/* Contact Info */}
                <div style={{ backgroundColor: 'white', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                    <h2 style={{ marginBottom: 'var(--spacing-md)', color: 'var(--color-primary)' }}>Get in Touch</h2>
                    <p style={{ marginBottom: 'var(--spacing-md)' }}>
                        We welcome any inquiries, offers of help, or questions about our programs. Please feel free to reach out using the contact information below. A member of our team will respond as soon as possible to assist you.
                    </p>

                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
                            <Mail color="var(--color-secondary)" size={24} />
                            <div>
                                <strong>Email:</strong><br />
                                <a href="mailto:info@spoleknaochranu.org">info@spoleknaochranu.org</a>
                                <div style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginTop: '5px' }}>For general inquiries, volunteer applications, or to report an animal in need.</div>
                            </div>
                        </li>
                        <li style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
                            <Phone color="var(--color-secondary)" size={24} />
                            <div>
                                <strong>Phone:</strong><br />
                                <a href="tel:+420710398001">+420 710 398 001</a>
                                <div style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginTop: '5px' }}>Mon–Fri, 9:00–17:00</div>
                            </div>
                        </li>
                        <li style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
                            <MapPin color="var(--color-secondary)" size={24} />
                            <div>
                                <strong>Addresses:</strong><br />
                                <span style={{ display: 'block', marginTop: '5px' }}>
                                    <em>Registered & Operational Office:</em><br />
                                    Lucemburská 1599/31, Žižkov,<br />
                                    130 00 Praha 3, Czech Republic
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Contact Form */}
                <div style={{ backgroundColor: 'white', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                    <h2 style={{ marginBottom: 'var(--spacing-md)', color: 'var(--color-primary)' }}>Send a Message</h2>
                    <p style={{ marginBottom: 'var(--spacing-md)' }}>If you prefer, you can send us a message directly through this form.</p>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', fontFamily: 'inherit' }}
                            />
                        </div>
                        <button type="submit" style={{
                            backgroundColor: 'var(--color-primary)',
                            color: 'white',
                            padding: '12px 20px',
                            border: 'none',
                            borderRadius: 'var(--radius-md)',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            marginTop: '10px'
                        }}>
                            Send Message
                        </button>
                    </form>
                </div>

            </div>

            {/* Map Placeholder */}
            <div style={{ marginTop: 'var(--spacing-lg)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>Location</h2>
                <div style={{
                    width: '100%',
                    height: '350px',
                    backgroundColor: '#e0e0e0',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#666'
                }}>
                    Map Placeholder - Lucemburská 1599/31, Prague
                    {/* In production would be a real map embed */}
                </div>
            </div>
        </div>
    );
};

export default Contact;
