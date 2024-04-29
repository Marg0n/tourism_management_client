import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";


const AllTouristSpot = () => {

    const touristSpots = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>Horizon | Tourist Spot</title>
            </Helmet>
            
            <h3>Tourist Spots: {touristSpots.length}</h3>
        </div>
    );
};

export default AllTouristSpot;