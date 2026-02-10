import { useForm } from 'react-hook-form';
import { NavLink, useLocation, useNavigate } from 'react-router';
import GoogleLogIn from './SocialLogIn/GoogleLogIn';
import useAuth from '../../hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';



const Login = () => {
const {signIn} = useAuth()

 const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from || '/'

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = data => {
        signIn(data.email, data.password)
        .then(res => {
            console.log(res.user)
            navigate(from)
            toast.success("login successfully 🚀");
        })
        .catch(err => console.log(err))
        console.log(data)

    }


   

    return (
        <div >
            <Toaster/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className='text-4xl'>Log In!</h3>
                <fieldset className="fieldset">

                    <label className="label">Email</label>
                    <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                    {errors.email?.type === "required" && (
                        <p className='text-red-500' role="alert">Email  is required</p>
                    )}

                    <label className="label">Password</label>
                    <input type="password" {...register('password', { required: true, minLength: 6 })} className="input" placeholder="Password" />
                    {errors.password?.type === "required" && (
                        <p className='text-red-500' role="alert">Password  is required</p>
                    )}
                    {errors.password?.type === "minLength" && (
                        <p className='text-red-500' role="alert">Password should be more than 6 character</p>
                    )}

                    <div><a className="link link-hover">Forgot password?</a></div>
                </fieldset>
                <button className="btn btn-neutral mt-4">Login</button>
            </form>
            <div className='mt-4'>
                <p>Already have an account? <NavLink to={'/register'} className='text-blue-500 ml-4'>Register</NavLink></p>
            </div>

            <div className='mt-4'>
                <p className='my-2'>OR</p>
                <GoogleLogIn/>
            </div>
        </div>
    );
};

export default Login;