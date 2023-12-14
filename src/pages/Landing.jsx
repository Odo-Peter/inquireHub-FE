import Footer from '../components/Footer';
import LandingContent from '../components/LandingContent';
import LandingHero from '../components/LandingHero';
import Navbar from '../components/Navbar';

const Landing = () => {
  return (
    <section className="">
      <Navbar />
      <div className="flex flex-col gap-y-8 md:gap-y-20">
        <LandingHero />
        <LandingContent />
        <Footer />
      </div>
    </section>
  );
};

export default Landing;
