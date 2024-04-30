import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
// import { toast } from "react-toastify";


const CountryDetails = () => {

    // const spotDetails = useLoaderData()
    const { id } = useParams();


    const [tourSpot, setTourSpot] = useState({});
    
    useEffect(() => {
        fetch(`http://localhost:5000/country/${id}`)
        .then((res) => res.json())
        .then(data => {
            setTourSpot(data);
            console.log(data);
        })
    }, [id]);

    
    const { 
        image, spotName, location, country, season, 
        visitor, 
        description 
    } = tourSpot;


    return (
        <div className="card lg:card-side bg-base-100 shadow-2xl border-2 ">
            <Helmet>
                <title>Horizon | Tour Spot Details</title>
            </Helmet>

            <figure className="object-contain w-1/2">
                <img src={image} className="h-full max-h-dvh "/>
            </figure>
            <div className="card-body w-1/2">
                <h2 className="card-title text-2xl font-bold font-serif bgred">{spotName }</h2>
                <p className="text-base font-serif">{location }, {country}</p>
                <div className="min-h-40 w-full space-y-2 mt-4 font-mono">

                    <p className="text-base">Spot Name : <span className='font-semibold'>
                        {spotName }
                    </span></p>
                    <p className="text-base">Location : <span className='font-semibold'>
                        { location}
                    </span></p>
                    <p className="text-base">Country : <span className='font-semibold'>
                        { country}
                    </span></p>
                    <p className="text-base">Tour Season : <span className='font-semibold'>
                        { season}
                    </span></p>
                    <p className="text-base">Visitor per Year : <span className='font-semibold'>
                        { visitor}
                    </span></p>
                    <p className="text-base">Description : <span className='font-semibold'>
                        {description }
                    </span></p>
                </div>
                
            </div>
        </div>
    );
};

export default CountryDetails;