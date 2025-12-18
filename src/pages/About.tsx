import React from 'react';

const About: React.FC<{ title?: string }> = ({ title }) => {
    return (
        <div className="container" style={{ padding: 'var(--spacing-lg) var(--spacing-sm)' }}>
            {/* Header */}
            <h1 style={{
                textAlign: 'center',
                marginBottom: 'var(--spacing-md)',
                fontSize: '2.5rem'
            }}>
                {title} – Who We Are & Why We Help
            </h1>
            <p style={{
                textAlign: 'center',
                fontSize: '1.2rem',
                maxWidth: '800px',
                margin: '0 auto var(--spacing-lg)',
                color: 'var(--color-primary-dark)'
            }}>
                Learn about the mission, history, and team behind Spolek na ochranu zvířat Kamily Ráčkové – in memoriam.
            </p>

            {/* Content Wrapper */}
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>

                {/* Mission */}
                <section style={{ marginBottom: 'var(--spacing-lg)' }}>
                    <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>Our Mission and Values</h2>
                    <p style={{ marginBottom: 'var(--spacing-xs)' }}>
                        Our mission is rooted in compassion: to protect animals from suffering and give them hope for a better life. We believe every animal – no matter how small or ill – has inherent value. This core value drives all our decisions.
                    </p>
                    <p style={{ marginBottom: 'var(--spacing-xs)' }}>
                        We operate on the principles of empathy, integrity, and community involvement. By rescuing animals in distress and advocating for their well-being, we strive to inspire others to treat all creatures with kindness. “Giving Animals a Second Chance” isn’t just a slogan for us – it’s a promise we work towards daily.
                    </p>
                </section>

                {/* Story */}
                <section style={{ marginBottom: 'var(--spacing-lg)' }}>
                    <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>Our Story: Honoring a Legacy</h2>
                    <p style={{ marginBottom: 'var(--spacing-xs)' }}>
                        Spolek na ochranu zvířat Kamily Ráčkové – in memoriam was founded in 2001 to continue the compassionate work of Kamila Ráčková, a devoted animal lover whose memory guides our efforts. Kamila’s dedication to saving vulnerable animals in her community inspired friends and family to establish the organization in her name after her passing.
                    </p>
                    <p style={{ marginBottom: 'var(--spacing-xs)' }}>
                        What began as a small local effort has grown into a respected non-profit over the past two decades. In 2014, we formally registered under the new Czech Civil Code as a spolek (association) with the Municipal Court in Prague (L 12331), ensuring our operations meet all legal and transparency standards.
                    </p>
                    <p>
                        From rescuing our very first stray kitten in 2001 to now handling dozens of rescue cases each year, our story is one of steady growth and unwavering commitment. We have expanded our programs and built a network of volunteers, veterinarians, foster families, and supporters who make our work possible. Every milestone – the first adoption event, the opening of our small shelter space, the 100th animal saved – has been achieved thanks to a community united by compassion. And at every step, we remember Kamila Ráčková’s belief that every animal life is worth fighting for.
                    </p>
                </section>

                {/* Why work matters */}
                <section style={{ marginBottom: 'var(--spacing-lg)' }}>
                    <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>Why Our Work Matters</h2>
                    <p style={{ marginBottom: 'var(--spacing-xs)' }}>
                        In the bustling city of Prague and its surrounding areas, hundreds of animals each year are abandoned, injured in accidents, or born homeless on the streets. Without organizations like ours, many of these cats, dogs, and other small animals would face illness, hunger, or premature death.
                    </p>
                    <p>
                        Our work fills a critical gap: we provide immediate rescue and medical care, which local authorities alone cannot always supply, and we work to find lasting solutions by placing animals in loving homes. By reducing the number of stray animals and rehabilitating those that are injured or sick, we also help create safer, more compassionate communities. Each successful rescue not only transforms the life of that animal but often touches the lives of the people who adopt or care for it – creating new animal advocates and spreading empathy. Our education efforts further amplify this impact, as more people learn how to care for pets responsibly and treat animals with respect. In short, our work matters because it saves lives and because it builds a culture of kindness that benefits everyone.
                    </p>
                </section>

                {/* Team */}
                <section style={{ marginBottom: 'var(--spacing-lg)' }}>
                    <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>Our Team and Leadership</h2>
                    <p style={{ marginBottom: 'var(--spacing-xs)' }}>
                        We are proud to be a volunteer-driven organization. Our team includes rescue coordinators, foster caregivers, veterinary partners, outreach educators, and many passionate volunteers who donate their time and skills. This collaborative spirit means that resources go directly to the animals who need them most.
                    </p>
                    <p style={{ marginBottom: 'var(--spacing-xs)' }}>
                        Our current leadership is headed by Hana Kalibová, who serves as the Chairperson (předseda) of the organization. Hana has been leading our board since January 12, 2022, bringing a wealth of experience in animal welfare and non-profit management. Under her guidance, along with a small board of directors, we maintain high standards of governance and transparency. The board oversees strategic decisions and ensures that our activities align with our mission and legal obligations.
                    </p>
                    <p style={{ marginBottom: 'var(--spacing-xs)' }}>
                        We do not have any paid executives – everyone from Hana to our on-the-ground rescuers is motivated by genuine care for animals. Additionally, our extended team includes numerous unsung heroes: the foster families who open their homes, the veterinarians who often provide discounted services, and the supporters who organize fundraising drives. Each person’s contribution, big or small, is vital.
                    </p>
                    <p>
                        Together, we form a family united by the goal of protecting animals. Our leadership fosters an environment of trust and dedication, making sure that whether you’re a donor, volunteer, or adopter, you feel connected to our mission and confident in our stewardship. We invite you to reach out, meet our team, and perhaps become part of our growing family of animal protectors.
                    </p>
                </section>

            </div>
        </div>
    );
};

export default About;
