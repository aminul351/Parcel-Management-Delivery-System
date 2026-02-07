import logo from '../../assets/logo.png'

const Logo = () => {
    
    return (
        <div className='flex items-end'>
            <img src={logo} alt="logo" />
            <h2 className='-ml-2 text-3xl'>Profast</h2>
        </div>
    );
}; 

export default Logo;