import React from "react";
import { motion } from "framer-motion";

import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import email from "../assets/email.png";

// Each bubble's logo + link
const bubbles = [
  {
    id: 1,
    img: github,
    link: "https://github.com/HonraoYash",
  },
  {
    id: 2,
    img: linkedin,
    link: "https://linkedin.com/in/honraoyash",
  },
  {
    id: 3,
    img: instagram,
    link: "https://www.instagram.com/honrao.yash",
  },
  {
    id: 4,
    img: youtube,
    link: "https://www.youtube.com/@yashhonrao491",
  },
  {
    id: 5,
    img: email,
    link: "mailto:yashhonrao2024@gmail.com?subject=Let's Connect&body=Hi Yash,%20I%20came%20across%20your%20portfolio%20and...",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex flex-row items-center gap-4 ml-4">
      {bubbles.map((social) => (
        <motion.a
          key={social.id}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="w-14 h-14 bg-[#1d1836] rounded-full shadow-lg shadow-[#915EFF]/30 flex justify-center items-center cursor-pointer hover:shadow-[#915EFF]/70 transition-transform duration-300"
        >
          <img
            src={social.img}
            alt="social-link"
            className="w-7 h-7 object-contain filter invert"
          />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
