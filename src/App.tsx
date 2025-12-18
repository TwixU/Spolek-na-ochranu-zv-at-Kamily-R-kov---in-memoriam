import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import PageWrapper from './components/layout/PageWrapper';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import GetInvolved from './pages/GetInvolved';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <PageWrapper
              title="Giving Animals a Second Chance – Rescue and Hope in Prague"
              description="Non-profit animal rescue in Prague dedicated to rescuing, rehabilitating, and rehoming animals in need. Join Spolek na ochranu zvířat Kamily Ráčkové – in memoriam to give abandoned animals a second chance at life."
            >
              <Home />
            </PageWrapper>
          } />
          <Route path="about" element={
            <PageWrapper
              title="About Us – Who We Are & Why We Help"
              description="Learn about the mission, history, and team behind Spolek na ochranu zvířat Kamily Ráčkové – in memoriam. Our Prague-based non-profit has been protecting animals since 2001."
            >
              <About title="About Us" />
            </PageWrapper>
          } />
          <Route path="programs" element={
            <PageWrapper
              title="What We Do – Our Rescue, Adoption, and Education Programs"
              description="Explore the core programs of Spolek na ochranu zvířat Kamily Ráčkové – in memoriam: animal rescue & rehabilitation, foster & adoption services, and community education on animal welfare in Prague."
            >
              <Programs title="Our Programs" />
            </PageWrapper>
          } />
          <Route path="get-involved" element={
            <PageWrapper
              title="Get Involved – Support Us Through Donations or Volunteering"
              description="Find out how to support Spolek na ochranu zvířat Kamily Ráčkové – in memoriam. Learn about donating, volunteering, and other ways to help rescue and protect animals in Prague."
            >
              <GetInvolved title="Get Involved" />
            </PageWrapper>
          } />
          <Route path="contact" element={
            <PageWrapper
              title="Contact Us – We’d Love to Hear From You"
              description="Get in touch with Spolek na ochranu zvířat Kamily Ráčkové – in memoriam. Contact our Prague office via email at info@spoleknaochranu.org, phone +420 710 398 001, or visit us at Lucemburská 1599/31, Prague."
            >
              <Contact title="Contact Us" />
            </PageWrapper>
          } />
          <Route path="privacy" element={
            <PageWrapper title="Privacy Policy">
              <PrivacyPolicy title="Privacy Policy" />
            </PageWrapper>
          } />
          <Route path="terms" element={
            <PageWrapper title="Terms of Service">
              <TermsOfService title="Terms of Service" />
            </PageWrapper>
          } />
          <Route path="thank-you" element={
            <PageWrapper title="Message Sent – Thank You">
              <ThankYou />
            </PageWrapper>
          } />
          {/* Catch all to Home or 404 */}
          <Route path="*" element={
            <PageWrapper title="Page Not Found">
              <Home title="Page Not Found" />
            </PageWrapper>
          } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
