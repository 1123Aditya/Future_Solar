import React from "react";
import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    { step: "1", title: "Site Assessment", desc: "We evaluate your location and energy needs." },
    { step: "2", title: "Custom Design", desc: "Tailored solar solutions for maximum efficiency." },
    { step: "3", title: "Professional Installation", desc: "Installed by certified technicians." },
    { step: "4", title: "System Activation", desc: "We test and activate your solar system." },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-10">Our Simple Installation Process</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-left text-sm">
          {steps.map(({ step, title, desc }) => (
            <motion.div
              key={step}
              whileHover={{ scale: 1.03 }}
              className="bg-slate-100 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold mb-2 text-green-700">
                {step}. {title}
              </h3>
              <p>{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
