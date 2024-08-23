// src/AboutUs.js

import React from "react";
import { FaBullhorn, FaGlobe, FaRocket } from "react-icons/fa";

const AboutUs = () => {
  const sections = [
    {
      title: "Our Mission",
      content:
        "Our mission is to provide exceptional service and innovative solutions to our customers. We are committed to enhancing the lives of those we serve through our dedication to excellence and customer satisfaction.",
    },
    {
      title: "Our Vision",
      content:
        "Our vision is to be the leading provider of quality solutions, recognized for our integrity, innovation, and commitment to creating a positive impact in the communities we serve.",
    },
    {
      title: "Our Goals",
      items: [
        {
          icon: <FaBullhorn className="text-4xl text-blue-500" />,
          title: "Enhance Communication",
          description:
            "To foster effective communication channels both internally and with our clients to ensure transparency and efficiency.",
        },
        {
          icon: <FaGlobe className="text-4xl text-green-500" />,
          title: "Global Outreach",
          description:
            "To expand our services globally, reaching new markets and adapting our solutions to diverse cultural and regional needs.",
        },
        {
          icon: <FaRocket className="text-4xl text-red-500" />,
          title: "Innovate and Grow",
          description:
            "To continuously innovate and improve our offerings, driving growth through technological advancements and creative solutions.",
        },
      ],
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

      {sections.map((section, index) => (
        <section key={index} className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">{section.title}</h2>
          {section.items ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {section.items.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                  {item.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-lg leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-lg leading-relaxed">{section.content}</p>
          )}
        </section>
      ))}
    </div>
  );
};

export default AboutUs;
