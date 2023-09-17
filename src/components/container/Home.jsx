import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
import hero from "../../assets/hero.jpg";
import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";

const Home = () => {
  return (
    <div className="section" id="home">
      <div className="md:flex items-center justify-center">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="md:flex-[0.75] flex items-center justify-center"
        >
          <div>
            <div className="font-bold text-xs text-Teal mb-4">
              your e-learning partner
            </div>
            <div className="sm:text-[2rem] text-[1.825rem] font-bold">
              Achieve Your Goals
            </div>
            <div className="md:w-[65%] w-[70%]">
              <img src={hero} alt="" />
            </div>
            <p className="text-sm leading-7 text-gray max-w-sm">
              Lorem ipsum dolor sit, amet consectetur <br />
              adipisicing elit. Repudiandae, quos.
            </p>
            <div className="mt-4">
              <button className="px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm">
                Get Started
              </button>
              <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm">Discover</button>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[420px] h-[420px] mt-8 md:mt-0" // Adjust margin-top here
        >

          <EarthCanvas />
          <div className="text-center text-xl xl:mt-[5rem]">
            <p>We collaborate with <br/>
              <span className="text-Teal">100+ leading schools on earth</span>
            </p>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Home, "home");
