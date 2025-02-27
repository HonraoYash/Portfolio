import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <div className="mt-10 flex flex-col md:flex-row items-start gap-10">
        {/* Left Section: Text */}
        <div className="flex-1">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            🚀 Software Enthusiast | AI & Data Science Innovator | Problem Solver
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            As a passionate software enthusiast and data geek, I thrive on transforming complex challenges into actionable insights. Currently pursuing my MS in Computer Science at Texas A&M University, I’m deeply immersed in Data Science, AI/ML, NLP, and Software Engineering, always pushing the boundaries of innovation.
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            From revolutionizing financial analytics at Wolters Kluwer with a dynamic Power BI dashboard to pioneering AI-driven logistics solutions, my work consistently blends cutting-edge technology with real-world impact. My research contributions include a patented AI trucking system, four published papers, and breakthroughs in software requirement extraction and Alzheimer’s diagnosis using Deep Learning.
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Beyond algorithms and datasets, I believe in tech for good—whether it’s developing therapeutic AI for mental wellness or creating smarter human-AI interactions. As a former General Secretary of the Computer Society of India at MIT-WPU and an active Aggie Data Science Club member, I thrive in collaborative, fast-paced environments where ideas fuel innovation.
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Always seeking new challenges, I’m eager to connect, collaborate, and build AI-driven solutions that shape the future of technology. Let’s create something extraordinary! 
          </motion.p>
        </div>

        {/* Right Section: Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="src\assets\yashpic.jpg"
            alt="Your Name"
            className="rounded-lg shadow-lg object-cover w-full h-auto max-w-lg"
          />
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about")
