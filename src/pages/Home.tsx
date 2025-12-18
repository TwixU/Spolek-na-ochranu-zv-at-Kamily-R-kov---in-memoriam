import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Home as HomeIcon } from 'lucide-react';

// NOTE: In a real scenario, we would use imported images. For now, placeholders or CSS backgrounds.

const Home: React.FC<{ title?: string }> = () => {
    return (
        <>
            {/* Hero Section */}
            <section style={{
                backgroundColor: 'var(--color-primary)',
                color: 'white',
                padding: 'var(--spacing-xl) 0',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>
                        Giving Animals a Second Chance
                    </h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto var(--spacing-md)' }}>
                        Rescue and Hope in Prague. Join Spolek na ochranu zvířat Kamily Ráčkové – in memoriam
                        and help us give abandoned animals the life they deserve.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                        <Link to="/get-involved" style={{
                            backgroundColor: 'var(--color-accent)',
                            color: 'var(--color-text-main)',
                            padding: '15px 30px',
                            borderRadius: 'var(--radius-md)',
                            fontWeight: '700',
                            fontSize: '1.1rem'
                        }}>
                            Donate Now
                        </Link>
                        <Link to="/programs" style={{
                            backgroundColor: 'transparent',
                            border: '2px solid white',
                            color: 'white',
                            padding: '15px 30px',
                            borderRadius: 'var(--radius-md)',
                            fontWeight: '700',
                            fontSize: '1.1rem'
                        }}>
                            Our Programs
                        </Link>
                    </div>
                </div>
            </section>

            {/* Intro / Mission */}
            <section style={{ padding: 'var(--spacing-xl) 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ marginBottom: 'var(--spacing-md)', fontSize: '2.5rem' }}>Giving Animals a Second Chance</h2>
                        <p style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-sm)' }}>
                            We are a Prague-based animal rescue organization dedicated to saving abandoned and injured animals by providing urgent care, rehabilitation, and the hope of a loving home. Our mission is simple: no animal should be left to suffer – every cat, dog, or other vulnerable creature deserves a second chance.
                        </p>
                        <p style={{ fontSize: '1.1rem' }}>
                            “Spolek na ochranu zvířat Kamily Ráčkové – in memoriam” carries on the legacy of compassion left by Kamila Ráčková, in whose memory the organization was founded, by rescuing animals in need and finding them caring homes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Support Our Cause */}
            <section style={{ backgroundColor: 'var(--color-bg-light)', padding: 'var(--spacing-xl) 0' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>Why Support Our Cause?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>

                        <div style={{ backgroundColor: 'white', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--color-primary)' }}>Over 20 Years of Impact</h3>
                            <p>Founded in 2001, we have been rescuing animals for over two decades, making a tangible difference in our community every year.</p>
                        </div>

                        <div style={{ backgroundColor: 'white', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--color-primary)' }}>Hundreds of Lives Saved</h3>
                            <p>Thanks to our supporters, hundreds of stray and injured animals have been rescued, healed, and rehomed. Each life saved is a testament to what compassionate action can achieve.</p>
                        </div>

                        <div style={{ backgroundColor: 'white', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--color-primary)' }}>Community Trust</h3>
                            <p>We are a registered non-profit (IČO: 26549832) operating with transparency. Donors and volunteers form the backbone of our work.</p>
                        </div>

                        <div style={{ backgroundColor: 'white', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--color-primary)' }}>Volunteer-Powered</h3>
                            <p>Our team is driven by volunteers from Prague and beyond. This keeps our administrative costs low and our impact high.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Programs at a Glance */}
            <section style={{ padding: 'var(--spacing-xl) 0' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>Our Programs at a Glance</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>

                        <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--color-secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--spacing-sm)' }}>
                                <Shield color="white" size={40} />
                            </div>
                            <h3 style={{ marginBottom: 'var(--spacing-xs)' }}>Rescue & Rehabilitation</h3>
                            <p>Urgent veterinary care and safe haven for animals in distress.</p>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--color-secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--spacing-sm)' }}>
                                <HomeIcon color="white" size={40} />
                            </div>
                            <h3 style={{ marginBottom: 'var(--spacing-xs)' }}>Foster & Adoption</h3>
                            <p>Finding forever homes and providing temporary safe foster care.</p>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--color-secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--spacing-sm)' }}>
                                <Heart color="white" size={40} />
                            </div>
                            <h3 style={{ marginBottom: 'var(--spacing-xs)' }}>Education & Outreach</h3>
                            <p>Promoting responsible pet ownership and kindness in the community.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{
                backgroundColor: 'var(--color-primary-dark)',
                color: 'white',
                padding: 'var(--spacing-xl) 0',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h2 style={{ color: 'white', marginBottom: 'var(--spacing-md)' }}>Get Involved Today</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto var(--spacing-lg)', fontSize: '1.1rem' }}>
                        Every individual can make a difference. Whether you donate, volunteer, or adopt a pet in need, your support saves lives.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                        <Link to="/get-involved" className="btn" style={{
                            backgroundColor: 'var(--color-white)',
                            color: 'var(--color-primary-dark)',
                            padding: '12px 25px',
                            borderRadius: 'var(--radius-md)',
                            fontWeight: '700'
                        }}>
                            Donate
                        </Link>
                        <Link to="/get-involved" className="btn" style={{
                            backgroundColor: 'var(--color-secondary)',
                            color: 'white',
                            padding: '12px 25px',
                            borderRadius: 'var(--radius-md)',
                            fontWeight: '700'
                        }}>
                            Volunteer
                        </Link>
                        <Link to="/contact" className="btn" style={{
                            border: '2px solid white',
                            color: 'white',
                            padding: '12px 25px',
                            borderRadius: 'var(--radius-md)',
                            fontWeight: '700'
                        }}>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
