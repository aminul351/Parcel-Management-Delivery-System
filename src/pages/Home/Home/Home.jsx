
import Marquee from 'react-fast-marquee';
import Banner from '../Banner/Banner';
import OurServices from '../OurServices/OurServices';
import LogoMarquee from '../LogoMarquee/LogoMarquee';
import WhyUs from '../WhyUs/WhyUs';
import Merchant from '../Merchant/Merchant';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner/>
            <OurServices/>
            <LogoMarquee/>
            <WhyUs/>
            <Merchant/>
            <Review/>
        </div>
    );
};

export default Home;