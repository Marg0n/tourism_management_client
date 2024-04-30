import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import SingleCard from "../components/SingleCard";


const AllTouristSpot = () => {

    const touristSpots = useLoaderData();
    // console.log('AllTouristSpot',touristSpots);

    return (
        <div>
            <Helmet>
                <title>Horizon | Tourist Spot</title>
            </Helmet>
            
            <h3 className="text-3xl  font-serif font-bold text-center underline">Tourist Spots to Visit</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 my-12">
                {
                    touristSpots.map((touristSpot, index) => {
                        return <SingleCard key={index} touristSpot={touristSpot}/>
                    })
                }
            </div>
        </div>
    );
};

export default AllTouristSpot;