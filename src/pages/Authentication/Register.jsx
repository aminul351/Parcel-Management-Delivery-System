import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { NavLink } from 'react-router';
import GoogleLogIn from './SocialLogIn/GoogleLogIn';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {

    const { createUser } = useAuth()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = data => {
        console.log(data)
        const { email, password } = data
        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                toast.success("user created successfully 🚀");
            })
            .catch((error) => {
                console.log(error)
            });

    }




    return (
        <div>
            <Toaster/>
            <form onSubmit={handleSubmit(onSubmit)}>

                <h3 className='text-4xl'>Create an account</h3>
                <fieldset className="fieldset">

                    <label className="label">Name</label>
                    <input type="name" {...register('name', { required: true })} className="input" placeholder="Email" />
                    {errors.name?.type === "required" && (
                        <p className='text-red-500' role="alert">Name  is required</p>
                    )}

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

                </fieldset>
                <div>
                    <button className="btn btn-neutral mt-4">Register</button>
                </div>
            </form>

            <div className='mt-4'>
                <p>Already have an account? <NavLink to={'/login'} className='text-blue-500 ml-4'>Login</NavLink></p>
            </div>

            <div className='mt-4'>
                <p className='my-2'>OR</p>
                <GoogleLogIn/>
            </div>
        </div>
    );
};

export default Register;