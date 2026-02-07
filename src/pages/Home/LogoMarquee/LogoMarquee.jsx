import Marquee from "react-fast-marquee";
import logo1 from '../../../assets/brands/amazon.png'
import logo2 from '../../../assets/brands/casio.png'
import logo3 from '../../../assets/brands/moonstar.png'
import logo4 from '../../../assets/brands/randstad.png'
import logo5 from '../../../assets/brands/star.png'
import logo6 from '../../../assets/brands/amazon_vector.png'
import logo7 from '../../../assets/brands/amazon_vector.png'
import logo8 from '../../../assets/brands/start_people.png'

const LogoMarquee = () => {
    return (
        <div>
            <Marquee>
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
                <img src={logo5} alt="" />
                <img src={logo6} alt="" />
                <img src={logo7} alt="" />
                <img src={logo8} alt="" />
            </Marquee>
        </div>
    );
};

export default  LogoMarquee;