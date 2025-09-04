export default function About() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* Company Overview */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h1 className="text-3xl font-bold text-green-700 mb-4">
            About Futuresun Energies
          </h1>
          <p className="text-gray-700 text-sm mb-4">
            Futuresun Energies Private Limited is a trusted name in solar energy solutions, delivering high-quality residential, commercial, and industrial installations with unmatched expertise and customer satisfaction.
          </p>
          <p className="text-gray-700 text-sm mb-4">
            With over <strong>500+</strong> successful installations across Maharashtra, we continue to provide the highest standards of quality and service. Our solutions help customers contribute to a sustainable future. Our team of professionals ensures every project meets the highest standards of quality and service.
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
            <li>Premium Quality</li>
            <li>After-Sales Support</li>
            <li>Comprehensive Service</li>
            <li>Expert Installation</li>
            <li>Warranty: Long-term Guarantee</li>
          </ul>
        </div>

        {/* Contact & Business Info */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-green-700 mb-4">Contact Information</h2>
          <ul className="text-sm text-gray-700 space-y-3">
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:7350135344 " className="text-green-600 hover:underline">7350135344</a> |{" "}
              <a href="tel:9860716072" className="text-green-600 hover:underline">9860716072</a>
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:futuresunenergies@gmail.com" className="text-green-600 hover:underline">
                futuresunenergies@gmail.com
              </a>
            </li>
            <li>
              <strong>Address:</strong><br />
              Shop No. 8, Shraddha Multipurpose Hall,<br />
              Near MacDonalds, Nandlapur,<br />
              Karad, Maharashtra, 415539
            </li>
          </ul>

          <h2 className="text-xl font-bold text-green-700 mt-6 mb-4">Business Hours</h2>
          <ul className="text-sm text-gray-700 space-y-2">
            <li><strong>Mon - Sat:</strong> 9:00 AM – 7:00 PM</li>
            <li><strong>Sun:</strong> 10:00 AM – 5:00 PM</li>
          </ul>

          {/* Google Map Embed */}
          <div className="mt-6">
            <iframe
              title="Futuresun Energies Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.9679047753177!2d74.16921831500225!3d17.21658508023028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc19d0056bb015d%3A0x346cb3b6611bdb11!2sShop%20No%208%2C%20Shraddha%20Multipurpose%20Hall%2C%20Near%20McDonalds%2C%20Nandlapur%2C%20Karad%2C%20Maharashtra%20415539!5e0!3m2!1sen!2sin!4v1693049520000"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
