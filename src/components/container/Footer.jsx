import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      intitial={{ height: 0 }}
      whileInview={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-Teal p-10"
    >
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white">
        <div>
          <div className="font-bold mb-6">Get Start</div>
          <p className="text-sm leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            voluptate alias, laborum magnam nisi nesciunt voluptatum molestias,
            quibusdam odit placeat iste nobis tempora adipisci facere doloremque
            modi molestiae. Beatae, facere.
          </p>
        </div>
        <div>
          <div className="font-bold mb-6">Service</div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">
              Web Design
            </a>
            <a href="" className="text-sm hover:underline">
              Web Development
            </a>
            <a href="" className="text-sm hover:underline">
              Science
            </a>
            <a href="" className="text-sm hover:underline">
              Digital Marketing
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Company</div>
          <div className="flex flex-col gap-4">
          <a href="" className="text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="" className="text-sm hover:underline">
              Sitemap
            </a>
            <a href="" className="text-sm hover:underline">
              Careers
            </a>
            <a href="" className="text-sm hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Follow us</div>
          <div className="text-sm mb-4">
           okwudilionyido@icloud.com
          </div>
          <div className="text-sm">+2349067561649</div>
          <div className="flex gap-4 mt-4">
          <a href="" className="hover:scale-110 text-xl"><BsFacebook/></a>
          <a href=""className="hover:scale-110 text-xl"><BsTwitter/></a>
          <a href=""className="hover:scale-110 text-xl"><BsInstagram/></a>
          <a href=""className="hover:scale-110 text-xl"><BsPinterest/></a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
