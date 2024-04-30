import { useForm } from "react-hook-form";
import {
    // Link, Navigate,
    // useLocation, 
    useNavigate
} from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {

    const { user, updateUserProfile } = useAuth();

    // Navigation
    const navigate = useNavigate();
    // const location = useLocation();
    // const whereTo = location?.state || '/login';
    const whereTo = '/profile';


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const {  name, photoURL } = data;

        // create user profile and update user
        
        updateUserProfile(name, photoURL)
            .then(() => {
                // Profile updated!
                toast.success("Registration successful!🎉", { autoClose: 3000, theme: "colored" })
                toast.info("Try to Login! 😁", { autoClose: 5000, theme: "colored" })
                // if (result.user) {
                navigate(whereTo)
                // }
            }).catch((errors) => {
                // An error occurred
                const errorMessage = errors.message.split(':')[1].split('(')[0].trim();

                toast.error(errorMessage, { autoClose: 3000, theme: "colored" })
            });

            
    }



    return (
        <div className="flex justify-center items-center my-10">
            <Helmet>
                <title>Oasis | Update Profile</title>
            </Helmet>

            
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl border-2 shadow-2xl font-semibold">
                <h1 className="text-2xl font-bold text-center font-serif">Update Profile</h1>

                <form
                    className="space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="space-y-1 text-sm">
                        <label htmlFor="name" className="block dark:text-gray-600">Name</label>

                        <input 
                        type="text" 
                        name="name" 
                        placeholder={
                            user?.displayName ?`Currently using: ${user?.displayName}`
                            : 'Name is not available'
                        } 
                            className="input input-bordered w-full"
                            {...register("name"
                            // , { required: true }
                        )}
                        />
                        <div className="mt-1 animate-pulse">
                            {errors.name && <span className="text-red-500">Please fill up Name field</span>}
                        </div>
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="photoURL" className="block dark:text-gray-600">Photo URL</label>

                        <input 
                        type="text" 
                        name="photoURL" 
                        placeholder={
                            user?.photoURL ?`Change your photo URL`
                            : 'No photo URL is given before'
                        } 
                        className="input input-bordered w-full"
                            {...register("photoURL"
                                // , { required: true }
                            )}
                        />
                        {/* <div className="mt-1 animate-pulse">
                            {errors.photoURL && <span className="text-red-500">Please fill up Photo URL field</span>}
                        </div> */}
                    </div>
                    
                    
                    <button className="btn bg-teal-400 w-full text-center rounded-lg hover:bg-blue-500 hover:text-white  border-none animate-pulse hover:animate-none">Update</button>
                </form>


                
            </div>
        </div>
    );
};

export default UpdateProfile;