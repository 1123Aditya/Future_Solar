import { Link } from "react-router-dom";

const Card = ({ title, children, points, image, icon }) => {
  const whatsappMessage = `Hello, I am interested in ${title}. Please provide more details.`;
  const whatsappLink = `https://wa.me/919356264126?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transform transition duration-300">
      {/* Image Section */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-3 left-3 bg-white p-2 rounded-full shadow">
          <img src={icon} alt="icon" className="w-6 h-6" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col items-center text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{children}</p>
        <ul className="mt-4 space-y-1 text-sm text-gray-700 list-disc text-left pl-5">
          {points.map((p, index) => (
            <li key={index}>{p}</li>
          ))}
        </ul>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-2 rounded-lg shadow transition"
        >
          Get Quote →
        </a>
      </div>
    </div>
  );
};

export default function Services() {
  return (
    <section className="section bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-green-700">
          Our Solar Solutions
        </h2>
        <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">
          Comprehensive solar energy solutions tailored to meet your specific
          needs, from residential homes to large industrial facilities.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <Card
            title="Residential Solar Systems"
            image="https://i.postimg.cc/1RMSq88R/residential-solar.jpg"
            icon="https://i.postimg.cc/D057fZXZ/home.png"
            points={[
              "Rooftop solar panel installation",
              "Grid-tied and off-grid systems",
              "Battery backup solutions",
              "Net metering consultation",
            ]}
          >
            Energy independence for your home with custom-designed solar
            solutions that reduce electricity bills and increase property value.
          </Card>

          <Card
            title="Commercial Solar Systems"
            image="https://i.postimg.cc/HsZTfrmv/Commercial-solar.jpg"
            icon="https://i.postimg.cc/MHzW8RXN/building.png"
            points={[
              "Large-scale installations",
              "Commercial financing options",
              "Energy monitoring systems",
              "Maintenance packages",
            ]}
          >
            Cost-efficient power solutions for businesses to reduce operational
            costs and demonstrate environmental responsibility.
          </Card>

          <Card
            title="Industrial Solar Systems"
            image="/assets/Images/Industrial_Solar_Systems.jpg"
            icon="/assets/Images/industry.png"
            points={[
              "Mega-watt installations",
              "Custom engineering solutions",
              "Power purchase agreements",
              "24/7 monitoring systems",
            ]}
          >
            Large-scale sustainable energy solutions for industrial facilities
            with maximum efficiency and reliability.
          </Card>
        </div>

        {/* Why Choose Solar Energy Section */}
        <section className="bg-green-50 text-center py-10 rounded-xl mx-6 md:mx-20 my-10">
          <h3 className="text-xl font-semibold mb-6">Why Choose Solar Energy?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-3xl font-bold text-green-600">80%</p>
              <p className="text-gray-600">Reduction in Electricity Bills</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-600">25+</p>
              <p className="text-gray-600">Years System Lifespan</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-600">100%</p>
              <p className="text-gray-600">Clean & Renewable Energy</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
