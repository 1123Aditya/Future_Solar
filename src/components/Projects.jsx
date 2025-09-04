import React, { useState, useEffect } from "react";

// Image Imports
import project1 from "../assets/Images/project1.jpg";
import project2 from "../assets/Images/project2.jpg";
import project3 from "../assets/Images/project3.jpg";
import project4 from "../assets/Images/project4.jpg";
import project5 from "../assets/Images/project5.jpg";
import project6 from "../assets/Images/project6.jpg";
import project7 from "../assets/Images/project7.jpg";
import project8 from "../assets/Images/project8.jpg";
import project9 from "../assets/Images/project9.jpg";

// New Images (your uploaded ones)
import project10 from "../assets/Images/project10.jpg";
import project11 from "../assets/Images/project11.jpg";
import project12 from "../assets/Images/project12.jpg";

export default function Projects() {
  const residentialProjects = [
    {
      img: project1,
      title: "Sangli Residential Installation",
      location: "Sangli, Maharashtra",
      details: "5kW rooftop solar system with premium panels",
    },
    {
      img: project2,
      title: "Karad Home Solar Setup",
      location: "Karad, Maharashtra",
      details: "3kW residential solar installation with battery backup",
    },
    {
      img: project3,
      title: "Atake Rooftop Solar",
      location: "Atake, Maharashtra",
      details: "4kW solar system for energy independence",
    },
    {
      img: project10,
      title: "Sonavade Rooftop Installation",
      location: "Sonavade, Maharashtra",
      details: "Residential rooftop solar with high-efficiency panels",
    },
    {
      img: project11,
      title: "Malewadi Solar Project",
      location: "Malewadi, Maharashtra",
      details: "Ground-mounted solar system for sustainable living",
    },
    {
      img: project12,
      title: "Sonavade Residential Solar",
      location: "Sonavade, Maharashtra",
      details: "Compact solar system providing clean energy",
    },
  ];

  const successfulProjects = [
    {
      img: project4,
      title: "Residential Solar Installation - Pune",
      location: "Pune, Maharashtra",
      type: "Residential",
      capacity: "5 kW",
      details: "Complete rooftop solution with battery backup",
      savings: "₹8,000/month",
      year: "2024",
    },
    {
      img: project5,
      title: "Commercial Complex - Mumbai",
      location: "Mumbai, Maharashtra",
      type: "Commercial",
      capacity: "50 kW",
      details: "Large-scale commercial installation with monitoring system",
      savings: "₹75,000/month",
      year: "2024",
    },
    {
      img: project6,
      title: "Industrial Solar Farm - Aurangabad",
      location: "Aurangabad, Maharashtra",
      type: "Industrial",
      capacity: "100 kW",
      details: "Mega-scale industrial installation with advanced systems",
      savings: "₹1,50,000/month",
      year: "2025",
    },
    {
      img: project7,
      title: "Residential Complex - Nashik",
      location: "Nashik, Maharashtra",
      type: "Residential",
      capacity: "25 kW",
      details: "Multi-unit complex with shared solar setup",
      savings: "₹35,000/month",
      year: "2024",
    },
    {
      img: project8,
      title: "Commercial Warehouse - Kolhapur",
      location: "Kolhapur, Maharashtra",
      type: "Commercial",
      capacity: "75 kW",
      details: "Warehouse with integrated solar and storage",
      savings: "₹95,000/month",
      year: "2025",
    },
    {
      img: project9,
      title: "Manufacturing Plant - Karad",
      location: "Karad, Maharashtra",
      type: "Industrial",
      capacity: "200 kW",
      details: "Comprehensive solar for large manufacturing plant",
      savings: "₹2,80,000/month",
      year: "2025",
    },
  ];

  // Contact details
  const whatsappNumber = "919356264126";
  const callNumber = "917350135344";
  const whatsappMessage =
    "Hello, I am interested in getting a free solar consultation.";

  // Function to open WhatsApp
  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(url, "_blank");
  };

  // Function to make call
  const makeCall = () => {
    window.location.href = `tel:${callNumber}`;
  };

  // Responsive column state
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    function updateColumns() {
      if (window.innerWidth >= 900) {
        setColumns(3);
      } else if (window.innerWidth >= 600) {
        setColumns(2);
      } else {
        setColumns(1);
      }
    }
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const styles = {
    section: {
      padding: "40px 20px",
      backgroundColor: "#f8fafc",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      textAlign: "center",
      fontSize: "32px",
      fontWeight: "bold",
      marginBottom: "8px",
    },
    subheading: {
      textAlign: "center",
      fontSize: "16px",
      color: "#4a5568",
      marginBottom: "40px",
    },
    gridResponsive: {
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    card: {
      background: "#fff",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08)",
      overflow: "hidden",
      transition: "transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease",
      cursor: "pointer",
      border: "1px solid transparent",
      animation: "slideIn 0.6s ease-out forwards",
      opacity: 0,
      transform: "translateX(-20px)",
    },
    cardHover: {
      transform: "translateY(-12px) scale(1.03)",
      boxShadow:
        "0 12px 30px rgba(47, 133, 90, 0.3), 0 12px 30px rgba(37, 99, 235, 0.2)",
      border: "1px solid #2f855a",
    },
    imageContainer: {
      position: "relative",
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "300px",
      objectFit: "cover",
      display: "block",
      transition: "transform 0.3s ease",
    },
    imageHover: {
      transform: "scale(1.1)",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(to bottom, rgba(47, 133, 90, 0.4), rgba(37, 99, 235, 0.4))",
      opacity: 0,
      transition: "opacity 0.3s ease",
    },
    overlayHover: {
      opacity: 1,
    },
    content: {
      padding: "16px",
    },
    title: {
      fontSize: "16px",
      fontWeight: "600",
      color: "#1a202c",
      marginBottom: "8px",
    },
    location: {
      fontSize: "14px",
      color: "#2f855a",
      fontWeight: "500",
      marginBottom: "6px",
    },
    details: {
      fontSize: "14px",
      color: "#4a5568",
      marginBottom: "6px",
    },
    savings: {
      fontSize: "15px",
      fontWeight: "bold",
      color: "#009933",
    },
    completed: {
      fontSize: "13px",
      color: "#444",
      marginTop: "4px",
    },
    badge: {
      display: "inline-block",
      padding: "4px 10px",
      borderRadius: "12px",
      fontSize: "12px",
      marginBottom: "12px",
      fontWeight: "600",
    },
    Residential: { backgroundColor: "#DBEAFE", color: "#2563EB" },
    Commercial: { backgroundColor: "#D1FAE5", color: "#047857" },
    Industrial: { backgroundColor: "#EDE9FE", color: "#7C3AED" },
    successTitle: {
      fontSize: "18px",
      fontWeight: "700",
      color: "#1E293B",
      margin: "8px 0 12px 0",
    },
    successDetails: {
      fontSize: "14px",
      color: "#64748B",
      marginBottom: "20px",
      lineHeight: "1.5",
    },
    infoRow: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "14px",
      color: "#475569",
      marginBottom: "8px",
    },
    infoLabel: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
    },
    infoValue: {
      fontWeight: "700",
      color: "#16A34A",
    },
    calendarIcon: {
      width: "16px",
      height: "16px",
      fill: "#64748B",
    },
  };

  const [hoveredCard, setHoveredCard] = useState(null);

  const globalStyles = `
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `;

  return (
    <>
      <style>{globalStyles}</style>

      {/* Features, Achievements, and Process Section */}
      <div className="py-12 px-4 bg-gradient-to-br from-green-50 via-blue-50 to-white rounded-2xl shadow-lg max-w-5xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <span className="text-3xl bg-green-100 rounded-full p-2">⚙️</span>
            <div>
              <h3 className="text-lg font-bold text-green-700 mb-1">Professional Installation</h3>
              <p className="text-slate-600">Seamless installation process by trained professionals with minimal disruption to your daily activities.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <span className="text-3xl bg-blue-100 rounded-full p-2">🛡️</span>
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-1">Comprehensive Warranty</h3>
              <p className="text-slate-600">Extensive warranty coverage on all components and workmanship with long-term performance guarantees.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-6 text-green-700">Achievements</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="bg-green-100 text-green-700 px-6 py-3 rounded-xl font-semibold shadow">ISO 9001<br /><span className="text-xs font-normal">Quality Management</span></div>
          <div className="bg-blue-100 text-blue-700 px-6 py-3 rounded-xl font-semibold shadow">MNRE<br /><span className="text-xs font-normal">Approved Vendor</span></div>
          <div className="bg-purple-100 text-purple-700 px-6 py-3 rounded-xl font-semibold shadow">IEC<br /><span className="text-xs font-normal">International Standards</span></div>
          <div className="bg-yellow-100 text-yellow-700 px-6 py-3 rounded-xl font-semibold shadow">5★ Rating<br /><span className="text-xs font-normal">Customer Rating</span></div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">Our Simple Installation Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow text-center">
            <div className="text-3xl font-bold text-green-700 mb-2">1</div>
            <h4 className="font-bold mb-1">Site Assessment</h4>
            <p className="text-slate-600 text-sm">We evaluate your location and energy needs.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow text-center">
            <div className="text-3xl font-bold text-blue-700 mb-2">2</div>
            <h4 className="font-bold mb-1">Custom Design</h4>
            <p className="text-slate-600 text-sm">Tailored solar solutions for maximum efficiency.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow text-center">
            <div className="text-3xl font-bold text-purple-700 mb-2">3</div>
            <h4 className="font-bold mb-1">Professional Installation</h4>
            <p className="text-slate-600 text-sm">Installed by certified technicians.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow text-center">
            <div className="text-3xl font-bold text-yellow-700 mb-2">4</div>
            <h4 className="font-bold mb-1">System Activation</h4>
            <p className="text-slate-600 text-sm">We test and activate your solar system.</p>
          </div>
        </div>
      </div>

      {/* Residential Projects */}
      <section style={styles.section}>
        <h2 style={styles.heading}>
          Our <span style={{ color: "#2f855a" }}>Residential Projects</span>
        </h2>
        <p style={styles.subheading}>
          Real installations from satisfied homeowners across Maharashtra who
          have achieved energy independence.
        </p>
        <div style={styles.gridResponsive}>
          {residentialProjects.map((project, index) => (
            <div
              key={index}
              style={{
                ...styles.card,
                ...(hoveredCard === `res-${index}` ? styles.cardHover : {}),
                animationDelay: `${index * 0.1}s`,
              }}
              onMouseEnter={() => setHoveredCard(`res-${index}`)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.imageContainer}>
                <img
                  src={project.img}
                  alt={project.title}
                  style={{
                    ...styles.image,
                    ...(hoveredCard === `res-${index}`
                      ? styles.imageHover
                      : {}),
                  }}
                />
                <div
                  style={{
                    ...styles.overlay,
                    ...(hoveredCard === `res-${index}`
                      ? styles.overlayHover
                      : {}),
                  }}
                />
              </div>
              <div style={styles.content}>
                <div style={styles.title}>{project.title}</div>
                <div style={styles.location}>{project.location}</div>
                <div style={styles.details}>{project.details}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Successful Projects */}
      <section style={styles.section}>
        <h2 style={styles.heading}>
          Our <span style={{ color: "#2f855a" }}>Successful Projects</span>
        </h2>
        <p style={styles.subheading}>
          Explore our portfolio of successful solar installations across
          Maharashtra. Each project represents our commitment to quality and
          customer satisfaction.
        </p>
        <div style={styles.gridResponsive}>
          {successfulProjects.map((p, i) => (
            <div
              key={i}
              style={{
                ...styles.card,
                ...(hoveredCard === `succ-${i}` ? styles.cardHover : {}),
                animationDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={() => setHoveredCard(`succ-${i}`)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.imageContainer}>
                <img
                  src={p.img}
                  alt={p.title}
                  style={{
                    ...styles.image,
                    ...(hoveredCard === `succ-${i}` ? styles.imageHover : {}),
                  }}
                />
                <div
                  style={{
                    ...styles.overlay,
                    ...(hoveredCard === `succ-${i}` ? styles.overlayHover : {}),
                  }}
                />
              </div>
              <div style={styles.content}>
                <span style={{ ...styles.badge, ...styles[p.type] }}>
                  {p.type}
                </span>
                <h3 style={styles.successTitle}>{p.title}</h3>
                <p style={styles.successDetails}>{p.details}</p>
                <div style={styles.infoRow}>
                  <span>Monthly Lightbill Savings:</span>
                  <span style={styles.infoValue}>{p.savings}</span>
                </div>
                <div style={styles.infoRow}>
                  <div style={styles.infoLabel}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      style={styles.calendarIcon}
                    >
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-7-8h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4h2v-2H8v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2z" />
                    </svg>
                    Completed:
                  </div>
                  <span style={{ fontWeight: "700" }}>{p.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Section */}
        <div className="bg-green-700 text-white rounded-2xl p-8 mt-6 max-w-3xl mx-auto text-center shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Start Your Solar Journey?
          </h2>
          <p className="mb-6">
            Join hundreds of satisfied customers who have made the switch to
            clean, renewable solar energy with Futuresun Energies.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={openWhatsApp}
              className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl shadow hover:bg-yellow-500 transition"
            >
              Get Free Consultation
            </button>
            <button
              onClick={makeCall}
              className="bg-transparent border border-white px-6 py-3 rounded-xl text-white font-semibold hover:bg-green-600 transition"
            >
              Call Now: {callNumber.slice(-10)}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
