import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2';
import useAuth from "../hooks/useAuth";


const AddTouristSpot = () => {

    const { user } = useAuth();

    const handleAdd = e => {
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

        const newTouristSpot = { name, email, photo, spotName, country, location, cost, season, travelTime, visitor, description };

        console.log(newTouristSpot)

        //send data to server
        fetch('https://tourism-management-server-roan.vercel.app/addTouristSpot', {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(newTouristSpot)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data); 
                if (data?.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Added a new Tourist Spot! 🎉',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    }).then(() => {
                        form.reset(); // Reset the form fields
                    });
                }
            })
    }

    return (
        <div className="my-12 mx-44 min-h-[calc(100dvh-200px)] p-12 rounded-3xl border-primary border-2 shadow-2xl">
            <Helmet>
                <title>Horizon | Add Tourist Spot</title>
            </Helmet>

            <div className="mb-10 text-center">
                <h3 className="text-3xl text-info font-sans font-bold underline-offset-2 underline">Add A Tourist Spot</h3>
            </div>

            <form onSubmit={handleAdd}>
                <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-12 font-serif">
                    <label className="input input-bordered flex items-center gap-2">
                        Image URL
                        <input type="text" className="grow  text-primary" name="photo" placeholder="https://pthoto.com/600" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Tourists Spot Name
                        <input type="text" className="grow  text-primary" name="spotName" placeholder="Cox's Bazar" />
                    </label>
                    <label className="form-control w-full ">
                        <select className="select select-bordered" name="country">
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
                        <input type="text" className="grow  text-primary" name="location" placeholder="Chittagong" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Average Cost (TK)
                        <input type="text" className="grow  text-primary" name="cost" placeholder="8000" />
                    </label>
                    <label className="form-control w-full ">
                        <select className="select select-bordered" name="season">
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
                        <input type="text" className="grow  text-primary" name="travelTime" placeholder="7" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Total Visitors Per Year
                        <input type="text" className="grow  text-primary" name='visitor' placeholder="10000" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        User Name
                        <input type="text" className="grow  text-primary" placeholder="Tony Stark" name="name" defaultValue={user?.displayName} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        User Email
                        <input type="email" className="grow text-primary" placeholder="email@site.com" name="email" defaultValue={user?.email || ''} />
                    </label>

                    <label className="form-control lg:col-span-2 col-span-1">
                        <div className="label">
                            <span className="label-text">Short Description</span>
                        </div>
                        <textarea className="textarea textarea-bordered h-24  text-primary" name="description" placeholder="Longest sea beach of the world!..."></textarea>
                    </label>
                </div>

                <input className="btn btn-secondary mt-6 w-full" type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddTouristSpot;