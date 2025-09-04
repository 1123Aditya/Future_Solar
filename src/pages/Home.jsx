import Stats from "../components/Stats";
import Services from "../components/Services";
import Projects from "../components/Projects";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <>
      {/* 🔹 Hero Section with Video Background */}
      <section className="relative w-full min-h-[100dvh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/fallback.jpg"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="./assets/back.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black/70 via-black/50 to-transparent z-10"></div>

        {/* Foreground Content */}
        <div className="relative z-20 w-full max-w-4xl mx-auto px-4 py-8 sm:py-12 md:py-20 flex flex-col gap-6">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-yellow-400">
            <span className="text-green-100">Powering a</span> Sustainable Future<span className="text-green-100"> with Solar Energy</span>
          </h1>
          <p className="text-base sm:text-lg md:text-2xl mb-6 text-white">
            Over <strong>1000+</strong> high-quality solar installations for homes,
            businesses, and industries. Join the clean energy revolution today.
          </p>

          {/* 🔹 CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a
          href="https://wa.me/9356264126?text=Hi%20Futuresun%20Energies%2C%20I%20would%20like%20to%20get%20a%20free%20solar%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-black px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
            >
              Get Free Quote
            </a>
            <a
              href="/projects"
              className="bg-green-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              View Our Projects
            </a>
          </div>

          {/* 🔹 Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 text-white">
            <div className="bg-green-800/60 p-4 rounded-lg shadow-md">
              <h2 className="text-xl md:text-3xl font-bold">1000+</h2>
              <p className="text-xs md:text-sm mt-1">Successful Installations</p>
            </div>
            <div className="bg-green-800/60 p-4 rounded-lg shadow-md">
              <h2 className="text-xl md:text-3xl font-bold">15+</h2>
              <p className="text-xs md:text-sm mt-1">Years Experience</p>
            </div>
            <div className="bg-green-800/60 p-4 rounded-lg shadow-md">
              <h2 className="text-xl md:text-3xl font-bold">24/7</h2>
              <p className="text-xs md:text-sm mt-1">Support Available</p>
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