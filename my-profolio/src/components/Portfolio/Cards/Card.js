import React from 'react';
import styles from './Card.module.css';

import {IoIosArrowDroprightCircle} from 'react-icons/io';





const Card = ({image , title}) => {
    return (
        <li>
            <div className={styles.card}>
                 <img src={image} alt="" />
                 <div className={styles['card-overlay']}>
                    <div className={styles['card-header']}>
                     <IoIosArrowDroprightCircle size={45} className={styles['card-icon']} ></IoIosArrowDroprightCircle>

                         <div className={styles['card-content']}>

                             <h3 className={styles['card-title']}>{title}</h3>

                                <a href="/#">Demo</a>
                         </div>
                    </div>
                       <p className={styles['card-description']}>
                       lorem is not just a normal snippet—it's actually a generator. Every time you expand it, it will generate a 30-words dummy text, splitted into a few sentences.
                        </p>
                 </div>
            </div>
            
        </li>
    );
};

export default Card;