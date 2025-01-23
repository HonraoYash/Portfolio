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
            As a software enthusiast and a data geek with a knack for turning
            complex problems into actionable insights, I'm on a mission to
            bridge the gap between cutting-edge technology and real-world
            applications. Currently pursuing my MS in Computer Science at Texas
            A&M University, I'm diving deep into the realms of AI, Machine
            Learning, Software Engineering and Natural Language Processing,
            always hungry for the next big challenge.
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            My journey in tech has been nothing short of exhilarating. From
            developing a Power BI dashboard that revolutionized financial
            reporting at Wolters Kluwer to proposing an AI-driven trucking
            system that could reshape logistics operations, I've consistently
            pushed the boundaries of what's possible with data. My research
            efforts have culminated in a published patent and four research
            papers, exploring everything from software requirement extraction to
            early Alzheimer's diagnosis using Deep Learning.
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            But I'm not just about algorithms and datasets. I believe in the
            power of technology to make a tangible difference in people's lives.
            Whether it's creating a therapeutic image generation system to help
            manage anxiety or developing a natural language interface for
            database queries, my projects always aim to solve real-world
            problems and empower users.
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            As a former General Secretary of the Computer Society of India at
            MIT-WPU and a current member of the Aggie Data Science Club, I
            thrive in collaborative environments where ideas flow freely and
            innovation is the norm. I'm always on the lookout for opportunities
            to learn, grow, and contribute to groundbreaking projects.
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            If you're passionate about leveraging data science and AI to create
            impactful solutions, or if you're looking for a dedicated team
            member who can bring both technical expertise and creative
            problem-solving to the table, let's connect! I'm eager to explore
            how we can work together to shape the future of technology and make
            a lasting impact in the world of data science.
          </motion.p>
        </div>

        {/* Right Section: Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="/path/to/your-image.jpg"
            alt="Your Name"
            className="rounded-lg shadow-lg object-cover max-h-96"
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
