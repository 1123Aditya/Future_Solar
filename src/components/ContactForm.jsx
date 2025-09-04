import { useState } from "react";

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");
  const yourWhatsAppNumber = "9356264126";

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    if (!fullName || !phone || !email || !projectType) {
      alert("Please fill in all required fields.");
      return;
    }
    const text =
    `🌞 *Solar Enquiry Form* 🌞\n\n` +
  `👤 *Full Name:* ${fullName}\n` +
  `📞 *Phone Number:* ${phone}\n` +
  `📧 *Email Address:* ${email}\n` +
  `🏗️ *Project Type:* ${projectType}\n` +
  `📝 *Message:* ${message || "N/A"}\n\n` +
  `✅ Our team will contact you shortly!`;
    const whatsappURL = `https://wa.me/${yourWhatsAppNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="bg-gray-50 py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold font-sans text-gray-900 tracking-wide">
            Get{" "}
            <span className="text-green-600 border-b-2 border-green-600">
              In Touch
            </span>
          </h2>
          <p className="mt-3 text-gray-600 md:text-lg max-w-xl mx-auto">
            Ready to start your solar journey? Contact us today for a free
            consultation and personalized solar solution for your property.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form Card */}
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-semibold text-xl mb-6">Send Us Your Enquiry</h3>
            <form className="space-y-5" onSubmit={handleWhatsAppSend}>
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1">
                  <label className="block text-gray-700 mb-1 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-gray-700 mb-1 font-medium">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-1 font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1 font-medium">
                  Project Type *
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                >
                  <option value="">Select project type</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Industrial</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-1 font-medium">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-lg py-3 font-semibold transition-transform duration-300 hover:scale-105"
              >
                Send Enquiry
              </button>
              <p className="text-center mt-3 text-sm text-gray-600">
                Or get instant response via WhatsApp
              </p>
              <a
                href={`https://wa.me/${yourWhatsAppNumber}?text=${encodeURIComponent(
                  "Hi, I would like a solar quote."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center items-center gap-2 mt-3 bg-green-600 hover:bg-green-700 text-white rounded-lg py-3 font-bold transition-transform duration-300 hover:scale-105"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.52 3.48A12 12 0 1 0 11.99 24a11.93 11.93 0 0 0 6.3-1.84l.46-.3-1.31-3.99-.52.28a8.66 8.66 0 0 1-4.34 1.16A8.65 8.65 0 0 1 3.53 12c0-4.81 3.92-8.72 8.73-8.72a8.66 8.66 0 0 1 7.06 3.24l.3.41 3.52-1.41-.14-.29a12 12 0 0 0-2.26-2.35z" />
                </svg>
                GET QUOTE ON WHATSAPP
              </a>
            </form>
          </div>

          {/* Right Card Section */}
          <div className="flex flex-col gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <h4 className="text-lg font-bold text-green-700 mb-5">Quick Contact</h4>
              <dl className="space-y-4 text-gray-700">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="w-3 h-3 bg-green-600 rounded-full inline-block"></span>
                  <dt className="font-semibold">Call Us Now:</dt>
                  <dd>
                    <a
                      href="tel:7350135344"
                      className="text-green-700 hover:underline ml-2"
                    >
                      7350135344
                    </a>
                    <span className="mx-2">|</span>
                    <a
                      href="tel:9860716072"
                      className="text-green-700 hover:underline"
                    >
                      9860716072
                    </a>
                  </dd>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="w-3 h-3 border-2 border-green-600 rounded-sm inline-block"></span>
                  <dt className="font-semibold">Email Us:</dt>
                  <dd>
                    <a
                      href="mailto:futuresunenergies@gmail.com"
                      className="text-green-700 hover:underline ml-2"
                    >
                      futuresunenergies@gmail.com
                    </a>
                  </dd>
                </div>
                <div className="flex flex-wrap items-start gap-2">
                  <span className="w-3 h-3 bg-green-600 rounded-full mt-1 inline-block"></span>
                  <dt className="font-semibold">Visit Our Office:</dt>
                  <dd className="ml-2 max-w-sm">
                    Shop No 8, Shraddha Multipurpose Hall, Near MacDonalds,
                    Nandlapur, Karad, Maharashtra, 415539
                  </dd>
                </div>
              </dl>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <h4 className="text-lg font-semibold text-green-700 mb-5">
                Business Hours
              </h4>
              <dl className="text-gray-700 text-sm space-y-2 max-w-sm">
                <div className="flex justify-between">
                  <dt>Monday - Friday</dt>
                  <dd>9:00 AM - 7:00 PM</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Saturday</dt>
                  <dd>9:00 AM - 6:00 PM</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Sunday</dt>
                  <dd>10:00 AM - 5:00 PM</dd>
                </div>
              </dl>
            </div>

            <div className="bg-green-900 text-white p-5 rounded-2xl shadow-xl text-center">
              <h4 className="font-semibold text-lg mb-3">24/7 Emergency Support</h4>
              <p className="text-sm mb-4 max-w-sm txt-center mx-auto">
                For urgent solar system issues or emergencies, our technical support team is available 24/7.
              </p>
              <a
                href="tel:7350135344"
                className="bg-yellow-400 hover:bg-yellow-300 text-green-900 font-semibold rounded-md py-2 px-5 inline-block transition"
              >
                Emergency Support: 7350135344
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
