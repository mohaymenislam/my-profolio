import React from 'react';
import styles from './Portfolio.module.css';
import cardData from '../../cardData';
import Card from './Cards/Card';
import Reveal from '../Reveal/Reveal'

const Portfolio = () => {
    return (
        <section id='portfolio' className={styles.portfolio}>
            
            <Reveal>

            <div className="container">
                 <div className={styles.title}>
                    <h2>Selected <span>Works</span></h2>
                    <hr />
                 </div>
                 <ul className={styles.cards}>
                     {cardData.map(item => (
                        <Card 
                          key={item.id}
                          image={item.img}
                          title={item.title}
                        ></Card>
                     ))}
                 </ul>
            </div> 
            </Reveal>
        </section>
    );
};

export default Portfolio;