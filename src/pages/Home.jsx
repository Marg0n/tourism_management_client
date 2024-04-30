import { Helmet } from "react-helmet-async";
import Slider from "../components/Slider";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import TouristSpotCard from "../components/TouristSpotCard";
import { useLoaderData } from "react-router-dom";
import SingleCard from "../components/SingleCard";
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { AttentionSeeker } from "react-awesome-reveal";


const Home = () => {

    // loader
    const [loading, setLoading] = useState(true);
    const showSliders = useLoaderData();

    const [countries, setCountries] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/countries`)
            .then((res) => res.json())
            .then(data => {
                setCountries(data);
                // console.log(data);
            })
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const [typeEffect] = useTypewriter({
        words: ['Look into', ' these Awesome', 'Tourist Spots', ' within our view!'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40,
    })

    if (loading) {
        return <Loader />
    }



    return (
        <div>
            <Helmet>
                <title>Horizon | Home</title>
            </Helmet>

            <div className='h-[calc(dvh-240px)]'>
                <Slider showSliders={showSliders} />
            </div>

            <div className="mt-16">
                <h3 className="text-3xl font-bold text-center my-10 uppercase">Awesome Tourist Spots In South Asian Countries!</h3>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 my-12">
                    {
                        countries.map((aCountry, idx) => <TouristSpotCard
                            key={idx}
                            aCountry={aCountry}
                        />)
                    }
                </div>
            </div>

            <div className="mt-16">
                <AttentionSeeker effect='heartBeat' >

                    <h3 className="text-3xl font-bold text-center my-10 uppercase">
                        🌏
                        <span className='text-accent'>{typeEffect}</span>

                        <span className=''>
                            <Cursor cursorStyle='🌏' cursorBlinking={false} />
                        </span>
                    </h3>
                </AttentionSeeker>

                <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 my-12">

                    {
                        showSliders.slice(0, 6).map((touristSpot, index) => {
                            return <>
                                <AttentionSeeker effect='flash' >
                                    <SingleCard key={index} touristSpot={touristSpot} />
                                </AttentionSeeker>
                            </>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;