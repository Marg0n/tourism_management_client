import { Helmet } from "react-helmet-async";
import Slider from "../components/Slider";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";


const Home = () => {

        // loader
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const timer = setTimeout(() => {
                setLoading(false);
            }, 2000);
    
            return () => clearTimeout(timer);
        }, []);
    
        if(loading) {
            return <Loader/>
        }

    return (
        <div>
            <Helmet>
                <title>Horizon | Home</title>
            </Helmet>

            <div className='h-[calc(dvh-240px)]'>
                <Slider />
            </div>
        </div>
    );
};

export default Home;