import React from 'react';

const PrivacyPolicy: React.FC<{ title?: string }> = ({ title }) => {
    return (
        <div className="container" style={{ padding: 'var(--spacing-lg) var(--spacing-sm)', maxWidth: '900px' }}>
            <h1 style={{ marginBottom: 'var(--spacing-sm)' }}>{title}</h1>
            <p style={{ fontStyle: 'italic', marginBottom: 'var(--spacing-md)' }}>Last Updated: December 12, 2025</p>

            <section style={{ marginBottom: 'var(--spacing-md)' }}>
                <h3>Introduction</h3>
                <p>This Privacy Policy describes how Spolek na ochranu zvířat Kamily Ráčkové – in memoriam (the “Organization,” “we,” “us,” or “our”) collects, uses, and protects your personal information when you interact with our website and services. We are committed to ensuring the privacy and security of your personal data. By using our website or providing us with information, you agree to the terms of this Privacy Policy.</p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-md)' }}>
                <h3>Who We Are</h3>
                <p>Spolek na ochranu zvířat Kamily Ráčkové – in memoriam is a non-profit animal protection association registered in the Czech Republic. Our registered office is at Lucemburská 1599/31, 130 00 Praha 3, Czech Republic, and our operational office is at the same address in Prague. We are registered with the Municipal Court in Prague under file L 12331, with Identification Number (IČO): 26549832. For the purposes of data protection law, we are the “data controller” of your personal information. If you have any questions about this policy or your data, you can contact us at info@spoleknaochranu.org or by phone at +420 710 398 001.</p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-md)' }}>
                <h3>Information We Collect</h3>
                <ul style={{ paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '10px' }}><strong>Personal Data You Provide:</strong> We collect personal data that you voluntarily provide to us through our website forms or direct correspondence. This includes information such as your name, email address, postal address, telephone number, or other contact details, especially when you: contact us with inquiries, subscribe to newsletters, fill out a volunteer or adoption application, or make a donation. We only ask for information that is relevant to the service you are requesting.</li>
                    <li><strong>Derivative Data (Cookies & Analytics):</strong> When you visit our website, we automatically collect certain data about your device and how you use the site. This includes your IP address, browser type, device information, and browsing actions on our site (such as pages viewed and time spent). We use cookies and third-party analytics tools (like Google Analytics) to gather this information.</li>
                </ul>
            </section>

            <section style={{ marginBottom: 'var(--spacing-md)' }}>
                <h3>How We Use Your Information</h3>
                <ul style={{ paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '10px' }}><strong>To Provide and Improve Services:</strong> Personal data is used to respond to your inquiries, process donations, register you as a volunteer, or facilitate adoptions.</li>
                    <li style={{ marginBottom: '10px' }}><strong>To Ensure Security and Compliance:</strong> We may use data to protect our website, organization, and users from fraud or malicious activity. As a registered non-profit, we also maintain records of donations and correspondence as required for financial auditing and legal compliance.</li>
                    <li style={{ marginBottom: '10px' }}><strong>Communication:</strong> We use your contact information to communicate with you, confirming donations or signups, and sending important administrative information.</li>
                    <li><strong>Awareness and Fundraising:</strong> Occasionally, we may share success stories or testimonials in our communications or on our website. We would only include personal information given explicit consent.</li>
                </ul>
            </section>

            <section style={{ marginBottom: 'var(--spacing-md)' }}>
                <h3>Cookies and Tracking Technologies</h3>
                <p>Our website uses cookies to enhance user experience and track usage. You can control or delete cookies through your browser settings at any time. However, be aware that disabling cookies may affect certain functionalities of our site.</p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-md)' }}>
                <h3>Data Sharing and Disclosure</h3>
                <p>We do not sell your personal information to any third parties. We treat your information with respect and use it only for our organizational purposes. We may share data in limited situations such as with service providers, legal requirements, protection of rights, or with your explicit consent.</p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-md)' }}>
                <h3>Data Security</h3>
                <p>We implement a variety of security measures to protect your personal data. Our website is encrypted via SSL (Secure Sockets Layer) technology. We store digital data on secure servers with access controls. Physical copies of sensitive documents are kept in a locked file cabinet.</p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-md)' }}>
                <h3>Data Retention</h3>
                <p>We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.</p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-md)' }}>
                <h3>Your Rights</h3>
                <p>As an individual, especially if you are in the EU (including the Czech Republic), you have the following rights regarding your personal data that we hold: Right to Access, Right to Rectification, Right to Erasure, Right to Restrict or Object, Right to Data Portability, and Right to Withdraw Consent.</p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-md)' }}>
                <h3>Third-Party Websites</h3>
                <p>Our website may contain links to third-party websites. This Privacy Policy does not apply to those external sites.</p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-md)' }}>
                <h3>Children’s Privacy</h3>
                <p>Our website and services are not directed to children under the age of 16. We do not knowingly collect personal information from children.</p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-md)' }}>
                <h3>Updates to This Policy</h3>
                <p>We may update this Privacy Policy from time to time. When we update the policy, we will revise the “Last Updated” date at the top of this page.</p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-md)' }}>
                <h3>Contact Us</h3>
                <p>If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please reach out to us at info@spoleknaochranu.org or by phone at +420 710 398 001. If you feel that we have not adequately resolved a privacy concern, you have the right to lodge a complaint with the relevant supervisory authority in the Czech Republic (Úřad pro ochranu osobních údajů).</p>
            </section>

        </div>
    );
};

export default PrivacyPolicy;
