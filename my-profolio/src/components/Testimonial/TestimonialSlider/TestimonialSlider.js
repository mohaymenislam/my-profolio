import React, { useEffect, useState } from 'react';
import styles from './TestimonialSlider.module.css';

import {HiOutlineArrowNarrowLeft , HiOutlineArrowNarrowRight} from 'react-icons/hi';

const TestimonialSlider = ({testimonial , nextTestimonial , previousTestimonial}) => {
    
 const [FadeIn , setFadeIn] = useState(false);

   useEffect(() => {
     setFadeIn(true);
   } , [testimonial])

    const handlePrevious = () => {
        setFadeIn(false);
        setTimeout(previousTestimonial , 500);
      }

      const handleNext = () => {
        setFadeIn(false);
        setTimeout(nextTestimonial, 500);
      } 
   
    return (
        <div className={styles.content}>
            <div className={`${styles.testimonial} ${ FadeIn ? styles['fade-in'] : ''}`}>
                   <p className={styles.message}>{testimonial.message}</p>
                   <p className={styles.name}>{testimonial.name} , Customer </p>
            </div>
            <div className={styles.buttons}>
                 <button className={styles['slider-button']}>
                    <HiOutlineArrowNarrowLeft onClick={handlePrevious} size={30} ></HiOutlineArrowNarrowLeft>
                    </button> 
                 <button className={styles['slider-button']}>
                    <HiOutlineArrowNarrowRight onClick={handleNext}  size={30} ></HiOutlineArrowNarrowRight>
                    </button> 
            </div>
        </div>
    );
};

export default TestimonialSlider;