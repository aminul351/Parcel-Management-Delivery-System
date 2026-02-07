import Marquee from "react-fast-marquee";
import logo1 from '../../../assets/brands/amazon.png'
import logo2 from '../../../assets/brands/casio.png'
import logo3 from '../../../assets/brands/moonstar.png'
import logo4 from '../../../assets/brands/randstad.png'
import logo5 from '../../../assets/brands/star.png'
import logo6 from '../../../assets/brands/amazon_vector.png'
import logo7 from '../../../assets/brands/amazon_vector.png'
import logo8 from '../../../assets/brands/start_people.png'

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

const LogoMarquee = () => {
    return (
        <div className="bg-gray-50 py-6">
            <Marquee
                gradient={false}       
                speed={50}             
                pauseOnHover={true}    
                className="flex items-center"
            >
                {logos.map((logo, index) => (
                    <div
                        key={index}
                        className="mx-6 w-32 h-16 flex items-center justify-center transition-transform duration-300 hover:scale-110"
                    >
                        <img src={logo} alt={`logo-${index}`} className="object-contain w-full h-full" />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default LogoMarquee;
