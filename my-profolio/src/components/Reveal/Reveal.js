import React from 'react';
// import styles from './Reveal.module.css'
import { useRef } from 'react';
import { useEffect } from 'react';

const Reveal = ({children , threshold}) => {
    const sectionRef = useRef(null)
    
    useEffect(() => {
        const options = {
            rootMargin: '0px',
            threshold: threshold || 0.1 ,
        };

        const callBack = (entries , observer) => {
             entries.forEach(entry => {
                if(entry.isIntersecting){
                  sectionRef.current.style.transform = 'translateY(0px)';
                  sectionRef.current.style.opacity = '1';
                  observer.unobserve(entry.target);
                }
             });
        };

        const observer = new IntersectionObserver(callBack , options);

        observer.observe(sectionRef.current);

        return () => {
            observer.disconnect()
        }

    }, [threshold])

    return (
        <div ref={sectionRef} className='reveal'>
            {children}

        </div>
    );
};

export default Reveal;