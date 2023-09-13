import React from 'react';
import styles from  './Testimonial.module.css';
import Reveal from '../Reveal/Reveal';

import TestimonialSlider from './TestimonialSlider/TestimonialSlider';
import { useState } from 'react';
import testimonialData from '../../TestimonialData';

const Testimonial = () => {

    const [curIndex , setCurIndex] = useState(0);
    const nextTestimonial = () => {
        setCurIndex((nextIndex) => 
            nextIndex === testimonialData.length - 1 ? 0 : nextIndex + 1

            );
    };

    
    const previousTestimonial = () => {
        setCurIndex((prevIndex) => 
            prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1

            );
    };

    return (
        <section id='testimonial' className={styles['testimonial-slider']}>
            <Reveal>
                <div className="container">
                    <h2>Testimonials</h2>
                    <h1>What people say</h1>
                    <TestimonialSlider 
                    
                    testimonial={testimonialData[curIndex]}
                    nextTestimonial={nextTestimonial}
                    previousTestimonial={previousTestimonial}

                    >

                    </TestimonialSlider>
                </div>
            </Reveal>
        </section>
    );
};

export default Testimonial;