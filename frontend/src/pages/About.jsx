import React from "react";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../utils/Animation";

const About = () => {
  return (
    <>
      <Navbar />
      <section>
        <Counter />

        {/* About Section */}
        <div className="mt-16">
          <h1 className="text-3xl md:text-4xl font-semibold mb-8 text-center text-gray-700">
            About Superio
          </h1>
          <div className="max-w-4xl text-center mx-auto space-y-6 text-gray-600">
            <motion.p
              variants={SlideUp(0.3)}
              initial="hidden"
              whileInView="visible"
              className="leading-relaxed"
            >
             Superio is a modern job portal designed to connect 
             talented job seekers with the right opportunities. 
             Our platform makes the hiring process simple, fast, 
             and effective for both candidates and employers.
            </motion.p>
            <motion.p
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView="visible"
              className="text-lg leading-relaxed"
            >
             For job seekers, Superio offers a wide range of opportunities across industries, with easy search and filter options to find the perfect match for their skills and goals. For employers, we provide smart tools to post jobs, manage applications, and hire the best talent efficiently.
            At Superio, our mission is to bridge the gap between ambition and opportunity by creating a platform that empowers people to grow in their careers while helping businesses find the right talent to succeed.
            </motion.p>
          </div>
        </div>

        <Testimonials />

        {/* How It Works Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-3">
              How It Works?
            </h1>
            <p className="text-lg text-gray-500">Job for anyone, anywhere</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Work Step 1 */}
            <motion.div
              variants={SlideLeft(0.2)}
              initial="hidden"
              whileInView="visible"
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={assets.work_1}
                  alt="Resume Assessment"
                  className="h-16 w-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Free Resume Assessments
              </h3>
              <p className="text-gray-600">
                Employers on average spend 31 seconds scanning resumes to
                identify potential matches.
              </p>
            </motion.div>

            {/* Work Step 2 */}
            <motion.div
              variants={SlideLeft(0.4)}
              initial="hidden"
              whileInView="visible"
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={assets.work_2}
                  alt="Job Fit Scoring"
                  className="h-16 w-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Job Fit Scoring
              </h3>
              <p className="text-gray-600">
                Our advanced algorithm scores your resume against job criteria.
              </p>
            </motion.div>

            {/* Work Step 3 */}
            <motion.div
              variants={SlideLeft(0.6)}
              initial="hidden"
              whileInView="visible"
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={assets.work_3}
                  alt="Help Every Step"
                  className="h-16 w-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Help Every Step of the Way
              </h3>
              <p className="text-gray-600">
                Receive expert guidance throughout your job search journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
