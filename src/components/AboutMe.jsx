import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import aboutMeImg from "../images/aboutme.jpeg";

/**
 * Represents the About Me section.
 * Displays information about the user.
 *
 * @component
 * @param {string} name - The name of the user.
 */

const AboutMe = ({ name }) => {
  // Using react-intersection-observer to determine if the component is in view
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Variants for staggered animations
  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for paragraph animations
  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="about">
      <div className="aboutContainer container">
        <div className="row">
          <motion.div
            className="personalImage col-12 col-lg-6"
            ref={ref}
            initial={{ x: "-10vw", opacity: 0, scale: 0.5 }}
            animate={
              inView
                ? { x: 0, opacity: 1, scale: 1 }
                : { x: "-10vw", opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Display the personal image */}
            <motion.img src={aboutMeImg} alt={name} />
          </motion.div>
          <div className="personalInfo col-12 col-lg-6">
            <motion.div className="contentContainer" variants={staggerVariants}>
              {/* Display greeting and job title with animation */}
              <motion.h4 variants={paragraphVariants}>
                Nice to meet you! 👋🏻
              </motion.h4>
              <motion.h5 variants={paragraphVariants}>
                I'm a Frontend Developer.
              </motion.h5>

              {/* Display content description with animation */}
              <motion.div
                className="contentDescription"
                variants={staggerVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                {/* Paragraphs with animation */}
                <motion.p variants={paragraphVariants}>
                  In the captivating world of web development, I find my niche
                  as a frontend developer with a specialization in{" "}
                  <span style={{ color: "var(--hl-color)" }}> React.js</span>. My
                  expertise centers around crafting{" "}
                  <span style={{ color: "var(--hl-color)" }}>
                    dynamic and user-friendly
                  </span>
                  . web experiences. I'm passionate about solving real-world
                  problems through efficient solutions.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  Beyond the realm of my coding endeavors, you'll often find me
                  weaving intricate narratives through writing,
                  channeling my imagination into the world of animation, and
                  crafting new and exciting creations.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  As a frontend developer, I bridge the gap between technology
                  and human interaction, creating engaging web solutions that
                  make a meaningful impact. With a balance of technical
                  proficiency and a zest for life's adventures, I'm here to
                  design and develop the future of digital experiences, one line
                  of code at a time.
                </motion.p>
              </motion.div>

              {/* Button to view the portfolio */}
              <NavLink to="/portfolio">
                <Button name="View Portfolio" />
              </NavLink>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
