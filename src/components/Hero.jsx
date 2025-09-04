import { FaQuoteRight, FaProjectDiagram } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Projects from "../components/Projects";
import WhyChooseUs from "../components/WhyChooseUs";
import Process from "../components/Process";
import Certifications from "../components/Certifications";
import ContactForm from "../components/ContactForm";


export default function Home() {
  return (
    <>
      {/* 🔹 Hero Section with Video Background */}
      <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/assets/solar-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-900/70 via-black/50 to-transparent"></div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-5xl px-6 text-white text-center">
          <h1 className="text-8x1 md:text-6xl font-bold mb-4 leading-tight text-color">
            <span className="text-green-100">Powering a</span> Sustainable Future<span className="text-green-100"> with Solar Energy</span>
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Over <strong>1000+</strong> high-quality solar installations for homes,
            businesses, and industries. Join the clean energy revolution today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a
              href="#contact"
              className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition flex items-center gap-2"
            >
              <FaQuoteRight /> Get Free Quote
            </a>
            <Link
              to="/projects"
              className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center gap-2"
            >
              <FaProjectDiagram /> View Our Projects
            </Link>
          </div>

          {/* 🔹 Highlighted Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white mt-4">
            <div className="bg-green-800/60 p-4 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold">1000+</h2>
              <p className="text-sm mt-1">Successful Installations</p>
            </div>
            <div className="bg-green-800/60 p-4 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold">15+</h2>
              <p className="text-sm mt-1">Years Experience</p>
            </div>
            <div className="bg-green-800/60 p-4 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold">24/7</h2>
              <p className="text-sm mt-1">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Other Sections */}
      <Stats />
      <Services />
      <Projects />
      <WhyChooseUs />
      <ContactForm />
    </>
  );
}
