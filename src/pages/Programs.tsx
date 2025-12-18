import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Home as HomeIcon, BookOpen } from 'lucide-react';

const Programs: React.FC<{ title?: string }> = ({ title }) => {
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
                Our Rescue, Adoption, and Education Programs
            </p>

            {/* Intro */}
            <div style={{ maxWidth: '800px', margin: '0 auto var(--spacing-lg)' }}>
                <p>Our organization tackles animal welfare from multiple angles. Below is an overview of our main programs, each addressing a crucial part of our mission. For each program, we outline its goals, whom it serves, key impacts, and how you can get involved:</p>
            </div>

            {/* Programs List */}
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>

                {/* Rescue & Rehabilitation */}
                <section style={{
                    marginBottom: 'var(--spacing-xl)',
                    padding: 'var(--spacing-md)',
                    backgroundColor: 'white',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: 'var(--spacing-sm)' }}>
                        <Shield color="var(--color-primary)" size={32} />
                        <h2 style={{ margin: 0 }}>Rescue & Rehabilitation</h2>
                    </div>

                    <h4 style={{ marginBottom: '5px', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px', color: 'var(--color-text-light)' }}>Goals</h4>
                    <p style={{ marginBottom: 'var(--spacing-sm)' }}>To promptly rescue animals in distress and nurse them back to health. This program focuses on saving stray, abandoned, abused, or injured animals and providing them the veterinary treatment and care they urgently need.</p>

                    <h4 style={{ marginBottom: '5px', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px', color: 'var(--color-text-light)' }}>Who It Serves</h4>
                    <p style={{ marginBottom: 'var(--spacing-sm)' }}>Animals in the Prague area that have no one else to turn to – whether it’s a dog hit by a car, a litter of kittens found in a box, or a neglected pet left behind – our rescue team steps in to serve these voiceless members of our community. By extension, this also serves concerned citizens who report animals in need, ensuring their cry for help is answered.</p>

                    <h4 style={{ marginBottom: '5px', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px', color: 'var(--color-text-light)' }}>Key Impact Outcomes</h4>
                    <p style={{ marginBottom: 'var(--spacing-sm)' }}>Immediate relief and second chances for animals that would likely perish or suffer without intervention. Every year, dozens of animals regain their health through our rehabilitation efforts – puppies with broken legs learn to walk again, emaciated cats regain weight and vitality, and frightened animals learn to trust. This not only reduces animal suffering but also improves public health and safety (for example, by reducing the number of scared, stray animals on the streets). Our successful rehabilitations mean formerly suffering animals go on to live happy lives, often becoming beloved family pets.</p>

                    <h4 style={{ marginBottom: '5px', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px', color: 'var(--color-text-light)' }}>How Supporters Can Help</h4>
                    <p>You can support Rescue & Rehabilitation by alerting us to animals in need and donating towards their medical care. The costs of surgeries, medicines, and daily care add up – contributions directly fund these lifesaving treatments. Experienced animal handlers can volunteer in rescues or at our small recovery facility. Additionally, by sharing our rescue stories on social media, you help spread awareness so that no cry for help goes unheard.</p>

                    <div style={{ marginTop: 'var(--spacing-md)' }}>
                        <Link to="/get-involved" style={{
                            display: 'inline-block',
                            padding: '8px 16px',
                            backgroundColor: 'var(--color-primary)',
                            color: 'white',
                            borderRadius: 'var(--radius-sm)',
                            fontWeight: 600,
                            fontSize: '0.9rem'
                        }}>
                            Report an Animal in Need / Support
                        </Link>
                    </div>
                </section>


                {/* Foster Care & Adoption */}
                <section style={{
                    marginBottom: 'var(--spacing-xl)',
                    padding: 'var(--spacing-md)',
                    backgroundColor: 'white',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: 'var(--spacing-sm)' }}>
                        <HomeIcon color="var(--color-primary)" size={32} />
                        <h2 style={{ margin: 0 }}>Foster Care & Adoption</h2>
                    </div>

                    <h4 style={{ marginBottom: '5px', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px', color: 'var(--color-text-light)' }}>Goals</h4>
                    <p style={{ marginBottom: 'var(--spacing-sm)' }}>To provide safe, nurturing temporary homes for rescued animals and to successfully place them in permanent loving families. Our foster and adoption program ensures that once an animal is out of immediate danger, it continues to receive care and socialization in a home environment until a “forever home” is found.</p>

                    <h4 style={{ marginBottom: '5px', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px', color: 'var(--color-text-light)' }}>Who It Serves</h4>
                    <p style={{ marginBottom: 'var(--spacing-sm)' }}>This program serves rescued animals preparing for adoption – dogs, cats, and others that have healed enough to transition into family life but are waiting for the right match. It also serves compassionate individuals and families looking to adopt a pet; we guide them to find an animal that fits their home. Foster volunteers are a key part of this program’s audience as well – without people willing to foster, many animals would have nowhere to go after the clinic.</p>

                    <h4 style={{ marginBottom: '5px', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px', color: 'var(--color-text-light)' }}>Key Impact Outcomes</h4>
                    <p style={{ marginBottom: 'var(--spacing-sm)' }}>Loving homes for homeless animals, and happier people too! Each successful adoption is an animal’s life transformed – a stray or abandoned pet becomes a cherished companion. Over the years, we have facilitated hundreds of adoptions, greatly reducing the number of animals in shelters or on the streets. The foster system ensures animals are well-adjusted and house-trained, making adoptions more successful and lasting. By carefully vetting adopters and providing post-adoption support, we maintain a low return rate – meaning our animals stay in their new homes. Moreover, every adoption opens a foster space for another animal in need, creating a positive cycle.</p>

                    <h4 style={{ marginBottom: '5px', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px', color: 'var(--color-text-light)' }}>How Supporters Can Help</h4>
                    <p>Become a foster parent – opening your home temporarily to a dog or cat in need is one of the most impactful ways to help. We provide guidance and cover veterinary expenses; you supply love and care. If you’re ready for a permanent addition to your family, adopt from us when you can. You’ll not only gain a loyal friend but also free up resources to save another animal. Even if you can’t foster or adopt, you can sponsor a hard-to-place animal, helping cover their food and care until a home is found. And of course, spreading the word – tell friends looking for pets about our adoption program, so more animals find homes faster.</p>

                    <div style={{ marginTop: 'var(--spacing-md)', display: 'flex', gap: '10px' }}>
                        <Link to="/get-involved" style={{
                            display: 'inline-block',
                            padding: '8px 16px',
                            backgroundColor: 'var(--color-primary)',
                            color: 'white',
                            borderRadius: 'var(--radius-sm)',
                            fontWeight: 600,
                            fontSize: '0.9rem'
                        }}>
                            Become a Foster
                        </Link>
                        <Link to="/contact" style={{
                            display: 'inline-block',
                            padding: '8px 16px',
                            backgroundColor: 'transparent',
                            border: '1px solid var(--color-primary)',
                            color: 'var(--color-primary)',
                            borderRadius: 'var(--radius-sm)',
                            fontWeight: 600,
                            fontSize: '0.9rem'
                        }}>
                            Adopt a Pet
                        </Link>
                    </div>
                </section>

                {/* Community Education & Outreach */}
                <section style={{
                    marginBottom: 'var(--spacing-xl)',
                    padding: 'var(--spacing-md)',
                    backgroundColor: 'white',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: 'var(--spacing-sm)' }}>
                        <BookOpen color="var(--color-primary)" size={32} />
                        <h2 style={{ margin: 0 }}>Community Education & Outreach</h2>
                    </div>

                    <h4 style={{ marginBottom: '5px', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px', color: 'var(--color-text-light)' }}>Goals</h4>
                    <p style={{ marginBottom: 'var(--spacing-sm)' }}>To raise awareness about animal welfare issues and promote responsible pet ownership throughout our community. We aim to prevent cruelty and neglect before it starts by educating children and adults on how to care for animals and why it matters. Another goal is to engage the public in our mission through events and partnerships, building a more compassionate society.</p>

                    <h4 style={{ marginBottom: '5px', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px', color: 'var(--color-text-light)' }}>Who It Serves</h4>
                    <p style={{ marginBottom: 'var(--spacing-sm)' }}>Our education and outreach initiatives serve the general public of Prague and surrounding areas – from schoolchildren to pet owners to policymakers. For example, school programs serve students who learn empathy and proper pet care, while public workshops may serve new pet owners seeking guidance. This program also supports local shelters and animal professionals by raising the overall awareness that can lead to better animal treatment and support for animal services. Essentially, it serves the entire community and its animals by fostering understanding and proactive care.</p>

                    <h4 style={{ marginBottom: '5px', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px', color: 'var(--color-text-light)' }}>Key Impact Outcomes</h4>
                    <p style={{ marginBottom: 'var(--spacing-sm)' }}>Greater community involvement in animal welfare and a decrease in the incidents of pet abandonment or mistreatment over time. Through our outreach, more people vaccinate and neuter their pets, fewer pets are given up due to behavioral issues (because owners learn how to address them), and more residents actively help animals (such as reporting abuse or volunteering). We’ve seen tangible outcomes like increased adoption rates during our public adoption fairs and more inquiries about volunteering after our awareness campaigns. Long term, the community becomes safer and kinder for animals: for instance, areas where we ran a “keep cats safe indoors” campaign reported fewer lost or injured cats. Each year, we also measure engagement – hundreds attend our events or follow our online educational posts, indicating a growing public interest in protecting animals.</p>

                    <h4 style={{ marginBottom: '5px', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px', color: 'var(--color-text-light)' }}>How Supporters Can Help</h4>
                    <p>Join our outreach efforts – you can volunteer to speak at schools, staff information booths, or organize community events. Pet owners can help by being role models: train and care for your pets well and encourage neighbors to do the same. If you have expertise (for example, veterinarians or trainers), consider hosting a free workshop with us to share knowledge. Even simply following us on social media and sharing our educational posts greatly extends our reach. Lastly, your donations help produce brochures, hold workshops, and supply materials for campaigns (like flyers or school handouts). By supporting education, you are investing in a future with fewer animals in need of rescue.</p>

                    <div style={{ marginTop: 'var(--spacing-md)' }}>
                        <Link to="/get-involved" style={{
                            display: 'inline-block',
                            padding: '8px 16px',
                            backgroundColor: 'var(--color-primary)',
                            color: 'white',
                            borderRadius: 'var(--radius-sm)',
                            fontWeight: 600,
                            fontSize: '0.9rem'
                        }}>
                            Volunteer for Outreach
                        </Link>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Programs;
