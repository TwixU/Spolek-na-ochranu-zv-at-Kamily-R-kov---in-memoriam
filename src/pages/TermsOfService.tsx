import React from 'react';

const TermsOfService: React.FC<{ title?: string }> = ({ title }) => {
    return (
        <div className="container" style={{ padding: 'var(--spacing-lg) var(--spacing-sm)', maxWidth: '900px' }}>
            <h1 style={{ marginBottom: 'var(--spacing-sm)' }}>{title}</h1>
            <p style={{ fontStyle: 'italic', marginBottom: 'var(--spacing-md)' }}>Last Updated: December 12, 2025</p>

            <section style={{ marginBottom: 'var(--spacing-md)' }}>
                <p>Welcome to the website of Spolek na ochranu zvířat Kamily Ráčkové – in memoriam (“the Organization,” “we,” or “us”). These Terms of Service (“Terms”) govern your access to and use of our website, spoleknaochranu.org (“the Site”), including any content, functionality, and services offered on or through the Site. By accessing or using our Site, you agree to be bound by these Terms.</p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-md)' }}>
                <h3>1. Acceptance of Terms</h3>
                <p>By using this Site, you affirm that you are at least 18 years old (or, if under 18, that you have obtained parental or guardian consent to use the Site and your guardian agrees to these Terms on your behalf). You also agree that your use of the Site will comply with all applicable laws and regulations.</p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-md)' }}>
                <h3>2. Website Use and Content</h3>
                <p><strong>2.1. Permitted Use:</strong> You are allowed to access and use the Site for lawful, personal, and non-commercial purposes.</p>
                <p><strong>2.2. Prohibited Conduct:</strong> You agree not to misuse our Site. Misuse includes, without limitation: disrupting the Site’s operation, data scraping, impersonation, or harassment.</p>
                <p><strong>2.3. User Contributions:</strong> If our Site allows you to post or submit content, you are solely responsible for anything you submit.</p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-md)' }}>
                <h3>3. Intellectual Property Rights</h3>
                <p><strong>3.1. Our Content:</strong> The Site and its entire contents are owned by Spolek na ochranu zvířat Kamily Ráčkové – in memoriam or licensed to us.</p>
                <p><strong>3.2. Limited License:</strong> We grant you a limited, revocable license to access and use our content for personal, non-commercial purposes. You must not modify copies of any materials or use proprietary notices.</p>
                <p><strong>3.3. User Content:</strong> Any content you submit remains your intellectual property, but you grant us a license to use it for our mission.</p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-md)' }}>
                <h3>4. Donations and Transactions</h3>
                <p><strong>4.1. Donations:</strong> All donation transactions are processed through secure third-party processors. Donations are typically considered final and non-refundable.</p>
                <p><strong>4.2. Accuracy of Information:</strong> You agree to provide current, complete, and accurate information.</p>
                <p><strong>4.3. Tax Receipts:</strong> We will provide necessary documentation for tax deductions as required by law upon request.</p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-md)' }}>
                <h3>5. Third-Party Links and Resources</h3>
                <p>Our Site may contain links to third-party websites. These links are provided for convenience only. We do not have control over the content, privacy policies, or practices of any third-party sites.</p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-md)' }}>
                <h3>6. Disclaimer of Warranties</h3>
                <p>Use at Your Own Risk: Our website and its content are provided on an “as is” and “as available” basis. We make no warranties or representations of any kind about the completeness, accuracy, reliability, or availability of the Site. Any health or care information is provided for general knowledge and is not a substitute for professional veterinary advice.</p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-md)' }}>
                <h3>7. Limitation of Liability</h3>
                <p>To the fullest extent permitted by law, Spolek na ochranu zvířat Kamily Ráčkové – in memoriam will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the Site.</p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-md)' }}>
                <h3>8. Indemnification</h3>
                <p>You agree to indemnify and hold harmless Spolek na ochranu zvířat Kamily Ráčkové – in memoriam from any claims rising from your violation of these Terms.</p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-md)' }}>
                <h3>9. Governing Law and Dispute Resolution</h3>
                <p>These Terms shall be governed by the laws of the Czech Republic. Any legal action shall be brought exclusively in the competent courts of the Czech Republic.</p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-md)' }}>
                <h3>10. Changes to Terms</h3>
                <p>We may revise or update these Terms of Service from time to time. Continued use of our Site following the posting of updated Terms constitutes acceptance of those changes.</p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-md)' }}>
                <h3>11. Termination</h3>
                <p>We reserve the right to terminate or suspend your access to all or part of the Site without notice for any conduct we believe is disruptive or harmful.</p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-md)' }}>
                <h3>12. Contact Information</h3>
                <p>For any questions about these Terms, contact us at info@spoleknaochranu.org or Spolek na ochranu zvířat Kamily Ráčkové – in memoriam, Lucemburská 1599/31, 13000 Praha 3, Czech Republic.</p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-md)' }}>
                <h3>13. Entire Agreement</h3>
                <p>These Terms of Service and our Privacy Policy constitute the entire agreement between you and the Organization regarding the use of the Site.</p>
            </section>

        </div>
    );
};

export default TermsOfService;
