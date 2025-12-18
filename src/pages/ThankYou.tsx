import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const ThankYou: React.FC = () => {
    return (
        <div className="container" style={{
            padding: 'var(--spacing-xl) var(--spacing-sm)',
            textAlign: 'center',
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <CheckCircle size={64} color="var(--color-primary)" />
            </div>
            <h1 style={{ marginBottom: 'var(--spacing-sm)' }}>Thank You!</h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto var(--spacing-md)' }}>
                Your message has been sent successfully. We appreciate you reaching out to Spolek na ochranu zvířat Kamily Ráčkové – in memoriam. A member of our team will get back to you as soon as possible.
            </p>
            <Link to="/" style={{
                backgroundColor: 'var(--color-primary)',
                color: 'white',
                padding: '12px 25px',
                borderRadius: 'var(--radius-md)',
                fontWeight: 'bold',
                textDecoration: 'none'
            }}>
                Return to Home
            </Link>
        </div>
    );
};

export default ThankYou;
