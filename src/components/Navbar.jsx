import { Link, NavLink } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";

const Navbar = () => {
        
    // const { loggedOut, user } = useAuth();

    const lists = <>
    <a href="">asdasd</a>
    <a href="">asdasd</a>
    <a href="">asdasd</a>
    </>

    // const lists = <>
    //     <NavLink
    //         className={({ isActive }) =>
    //             isActive ? "text-blue-700 font-bold mr-4" : "font-bold mr-4"}
    //         to="/">Home</NavLink>
    //     {
    //         user &&
    //         <>
    //             <NavLink
    //                 className={({ isActive }) =>
    //                     isActive ? "text-blue-700 font-bold mr-4" : "font-bold mr-4"}
    //                 to="/update">Update Profile</NavLink>
    //             <NavLink
    //                 className={({ isActive }) =>
    //                     isActive ? "text-blue-700 font-bold mr-4" : "font-bold mr-4"}
    //                 to="/profile">User Profile</NavLink>
    //         </>
    //     }

    //     {
    //         !user ? <NavLink
    //         className={({ isActive }) =>
    //             isActive ? "text-blue-700 font-bold mr-4" : "font-bold mr-4"}
    //         to="/register">Register</NavLink>
    //         : ''
    //     }
    //     <NavLink
    //         className={({ isActive }) =>
    //             isActive ? "text-blue-700 font-bold mr-4" : "font-bold mr-4"}
    //         to="/about">About</NavLink>

        
    // </>;
    return (
        <div className="navbar bg-base-200 shadow-2xl container my-4 mx-auto rounded-lg font-serif">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {lists}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl hover:bg-blue-400">Oasis</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex justify-center items-center">
                    {lists}
                </ul>
            </div>

            {/* <div className="navbar-end cursor-pointer">

                {
                    user ?

                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-outline avatar animate-pulse">
                                <div className="w-10 rounded-full">

                                    <img 
                                    title={`${user?.displayName || user?.email}`}
                                    alt="Tailwind CSS Navbar component"
                                        src=
                                        {
                                            user?.photoURL ? user?.photoURL
                                                : "https://i.ibb.co/8dJbHdP/No-Photo-Available.webp"
                                        }
                                    />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[2] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-64">
                                <li >
                                    <p className="flex justify-center items-center">
                                        Hi, <span className=" text-blue-500 font-serif">
                                            {
                                                user?.displayName || user?.email
                                            }
                                        </span>
                                    </p>
                                </li>
                                <li
                                    className="rounded-xl p-2 m-2 text-right hover:bg-blue-500 hover:text-white animate-pulse"
                                    onClick={loggedOut}
                                >
                                    Logout</li>
                            </ul>
                        </div>

                        : <Link to="/login"
                            className="btn btn-outline text-center rounded-lg hover:bg-blue-500 hover:text-white hover:border-0   animate-pulse"
                        >
                            Login</Link>
                }

            </div> */}
        </div>
    );
};

export default Navbar;