import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterSection from "./components/FooterSection";


const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto my-6 min-h-[calc(100vh-400px)] ">
                <Outlet />
            </div>
            <FooterSection />
        </div>
    );
};

export default Root;