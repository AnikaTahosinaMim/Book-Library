import AboutHero from "@/component/about/AboutHero";
import OurStory from "@/component/about/OurStory";
import WhyChooseUs from "@/component/about/WhyChooseUs";
import Stats from "@/component/about/Stats";
import CTA from "@/component/about/CTA";

const AboutSection = () => {
  return (
    <div>
      <AboutHero></AboutHero>
      <OurStory></OurStory>
      <WhyChooseUs></WhyChooseUs>
      <Stats></Stats>
      <CTA></CTA>

    </div>
  );
};

export default AboutSection;
