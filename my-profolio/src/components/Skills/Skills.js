import React, { useEffect, useRef, useState } from 'react';
import styles from './Skills.module.css';
import SkillBar from './SkillBar/SkillBar';
import Reveal from '../Reveal/Reveal';


const skillsData = [
    {
        label: 'Javascript' ,
        percentage: 90,
        style: `${styles["progress-line"]} ${styles.js}`,
    },
    {
        label: 'React' ,
        percentage: 80,
        style: `${styles["progress-line"]} ${styles.react}`,
    },
    {
        label: 'Next.js' ,
        percentage: 85,
        style: `${styles["progress-line"]} ${styles.next}`,
    },
    {
        label: 'TypeScript' ,
        percentage: 75,
        style: `${styles["progress-line"]} ${styles.ts}`,
    },
];

const Skills = () => {

    const[isInterSection , setIsInterSection] = useState(false);
     const sectionRef = useRef(null);

     useEffect(() => {
        const options = {
            rootMargin: '0px',
            threshold: 0.15 , 
        };

            
            const handleInterSection = (entries , observer) => {
                const [entry] = entries;
                if(entry.isIntersecting){
                    setIsInterSection(true);
                    observer.unobserve(entry.target);
                }
             }

             const observer = new IntersectionObserver(handleInterSection , options);
             observer.observe(sectionRef.current);

             return () => {
                observer.disconnect()
             }

     }, [])

    return (
       <section id='skills' className={styles.skills} ref={sectionRef}>
        <Reveal>
          <div className="container">
             <div className={styles.title}>
                 <h2> <span>My</span> Skills </h2>
                 <hr />
             </div>
               <div className={`grid ${styles['skills-grid']}`}>
                    <div className={styles.content}>
                        <h1>
                            In <span>Designing</span> 
                            <br />
                            And <span>Developing</span>
                        </h1>
                        <p>Every day is a new challenge, and I'm trying to gain more knowledge and experience. Learning new technologies has always been interesting to me. As technology is evolving so fast, I try to keep myself up to date.</p>
                    </div>
                    <div className={styles['skill-bars']}> 

                       {
                        skillsData.map((skill) => (
                            <SkillBar key={skill.label} 
                             label={skill.label}
                             percentage={skill.percentage}
                             style={isInterSection ? skill.style : ''}
                            >

                            </SkillBar>
                        ))
                       }

                      
                     </div>
               </div>
          </div>
             <div className={styles.bottom}>
                <div className={`${styles.flex} container`}>
                     <div>
                        <h3> I ' m available for work</h3>
                     </div>
                     <div>
                        <a href="#contact">Contact Me</a>
                     </div>
                </div>
             </div>
             </Reveal>
       </section>
    );
};

export default Skills;











// import React from 'react';
// import styles from './Skills.module.css';

// const Skills = () => {
//     return (
//        <section id='skills' className={styles.skills}>
//         <div className="container">
//             <div className={styles.title}>
//                 <h2> My <span>Skills</span> </h2>
//                 <hr />
//             </div>
//             <div className={`grid${styles['skills-grid']}`}>
//                 <div className={styles.content}>
//                     <h1>
//                         In <span>Designing</span> <br />
//                         And <span>Developing</span>
//                     </h1>
//                     <p>Every day is a new challenge, and I'm trying to gain more knowledge and experience. Learning new technologies has always been interesting to me. As technology is evolving so fast, I try to keep myself up to date.</p>
//                 </div>
//                 <div className={styles['skills-bars']} > </div>
//             </div>
//         </div>
//         <div className={styles.bottom}>
//              <div className={` ${styles.flex} container`}>
//                 <div>
//                     <h3> I ' m available for Work </h3>
//                 </div>
//                 <div>
//                     <a href="#contact"> Contact Me</a>
//                 </div>
//              </div>
//         </div>

//        </section>
//     );
// };


// export default Skills;