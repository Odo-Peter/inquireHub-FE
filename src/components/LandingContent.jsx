import Accurate from './Accurate';
import Pricing from './Pricing';
import PromptBased from './PromptBased';
import Services from './Services';
import Welcome from './Welcome';

const LandingContent = () => {
  return (
    <section className="relative w-full flex flex-col justify-center">
      <h2
        className="text-3xl md:text-5xl md:inline-block text-transparent text-center bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text font-extrabold md:mb-10 mb-6 -mt-4"
        id="features"
      >
        Features
      </h2>
      <Welcome />
      <PromptBased />
      <Accurate />
      <h2
        className="text-3xl md:text-5xl md:inline-block text-transparent text-center bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text font-extrabold md:mb-10 md:mt-4 mt-8 mb-6"
        id="services"
      >
        Services
      </h2>
      <Services />
      <h2
        className="text-3xl md:text-5xl md:inline-block text-transparent text-center bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text font-extrabold md:mb-10 md:mt-4 mt-10 mb-6"
        id="pricing"
      >
        Pricing
      </h2>
      <Pricing />
    </section>
  );
};

export default LandingContent;
