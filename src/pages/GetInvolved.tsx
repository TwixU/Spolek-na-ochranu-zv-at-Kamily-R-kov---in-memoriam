import React from 'react';
import { Heart, Users } from 'lucide-react';

const GetInvolved: React.FC<{ title?: string }> = ({ title }) => {
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
                Support Us Through Donations or Volunteering
            </p>

            {/* Intro */}
            <div style={{ maxWidth: '800px', margin: '0 auto var(--spacing-lg)' }}>
                <p>We deeply appreciate your interest in supporting our cause. As a non-profit organization, we rely on the generosity of individuals like you. Whether you contribute funds, time, or skills, you become a vital part of our rescue mission. Here are the main ways you can get involved and make a difference:</p>
            </div>

            {/* Donate Section */}
            <div style={{ maxWidth: '900px', margin: '0 auto var(--spacing-lg)' }}>
                <section style={{
                    marginBottom: 'var(--spacing-xl)',
                    padding: 'var(--spacing-md)',
                    backgroundColor: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: 'var(--spacing-sm)' }}>
                        <div style={{ backgroundColor: 'var(--color-accent)', padding: '10px', borderRadius: '50%' }}>
                            <Heart color="white" size={24} />
                        </div>
                        <h2 style={{ margin: 0 }}>Donate</h2>
                    </div>

                    <p style={{ marginBottom: 'var(--spacing-sm)' }}>
                        Financial contributions directly translate into saved lives. Donations enable us to pay for veterinary surgeries, medications, food, shelter maintenance, and outreach programs – everything our animals and community need. No amount is too small: even a few hundred Czech crowns can buy a week’s worth of pet food or life-saving vaccines.
                    </p>

                    <ul style={{ paddingLeft: '20px', marginBottom: 'var(--spacing-md)' }}>
                        <li style={{ marginBottom: '10px' }}><strong>One-Time or Monthly Gifts:</strong> You can make a one-time donation to immediately help an animal in need, or set up a monthly donation to sustain our work year-round. As a registered public-benefit organization, donations may be tax-deductible as allowed by Czech law.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Sponsor a Specific Need:</strong> If you prefer, you can direct your gift to a specific purpose. For example, donate toward “Max’s surgery” or “Kitten care fund.”</li>
                        <li style={{ marginBottom: '10px' }}><strong>In-Kind Donations:</strong> We also welcome supplies. Items like pet food, carriers, clean blankets/towels, toys, and medical supplies (unopened) can be dropped off or shipped to us.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Legacy and Tribute Gifts:</strong> Consider including our organization in your will or donating in honor/memory of a loved one.</li>
                    </ul>

                    <p style={{ fontStyle: 'italic', marginBottom: 'var(--spacing-md)' }}>
                        Every koruna donated goes toward the animals. We maintain low overhead and publish annual reports so you can see exactly how funds are used.
                    </p>

                    <button style={{
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        border: 'none',
                        padding: '12px 30px',
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        borderRadius: 'var(--radius-md)',
                        cursor: 'pointer'
                    }}>
                        Donate Now
                    </button>
                </section>

                {/* Volunteer Section */}
                <section style={{
                    marginBottom: 'var(--spacing-xl)',
                    padding: 'var(--spacing-md)',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: 'var(--spacing-sm)' }}>
                        <div style={{ backgroundColor: 'var(--color-secondary)', padding: '10px', borderRadius: '50%' }}>
                            <Users color="white" size={24} />
                        </div>
                        <h2 style={{ margin: 0 }}>Volunteer</h2>
                    </div>

                    <p style={{ marginBottom: 'var(--spacing-sm)' }}>
                        Volunteers are the heart of our organization. By volunteering, you not only help the animals directly but also experience the joy of making a tangible difference. There are many ways to get involved, suitable for different skills and schedules:
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: 'var(--spacing-md)' }}>
                        <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: 'var(--radius-sm)' }}>
                            <h4 style={{ color: 'var(--color-primary)' }}>Animal Care</h4>
                            <p style={{ fontSize: '0.9rem' }}>Help feed, groom, and socialize animals at our shelter or in foster homes. Dogs need walking and playtime; cats appreciate cuddles.</p>
                        </div>
                        <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: 'var(--radius-sm)' }}>
                            <h4 style={{ color: 'var(--color-primary)' }}>Foster a Pet</h4>
                            <p style={{ fontSize: '0.9rem' }}>Open your home temporarily to an animal in need. Fostering is critical when our shelter space is limited. We provide food and medical care.</p>
                        </div>
                        <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: 'var(--radius-sm)' }}>
                            <h4 style={{ color: 'var(--color-primary)' }}>Event and Outreach</h4>
                            <p style={{ fontSize: '0.9rem' }}>Join us at adoption days, fundraising events, or school visits. Help set up booths and talk to the public.</p>
                        </div>
                        <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: 'var(--radius-sm)' }}>
                            <h4 style={{ color: 'var(--color-primary)' }}>Professional Skills</h4>
                            <p style={{ fontSize: '0.9rem' }}>Lend us your expertise. Photographers, graphic designers, writers, and drivers – there’s a way to use your talent to help animals.</p>
                        </div>
                        <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: 'var(--radius-sm)' }}>
                            <h4 style={{ color: 'var(--color-primary)' }}>Administrative</h4>
                            <p style={{ fontSize: '0.9rem' }}>Assist with data entry, mailings, or translations. These tasks keep us running smoothly.</p>
                        </div>
                    </div>

                    <p style={{ marginBottom: 'var(--spacing-md)' }}>
                        Volunteering can be flexible. We provide any necessary training. Youth volunteers under 18 can help with parental permission.
                    </p>

                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                        <button style={{
                            backgroundColor: 'var(--color-secondary)',
                            color: 'white',
                            border: 'none',
                            padding: '12px 30px',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            borderRadius: 'var(--radius-md)',
                            cursor: 'pointer'
                        }}>
                            Volunteer Signup
                        </button>
                        <button style={{
                            backgroundColor: 'transparent',
                            color: 'var(--color-primary)',
                            border: '2px solid var(--color-primary)',
                            padding: '12px 30px',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            borderRadius: 'var(--radius-md)',
                            cursor: 'pointer'
                        }}>
                            Foster a Pet
                        </button>
                    </div>
                </section>

                {/* Other Ways */}
                <section>
                    <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>Other Ways to Help</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '15px' }}>
                            <strong>Spread the Word:</strong> Follow us on social media and share our posts. Word-of-mouth is powerful!
                        </li>
                        <li style={{ marginBottom: '15px' }}>
                            <strong>Corporate Partnerships:</strong> Sponsorships, workplace fundraising, or matching employee donations.
                        </li>
                        <li style={{ marginBottom: '15px' }}>
                            <strong>Attend Our Events:</strong> Charity bazaars, pet adoption days, educational workshops.
                        </li>
                    </ul>
                </section>

            </div>
        </div>
    );
};

export default GetInvolved;
