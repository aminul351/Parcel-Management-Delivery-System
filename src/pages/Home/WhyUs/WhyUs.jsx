import img1 from "../../../assets/whyusimg1.png";
import img2 from "../../../assets/whyusimg2.png";

const WhyUs = () => {


    const features = [
        {
            title: "Lightning Fast Delivery",
            description:
                "We understand that time matters. That’s why our optimized routing system and dedicated riders ensure your parcel reaches its destination as quickly as possible. Whether it's an urgent document, a gift, or a business package, we prioritize speed without compromising safety.",
            img: img1,
        },
        {
            title: "Real-Time Tracking",
            description:
                "Our smart tracking system allows you to monitor your delivery from pickup to final drop-off. Get live updates, estimated arrival times, and instant notifications so you’re never left guessing. Transparency and reliability are part of our promise.",
            img: img2,
        },
        {
            title: "Easy Pickup & Hassle-Free Booking",
            description:
                "With our user-friendly app interface, scheduling a delivery takes only a few taps. No complicated forms, no waiting on calls. Just enter the details, confirm your booking, and our rider will handle the rest — making the entire process smooth and stress-free.",
            img: img1,
        },
    ];


    return (
        <div className="py-12 text-primary max-w-6xl mx-auto  px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Why Choose Us?
            </h2>
            <p className="text-secondary text-center mb-16">
                We don’t just deliver parcels — we deliver speed, reliability,
                and peace of mind.
            </p>

            <div>

                <div className="space-y-16">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex justify-center items-center gap-10  "
                        >
                            {/* Left Side Image */}
                            <div className="flex justify-center md:justify-end">
                                <img
                                    src={feature.img}
                                    alt={feature.title}
                                    className="w-full md:w-64"
                                />
                            </div>

                            {/* Right Side Text */}
                            <div className="text-center md:text-left md:border-l-4 md:border-dotted md:border-gray-300 md:pl-10">
                                <h3 className="text-2xl font-semibold mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default WhyUs;