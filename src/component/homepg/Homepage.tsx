import React from 'react';
import Hero from './Hero';
import HalfBook from './HalfBook';
import WhyChooseUs from '../WhyChoose';
import Statistics from '../Statistics';
import Testimonials from '../Premium';
import FAQ from '../FAQ';
import Newsletter from '../Newsletter';
import ReadingTips from '../Reading';
import CallToAction from '../CallToAction';

const Homepage = () => {
    return (
        <div>
            <Hero></Hero>
            <HalfBook></HalfBook>
            <WhyChooseUs></WhyChooseUs>
            <Statistics></Statistics>
            <Testimonials></Testimonials>
            <FAQ></FAQ>
            <Newsletter></Newsletter>
            <ReadingTips></ReadingTips>
            <CallToAction></CallToAction>
            
        </div>
    );
};

export default Homepage;