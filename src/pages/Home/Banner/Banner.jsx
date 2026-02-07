import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Lottie from "lottie-react";
import anim1 from '../../../assets/animation/anim1.json'
import anim2 from '../../../assets/animation/anim2.json'
import anim3 from '../../../assets/animation/anim3.json'

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto ">
            <Carousel autoPlay={true} direction='horizontal' infiniteLoop={true} interval={3000} showArrows={true} >
                <div className="flex items-center content-center px-12">
                    <div className="w-1/2 text-left">
                    <h2 className="text-6xl font-bold mb-4">
                        We Make Sure Your <span className="text-[#B8DB4F]">Parcel Arrives</span> On Time - No Fuss.
                    </h2>
                    <p className="text-gray-600">
                        Fast, secure, and hassle-free delivery you can trust.
                    </p>
                </div>

                <div className="w-1/2 p-2">
                    <Lottie animationData={anim1} loop />
                </div>
                </div>



                <div className="flex items-center content-center px-12">
                    <div className="w-1/2 text-left">
                    <h2 className="text-6xl font-bold mb-4">
                        <span className="text-[#B8DB4F]">Fastest</span>  Delivery & Easy <span className="text-[#B8DB4F]">Pickup</span>  
                    </h2>
                    <p className="text-gray-600">
                        Quick shipping with smooth and convenient pickup options.
                    </p>
                </div>

                <div className="w-1/2 p-2">
                    <Lottie animationData={anim2} loop />
                </div>
                </div>





                <div className="flex items-center content-center px-12">
                    <div className="w-1/2 text-left">
                    <h2 className="text-6xl font-bold mb-4">
                        Delivery in <span className="text-[#B8DB4F]">30 Minutes</span>  — Right at Your <span className="text-[#B8DB4F]">Doorstep</span>  
                    </h2>
                    <p className="text-gray-600">
                        Because your time matters.
                    </p>
                </div>

                <div className="w-1/2">
                    <Lottie animationData={anim3} loop />
                </div>
                </div>

            </Carousel>
        </div>
    );
};

export default Banner;