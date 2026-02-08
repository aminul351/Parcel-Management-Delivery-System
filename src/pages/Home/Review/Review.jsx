import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Awlad Hossin",
    role: "Senior Product Designer",
    image: "https://i.pravatar.cc/100?img=1",
    message:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    name: "Rasel Ahamed",
    role: "CTO",
    image: "https://i.pravatar.cc/100?img=2",
    message:
      "Their delivery system is optimized and extremely fast. Parcels arrive safely without delays.",
  },
  {
    name: "Nasir Uddin",
    role: "CEO",
    image: "https://i.pravatar.cc/100?img=3",
    message:
      "Professional and reliable service. Highly recommended for urgent deliveries.",
  },
  {
    name: "Tanvir Hasan",
    role: "Customer",
    image: "https://i.pravatar.cc/100?img=4",
    message:
      "Excellent tracking system and smooth experience from pickup to doorstep delivery.",
  },
  {
    name: "Farhana Islam",
    role: "Online Boutique Owner",
    image: "https://i.pravatar.cc/100?img=5",
    message:
      "Fast pickup service and very professional riders. My parcels always arrive safely and on time.",
  },
];

const Review = () => {
  return (
    <section className="py-24 bg-[#f4f6f5] text-center">
      <h2 className="text-4xl font-bold text-[#0f3f3c]">
        What our customers are saying
      </h2>
      <p className="text-gray-500 mt-4 max-w-xl mx-auto">
        Enhance delivery speed, reliability, and customer satisfaction
        effortlessly with our trusted parcel service.
      </p>

      <div className="mt-16 max-w-6xl mx-auto px-6">
        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation]}
          effect="coverflow"
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 2,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`rounded-2xl p-8 transition-all duration-500 
                  ${
                    isActive
                      ? "bg-white shadow-xl scale-105 opacity-100"
                      : "bg-white/60 shadow-md opacity-40"
                  }`}
                >
                  {/* Quote Icon */}
                  <div className="text-4xl text-[#0f3f3c]/20 mb-4">“</div>

                  {/* Review Text */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-8">
                    {item.message}
                  </p>

                  {/* Horizontal Dotted Line */}
                  <div className="border-t border-dashed border-gray-300 my-6"></div>

                  {/* User Section */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <h4 className="font-semibold text-[#0f3f3c]">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Review;
