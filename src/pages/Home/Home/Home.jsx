
import Marquee from 'react-fast-marquee';
import Banner from '../Banner/Banner';
import OurServices from '../OurServices/OurServices';
import LogoMarquee from '../LogoMarquee/LogoMarquee';

const Home = () => {
    return (
        <div>
            <Banner/>
            <OurServices/>
            <LogoMarquee/>
        </div>
    );
};

export default Home;