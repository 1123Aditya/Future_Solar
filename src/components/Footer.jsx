import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const mapsUrl = `https://www.google.com/maps/place/Shraddha+Multipurpose+Hall/@17.216135,74.1694029,18z/data=!4m12!1m5!3m4!2zMTfCsDEyJzU5LjIiTiA3NMKwMTAnMTMuNiJF!8m2!3d17.2164488!4d74.1704338!3m5!1s0x3bc19d0056bb015d:0x346cb3b6611bdb11!8m2!3d17.2165851!4d74.1714078!16s%2Fg%2F11ww_cyl49?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D`;

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="container py-14 grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        {/* Logo & About */}
        <div>
          <div className="flex justify-center md:justify-start items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-green-600 text-white grid place-content-center font-bold">
              F
            </div>
            <div className="font-extrabold text-xl text-white">
              Futuresun Energies
            </div>
          </div>
          <p className="mt-4 text-sm max-w-xs mx-auto md:mx-0">
            Leading solar energy solutions provider with 1000+ successful
            installations across Maharashtra. Trusted for quality, reliability,
            and excellent service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white">Our Services</Link></li>
            <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-3">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Residential Solar Systems</li>
            <li>Commercial Solar Solutions</li>
            <li>Industrial Solar Installations</li>
            <li>Solar System Maintenance</li>
            <li>Energy Auditing</li>
            <li>Solar Financing</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact Information</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-center md:justify-start items-center gap-2">
              <Phone className="w-4 h-4 text-white" />
              <a href="tel:7350135344" className="hover:text-white">7350135344</a>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <Phone className="w-4 h-4 text-white" />
              <a href="tel:9860716072" className="hover:text-white">9860716072</a>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <Mail className="w-4 h-4 text-white" />
              <a href="mailto:futuresunenergies@gmail.com" className="hover:text-white">
                futuresunenergies@gmail.com
              </a>
            </li>
            <li className="flex justify-center md:justify-start items-start gap-2">
              <MapPin className="w-4 h-4 text-white mt-1" />
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Shop No 8, Shraddha Multipurpose Hall,<br />
                Near McDonald's, Nandlapur,<br />
                Karad, Maharashtra, 415539
              </a>
            </li>
          </ul>
        </div>
      </div>
       <div className="border-t border-gray-800 py-4 text-center text-xs">
          © 2024 Futuresun Energies Private Limited. All rights reserved.
          <div className="flex justify-center gap-4 mt-2">•{' '}
            <span>Privacy Policy</span>•{' '}
            <span>Terms of Service</span>•{' '}
            <span>Sitemap</span>
          </div>
        </div>
    </footer>
  );
}