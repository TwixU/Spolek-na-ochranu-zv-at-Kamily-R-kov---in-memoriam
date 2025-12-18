import React from 'react';

const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
    <div className="container" style={{ padding: 'var(--spacing-lg) var(--spacing-sm)' }}>
        <h1>{title}</h1>
        <p>Content coming soon...</p>
    </div>
);

export default PlaceholderPage;
