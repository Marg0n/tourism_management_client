import 'animate.css';
import { useState } from "react";
import { Fade } from 'react-awesome-reveal';
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RxEyeClosed } from "react-icons/rx";
import { TfiEye } from "react-icons/tfi";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Loader from './../components/Loader';
import useAuth from './../hooks/useAuth';


const Login = () => {

    const { signInUser, googleLogin, gitHubLogin, user } = useAuth();

    // custom loader for login
    const [customLoader, setCustomLoader] = useState(false);

    // password show
    const [passShow, setPassShow] = useState(false);

    // Navigation
    const navigate = useNavigate();
    const location = useLocation();
    const whereTo = location?.state || '/';

    // React hook form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data;

        signInUser(email, password)
            .then(result => {

                setCustomLoader(true);
                // console.log(result.user)
                toast.success("Logged in successful!🎉", { autoClose: 2000, theme: "colored" })

                if (result.user) {
                    setCustomLoader(false);
                    navigate(whereTo)
                }

            })
            .catch(error => {

                setCustomLoader(false);
                const errorCode = error.code;
                // Remove 'auth/' prefix and '-' characters
                const cleanedErrorCode = errorCode.replace(/^auth\/|-/g, ' ');
                const words = cleanedErrorCode.split('-');
                const capitalizedWords = words.map(word => word.charAt(1).toUpperCase() + word.slice(2));
                const message = capitalizedWords.join(' ');
                toast.error(`${message}`, { autoClose: 5000, theme: "colored" })

            })
    }

    // Navigation handler for all social platform
    const handleSocialLogin = socialLoginProvider => {
        socialLoginProvider()
            .then(result => {
                if (result.user) {
                    toast.success("Logged in successful!🎉", { autoClose: 2000, theme: "colored" })
                    navigate(whereTo)
                }
            })
            .catch(error => {
                const errorCode = error.code;
                // Remove 'auth/' prefix and '-' characters
                const cleanedErrorCode = errorCode.replace(/^auth\/|-/g, ' ');
                const words = cleanedErrorCode.split('-');
                const capitalizedWords = words.map(word => word.charAt(1).toUpperCase() + word.slice(2));
                const message = capitalizedWords.join(' ');

                toast.error(`${message}`, { autoClose: 5000, theme: "colored" })
                navigate('/login')
            })
    }

    if (customLoader) {
        return <Loader />;
    }

    if (user && location?.pathname == '/login' && location?.state == null) {
        // toast.info(`Dear, ${user?.displayName || user?.email}! You are already Logged in!`, { autoClose: 3000, theme: "colored" });
        return <Navigate to='/' state={location?.pathname || '/'} />
    }

    return (
        <div className="flex justify-center items-center my-10">
            <Helmet>
                <title>Horizon | Login</title>
            </Helmet>

            <img
                src="https://cdn.pixabay.com/photo/2017/06/03/10/06/house-2368389_1280.jpg"
                alt=""
                className="bg-fixed absolute z-[-1] h-[155dvh] w-full object-cover"
            />

            <div className="w-full max-w-md p-8 space-y-3 rounded-xl border-2 shadow-2xl font-semibold">
                <h1 className="text-2xl font-bold text-center font-serif">Login</h1>

                <form
                    className="space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block dark:text-gray-600">Email</label>

                        <input type="email" name="email" placeholder="Email" className="input input-bordered w-full"
                            {...register("email", { required: true })}
                        />
                        <div className="mt-1 animate-pulse">
                            {errors.email && <span className="text-red-500">Please fill up Email field</span>}
                        </div>
                    </div>
                    <div className="space-y-1 text-sm relative">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>

                        <input
                            type={passShow ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            className="input input-bordered w-full"
                            {...register("password", { required: true })}
                        />
                        <span
                            onClick={() => setPassShow(!passShow)}
                            className="cursor-pointer absolute top-9 right-4"
                        >
                            {
                                passShow ? <TfiEye /> : <RxEyeClosed />
                            }
                        </span>
                        <div className="mt-1 animate-pulse">
                            {errors.password && <span className="text-red-500">Please fill up Password field</span>}
                        </div>
                        <div className="flex justify-end text-xs dark:text-gray-6000">
                            <Link to='' className="hover:text-rose-500">Forgot Password?</Link>
                        </div>
                    </div>
                    <button className="btn bg-secondary w-full text-center rounded-lg hover:bg-blue-500 hover:text-white border-none animate-pulse hover:animate-none">Log In </button>
                </form>

                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button aria-label="Log in with Google"
                        className="btn btn-circle btn-outline animate-pulse "
                        onClick={() => handleSocialLogin(googleLogin)}
                    >
                        <FcGoogle size='30' />
                    </button>
                    <button aria-label="Log in with Twitter"
                        className="btn btn-circle btn-outline animate-pulse"
                        onClick={() => handleSocialLogin(gitHubLogin)}
                    >
                        <FaGithub size='30' />
                    </button>
                </div>
                <p className="text-xs text-center sm:px-6 dark:text-gray-600">Don&apos;t have an account?
                    <Fade cascade damping={0.1} direction="up">
                        <Link to='/register' className="underline mx-2 text-blue-600 font-bold font-serif animate__animated animate__jello animate__infinite">Sign up</Link>
                    </Fade>
                </p>
            </div>
        </div>
    );
};

export default Login;