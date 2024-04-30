import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/useAuth";
import Swal from 'sweetalert2'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";

const UpdateTouristSpot = () => {

    const { user } = useAuth();

    const { id } = useParams();

     // Navigation
     const navigate = useNavigate();


    const [tourSpot, setTourSpot] = useState({});

    //get data to server
    useEffect(() => {
        fetch(`http://localhost:5000/allTouristSpot/${id}`)
            .then((res) => res.json())
            .then(data => {
                setTourSpot(data);
                console.log(data);
            })
    }, [id]);

    const {
        // _id, 
        photo, spotName, location, country, cost, season,
        travelTime,
        visitor,
        description
    } = tourSpot;

    // console.log(tourSpot);

    // update tour spot
    const handleUpdate = e => {
        e.preventDefault();

        const form = e.target;
        //getting value
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const spotName = form.spotName.value;
        const country = form.country.value;
        const location = form.location.value;
        const cost = form.cost.value;
        const season = form.season.value;
        const travelTime = form.travelTime.value;
        const visitor = form.visitor.value;
        const description = form.description.value;

        const updateSpot = { name, email, photo, spotName, country, location, cost, season, travelTime, visitor, description };

        // console.log(updateSpot)



        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PUT',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(updateSpot)
        })
            .then(res => res.json())
            .then(data => { 
                // console.log(data); 
                if(data?.modifiedCount>0){
                    Swal.fire({
                        title: 'Successfully Updated!',
                        text: 'Updated the Tourist Spot! 🎉',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      }).then(() => {
                        navigate('/myList'); // navigate
                    });
                }
            })
    }

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
        <div className="my-12 mx-44 min-h-[calc(100dvh-200px)] p-12 rounded-3xl border-primary border-2 shadow-2xl">
            <Helmet>
                <title>Horizon | Add Tourist Spot</title>
            </Helmet>

            <div className="mb-10 text-center">
                <h3 className="text-3xl text-info font-sans font-bold underline-offset-2 underline">Add A Tourist Spot</h3>
            </div>

            <form onSubmit={handleUpdate}>
                <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-12 font-serif">
                    <label className="input input-bordered flex items-center gap-2">
                        Image URL
                        <input type="text" className="grow  text-primary" name="photo" placeholder="https://pthoto.com/600" defaultValue={photo}/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Tourists Spot Name
                        <input type="text" className="grow  text-primary" name="spotName" placeholder="Cox's Bazar" defaultValue={spotName}/>
                    </label>
                    <label className="form-control w-full ">
                        <select className="select select-bordered" name="country" defaultValue={country}>
                            <option disabled selected value="">Pick one Country</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Vietnam">Vietnam</option>
                        </select>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Location
                        <input type="text" className="grow  text-primary" name="location" placeholder="Chittagong" defaultValue={location}/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Average Cost (TK)
                        <input type="text" className="grow  text-primary" name="cost" placeholder="8000" defaultValue={cost}/>
                    </label>
                    <label className="form-control w-full ">
                        <select className="select select-bordered" name="season" defaultValue={season}>
                            <option disabled selected value="">Pick one Season</option>
                            <option value="Summer">Summer</option>
                            <option value="Winter">Winter</option>
                            <option value="Rainy">Rainy</option>
                            <option value="Autumn">Autumn</option>
                            <option value="Late Autumn">Late Autumn</option>
                            <option value="Spring">Spring</option>
                        </select>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Travel Time (Days)
                        <input type="text" className="grow  text-primary" name="travelTime" placeholder="7" defaultValue={travelTime}/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Total Visitors Per Year
                        <input type="text" className="grow  text-primary" name='visitor' placeholder="10000" defaultValue={visitor}/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        User Name
                        <input type="text" className="grow  text-primary" placeholder="Tony Stark" name="name" defaultValue={user?.displayName} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        User Email
                        <input type="email" className="grow text-primary" placeholder="email@site.com" name="email" defaultValue={user?.email} required />
                    </label>

                    <label className="form-control lg:col-span-2 col-span-1">
                        <div className="label">
                            <span className="label-text">Short Description</span>
                        </div>
                        <textarea className="textarea textarea-bordered h-24  text-primary" name="description" placeholder="Longest sea beach of the world!..." defaultValue={description}></textarea>
                    </label>
                </div>

                <input className="btn btn-secondary mt-6 w-full" type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateTouristSpot;