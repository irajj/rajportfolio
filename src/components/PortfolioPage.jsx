import React from "react";
import profileImage from "../assets/images/profile.png";

const AboutMe = () => {
  return (
    <section
      className="about-section bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white py-16 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
            Hello! I’m Raj Sharma, a passionate Dynamics 365 CRM Developer and Power Platform Specialist with a flair for crafting scalable business solutions. With hands-on experience across Power Apps, Power Automate, and Power Pages, I help businesses streamline processes and build intelligent, user-centric systems.
            My journey began in front-end development with React, and over time, I transitioned into full-fledged Dynamics 365 development—combining UI/UX skills with robust backend automation. I specialize in customizing and extending D365, integrating services, and building low-code/no-code apps that drive efficiency and impact.
            I’m constantly exploring new tools, patterns, and integrations in the Microsoft ecosystem. Whether it's automating workflows or creating modern interfaces with XRM and Liquid, I thrive on building solutions that make a difference.
          </p>
        </div>
        <div className="image-container">
          <img
            src={profileImage}
            alt="Profile"
            className="w-72 h-72 rounded-lg object-cover shadow-lg"
            style={{ mixBlendMode: 'difference' }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
