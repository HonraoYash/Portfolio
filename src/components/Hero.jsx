import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import SocialLinks from "./SocialLinks"; // 👈 this file handles the 5 bubbles

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[85px] max-w-7xl mx-auto ${styles.paddingX}
                    flex flex-row items-start gap-5 z-10 relative`}
      >
        {/* Left vertical gradient line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Text + buttons + bubbles */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Yash</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Master's in Computer Science student <br className="sm:block hidden" />
            at Texas A&M University
          </p>

          {/* Buttons + Social Bubbles in one row */}
          <div className="mt-6 flex flex-wrap items-center gap-6">
            {/* Resume Button */}
            <motion.a
              href="https://drive.google.com/file/d/1uQPw3ngSQUggNPhxEyQ67kLH886mXrlY/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="px-6 py-3 bg-[#915EFF] text-white font-semibold rounded-lg shadow-md
                           hover:bg-[#7e4fe0] transition-all duration-300"
              >
                View Resume
              </motion.button>
            </motion.a>

            {/* Schedule Meet Button */}
            <motion.a
              href="https://calendly.com/yashhonrao2024/30min"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="px-6 py-3 border-2 border-[#915EFF] text-[#915EFF] font-semibold rounded-lg shadow-md
                           hover:bg-[#915EFF] hover:text-white transition-all duration-300"
              >
                Schedule Meet
              </motion.button>
            </motion.a>

            {/* Horizontal social bubbles row */}
            <SocialLinks />
          </div>
        </div>
      </div>

      {/* ✅ Interactive rotating 3D model */}
      <ComputersCanvas />

      {/* Scroll-down animation */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary
                       flex justify-center items-start p-2"
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
