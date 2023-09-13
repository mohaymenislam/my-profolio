import React from 'react';
import styles from './About.module.css';
import Reveal from '../Reveal/Reveal';

const About = () => {
    return (
        <section id='about' className={styles.about}>
            <Reveal>
            <div className="container">
                <div className={styles.title}>
                   <h2>About <span>Me</span></h2>
                   <hr />
                </div>
                <div className="grid">
                    <div className={styles['about-img']}>
                    <img src="./images/mohaymen.jpg" alt="mohayman " />
                    </div>
                    <div className={styles['about-content']}>
                        <h3 className={styles.border}>Hi There !</h3>
                        <p> 
                        I'm <span className={styles.name}>Mohaymen</span>. A web developer, and I'm very passionate and dedicated to my work. I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.
                        </p>
                    </div>
                </div>
            </div>
            </Reveal>
            
        </section>
    );
};

export default About;