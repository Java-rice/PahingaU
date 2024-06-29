import React, { useState } from "react";
import backgroundImage from "../../assets/about_bg.png";
import { Link } from "react-router-dom";
import { Button } from "../../components/buttons/Button";
import aboutsection2img from "../../assets/about-section2.jpg";
import aboutsection2icon from "../../assets/about-section2-icon.png";
import aboutsection3icon from "../../assets/aboutsection3icon.png";
import aboutsection3bg from "../../assets/about-section3-bg.jpg";
import aboutsection3column2 from "../../assets/about-section3-column2.png";
import aboutsection3column3 from "../../assets/about-section3-column3.png";
import aboutsection3column4 from "../../assets/about-section3-column4.png";
import aboutsection4icon from "../../assets/aboutsection4icon.png";
import aboutsection4img from "../../assets/aboutsection4img.png";
import aboutsection4faqitem from "../../assets/about-section4-faq-item.png";

const faqs = [
  {
    question: "How do I search for dorms on PahingaU?",
    answer:
      "You can search for dorms by using our advanced search filters. Simply enter your preferences, such as location, budget, and amenities, and our platform will provide you with a curated list of options that match your criteria.",
  },
  {
    question: "How do I book a dorm through PahingaU?",
    answer:
      "To book a dorm, click on the dorm listing that you are interested in, and follow the booking instructions provided on the page.",
  },
  {
    question: "Is my payment information secure with PahingaU?",
    answer:
      "Yes, your payment information is secure with PahingaU. We use secure payment gateways to protect your information.",
  },
  {
    question: "Can I cancel or modify my visiting schedule?",
    answer:
      "Yes, you can cancel or modify your visiting schedule by going to your account settings and making the necessary changes.",
  },
];

const About = () => {
  const [expanded, setExpanded] = useState(Array(faqs.length).fill(false));

  const toggleFAQ = (index) => {
    setExpanded((prev) =>
      prev.map((isExpanded, i) => (i === index ? !isExpanded : isExpanded))
    );
  };

  return (
    <>
      <div
        className="w-full font-poppins min-h-screen bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="lg:w-3/5 w-full -top-50 px-[10%] text-white flex flex-col gap-5 justify-center items-left min-h-screen text-wrap">
          <div className="flex flex-row gap-16">
            <div className="w-2 h-24 rounded-l-lg radius bg-white"></div>
            <h1 className="text-left my-auto font-semibold text-4xl">
              About Us
            </h1>
          </div>
          <p className="text-lg leading-8 mb-16">
            Welcome to PahingaU, your trusted companion in the quest for the
            perfect dorm. At PahingaU, we understand that finding the ideal
            living space is more than just a search—it's about discovering a
            place where you can thrive, study, and create unforgettable
            memories.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center py-40">
        <div className="w-4/5 flex flex-col lg:flex-row">
          <img
            src={aboutsection2img}
            alt="Three young men in a dorm."
            className="w-full lg:w-1/2 mb-8 lg:mb-0"
          />
          <div className="gap-3 lg:ml-10 text-center lg:text-left">
            <div className="flex items-center mb-8 lg:items-left">
              <img
                src={aboutsection2icon}
                alt="Purple square icon with rounded corners."
                className="w-8 h-8"
              />
              <h2 className="text-xl font-regular ml-3">About Us</h2>
            </div>
            <h1 className="text-4xl font-semibold mb-4">Our Mission</h1>
            <p className="text-lg mb-8">
              Our mission is simple: to make dorm hunting as seamless and
              stress-free as possible. We aim to connect students with dorms
              that match their lifestyle, preferences, and budget, ensuring a
              smooth transition into their academic journey.
            </p>
            <hr className="mx-8" />
            <h1 className="text-4xl mt-8 font-semibold mb-4">Our Story</h1>
            <p className="text-lg mb-4">
              PahingaU was founded by a group of former students who experienced
              firsthand the challenges of finding suitable dorm accommodations.
              Frustrated by the limited options, unclear information, and the
              overwhelming process, we decided to create a platform that
              simplifies dorm hunting for students everywhere.
            </p>
          </div>
        </div>
      </div>
      <div
        className="bg-cover bg-center py-16 flex justify-center items-center"
        style={{ backgroundImage: `url(${aboutsection3bg})` }}
      >
        <div className="about-section3-content w-4/5 flex flex-col lg:flex-row">
          <div className="lg:w-3/5 mb-8 lg:mb-0 text-white">
            <div className="flex items-center mb-4">
              <img
                src={aboutsection3icon}
                alt="Purple cube icon."
                className="w-10 h-10"
              />
              <h2 className="text-xl font-regular ml-3">PahingaU Features</h2>
            </div>
            <h1 className="text-4xl font-semibold mb-6">
              Your Ultimate Dorm Hunting Companion
            </h1>
            <Link to="/Login">
              <Button variant="whitelarge">Hunt Now!</Button>
            </Link>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap lg:space-x-6 space-y-6 lg:space-y-0 text-white lg:w-2/3">
            <div className="w-full lg:w-1/3 bg-transparent border border-white p-8 rounded-lg shadow-md flex flex-col items-center">
              <img
                src={aboutsection3column2}
                alt="A star shape icon."
                className="w-16 h-16 mb-4"
              />
              <h1 className="text-xl font-medium text-center mb-4">
                Comprehensive Listings
              </h1>
            </div>
            <div className="w-full lg:w-1/3 bg-transparent border border-white p-8 rounded-lg shadow-md flex flex-col items-center">
              <img
                src={aboutsection3column3}
                alt="A personalized search icon."
                className="w-16 h-16 mb-4"
              />
              <h1 className="text-xl font-medium text-center mb-4">
                Personalized Search
              </h1>
            </div>
            <div className="w-full lg:w-1/3 bg-transparent border border-white p-8 rounded-lg shadow-md flex flex-col items-center">
              <img
                src={aboutsection3column4}
                alt="A shield or badge icon."
                className="w-16 h-16 mb-4"
              />
              <h1 className="text-xl font-medium text-center mb-4">
                Secure and Easy
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="py-40 flex justify-center items-center">
        <div className="w-4/5 flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              src={aboutsection4img}
              alt="People studying and working on computers in a dorm room."
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="w-full lg:w-1/2 gap-8 lg:ml-10">
            <div className="flex items-center mb-4">
              <img
                src={aboutsection4icon}
                alt="A frequently asked questions icon."
                className="w-10 h-10"
              />
              <h2 className="text-xl font-regular ml-3">FAQ Question</h2>
            </div>
            <h1 className="text-4xl font-semibold lg:text-left text-center mb-6">
              Frequently asked questions
            </h1>
            <div className="flex flex-col space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="flex flex-col items-start">
                  <div className="flex items-center w-full text-custom-blue font-semibold">
                    <div className="w-1 h-8 bg-gray-300 rounded-l-lg mr-4"></div>
                    <p className="flex-grow text-lg">{faq.question}</p>
                    <button onClick={() => toggleFAQ(index)}>
                      <img
                        src={aboutsection4faqitem}
                        alt="Plus icon."
                        className="w-6 h-6"
                      />
                    </button>
                  </div>
                  {expanded[index] && (
                    <p className="text-base mt-2 ml-5">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
