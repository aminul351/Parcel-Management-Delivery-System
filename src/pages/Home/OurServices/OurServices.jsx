import { FaShippingFast, FaGlobe, FaBoxes, FaMoneyBillWave, FaBuilding, FaUndo } from "react-icons/fa";

const services = [
  {
    icon: <FaShippingFast className="text-4xl text-blue-500" />,
    title: "Express & Standard Delivery",
    description: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off."
  },
  {
    icon: <FaGlobe className="text-4xl text-green-500" />,
    title: "Nationwide Delivery",
    description: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours."
  },
  {
    icon: <FaBoxes className="text-4xl text-yellow-500" />,
    title: "Fulfillment Solution",
    description: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support."
  },
  {
    icon: <FaMoneyBillWave className="text-4xl text-red-500" />,
    title: "Cash on Home Delivery",
    description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product."
  },
  {
    icon: <FaBuilding className="text-4xl text-purple-500" />,
    title: "Corporate Service / Contract In Logistics",
    description: "Customized corporate services which includes warehouse and inventory management support."
  },
  {
    icon: <FaUndo className="text-4xl text-pink-500" />,
    title: "Parcel Return",
    description: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants."
  }
];


const OurServices = () => {
    return (
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="  bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:bg-[#B8DB4F]">
              <div className="mb-4 flex justify-center items-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default OurServices;