import React from 'react';
import styles from './Footer.module.css';

import {BsGithub , BsLinkedin , BsInstagram , BsTwitter} from 'react-icons/bs';

const Footer = () => {
    return (
        <div className={styles.footer}>
             <div className="container">
                 <div className={styles.flex}>
                    <div>
                        <p> © 2023 by  Portfolio Website All right . reserved .</p>
                    </div>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#testimonial">Testimonial</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div className={styles.icons}>
                        <a href="/#">
                            <BsGithub size={30}></BsGithub>
                        </a>
                        <a href="/#">
                            <BsLinkedin size={30}></BsLinkedin>
                        </a>
                        <a href="/#">
                            <BsInstagram size={30}></BsInstagram>
                        </a>
                        <a href="/#">
                            <BsTwitter size={30}></BsTwitter>
                        </a>
                    </div>
                 </div>
                
             </div>
        </div>
    );
};

export default Footer;