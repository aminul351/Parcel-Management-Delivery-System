import { Outlet } from 'react-router';
import authImg from '../assets/authImage.png'
import Logo from '../shared/Logo/Logo';

const AuthLayout = () => {
    return (
        <div className="bg-base-200 p-12">
            <Logo />
            <div className="hero-content  gap-8 flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <img
                    src={authImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                </div>
                <div className='flex-1'>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;