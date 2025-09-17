import HeroSection from '../../components/sections/HeroSection';
import FeaturesSection from '../../components/sections/FeaturesSection';
import AgendaSection from '../../components/sections/AgendaSection';
import LocationSection from '../../components/sections/LocationSection';
import NewsletterSection from '../../components/sections/NewsletterSection';
import AboutSection from '../../components/sections/AboutSection';
import CollaboratorsSection from '../../components/sections/CollaboratorsSection';
import Footer from '../../components/layout/Footer';

const Home = () => {

    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <AboutSection />
            <CollaboratorsSection />
            <AgendaSection />
            <LocationSection />
            <NewsletterSection />
            <Footer />
        </>
    );
};

export default Home;
