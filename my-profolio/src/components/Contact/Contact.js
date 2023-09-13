import React from 'react';
import styles from './Contact.module.css';
import Reveal from '../Reveal/Reveal';
import ContactFrom from './ContactForm/ContactForm'

import {TbPhoneCall} from 'react-icons/tb';
import {HiOutlineMail} from 'react-icons/hi';

const Contact = () => {
    return (
        <section id='contact' className={ styles.contact} >
           <Reveal>

               <div className="container">
                  <div className={styles.title} >
                      <h2>
                         Get In <span>Touch</span>
                      </h2>
                      <hr />
                  </div>
                  <div className={`${styles['contact-form']} grid`} >
                        <div className={styles.content}>
                            <h3>Les ' t go Connect</h3>
                            <p>
                                Please fill out the form on this section to contact with me . Or email me
                            </p>
                            <div className={styles['contact-wrapper']} >
                               <TbPhoneCall size={50}></TbPhoneCall>
                               <span>Call me</span>
                               <h3>+8801580810688</h3>
                            </div>
                            <div className={styles['contact-wrapper']}>
                                <HiOutlineMail size={50}></HiOutlineMail>
                                <span>Email</span>
                                <a href="mohaymenislam412@gmail.com">mohaymenislam412@gmail.com</a>
                            </div>
                        </div>
                        <div>
                            <h3 className={styles.heading}>Send Me a Massage</h3>
                             <ContactFrom></ContactFrom>
                        </div>
                  </div>
               </div>

           </Reveal>

        </section>
    );
};

export default Contact;