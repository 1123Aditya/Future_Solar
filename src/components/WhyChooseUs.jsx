import React from "react";
import { motion } from "framer-motion";

export default function WhyChoose() {
  const benefits = [
    {
      icon: "✅",
      title: "1000+ Successful Installations",
      desc: "Proven track record with over 1000 completed projects across residential, commercial, and industrial sectors.",
    },
    {
      icon: "🔧",
      title: "High Quality Components",
      desc: "We use only premium quality solar panels and components from trusted manufacturers with international certifications.",
    },
    {
      icon: "👷‍♂️",
      title: "Expert Team",
      desc: "Our certified engineers and technicians bring years of experience in solar system design and installation.",
    },
    {
      icon: "📞",
      title: "Excellent After-Sales Support",
      desc: "24/7 customer support with comprehensive maintenance services to ensure optimal system performance.",
    },
    {
      icon: "⚙️",
      title: "Professional Installation",
      desc: "Seamless installation process by trained professionals with minimal disruption to your daily activities.",
    },
    {
      icon: "🛡️",
      title: "Comprehensive Warranty",
      desc: "Extensive warranty coverage on all components and workmanship with long-term performance guarantees.",
    },
  ];

  const certifications = ["ISO 9001", "MNRE", "IEC", "5★ Rating"];

  const steps = [
    { step: "1", title: "Site Assessment", desc: "We evaluate your location and energy needs." },
    { step: "2", title: "Custom Design", desc: "Tailored solar solutions for maximum efficiency." },
    { step: "3", title: "Professional Installation", desc: "Installed by certified technicians." },
    { step: "4", title: "System Activation", desc: "We test and activate your solar system." },
  ];

  const testimonials = [
    {
      name: "John Doe",
      feedback: "Futuresun Energies transformed my home with their solar solutions. Highly recommend!",
    },
    {
      name: "Jane Smith",
      feedback: "Professional team and excellent after-sales support. A great investment!",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <section className="py-16 px-6 text-center bg-slate-50">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-4">
            Why Choose <span className="text-green-700">Futuresun Energies?</span>
          </h1>
          <p className="text-lg text-gray-600">
            We stand out in the solar industry through our commitment to excellence, quality, and customer satisfaction.
          </p>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-green-700">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Certifications */}
      <section className="py-12 px-6 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Achievements</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-lg transition text-center"
              >
                <h3 className="text-xl font-bold text-green-700 mb-2">{cert}</h3>
                <p className="text-sm text-gray-600">
                  {cert === "ISO 9001"
                    ? "Quality Management"
                    : cert === "MNRE"
                    ? "Approved Vendor"
                    : cert === "IEC"
                    ? "International Standards"
                    : "Customer Rating"}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Installation Process */}
      <section className="py-16 px-6 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-10">Our Simple Installation Process</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {steps.map(({ step, title, desc }, index) => (
    <motion.div
      key={step}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
        ease: "easeOut",
      }}
      className="bg-white rounded-2xl p-6 shadow-md border border-green-200 hover:shadow-xl hover:border-green-400 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center gap-5"
    >
      {/* Step Circle */}
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white font-bold text-lg shadow-lg">
        {step}
      </div>

      {/* Title */}
      <h3 className="text-green-800 text-xl font-semibold tracking-wide">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-600 text-base leading-relaxed">
        {desc}
      </p>
    </motion.div>
  ))}
</div>

        </motion.div>
      </section>

    </div>
  );
}