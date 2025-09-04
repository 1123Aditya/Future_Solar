import React from "react";
import { motion } from "framer-motion";

export default function Certifications() {
  const certifications = ["ISO 9001", "MNRE", "IEC", "5★ Rating"];

  return (
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
  );
}
