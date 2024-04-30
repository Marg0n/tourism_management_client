import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import MyListCard from "../components/MyListCard";


const MyList = () => {

    const {user} = useAuth();

    const [items, setItems] = useState([]);

    // DB connection GET
    useEffect(() =>{
        fetch(`http://localhost:5000/myList/${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            // console.log(data);
            setItems(data);
        })
    },[])



    return (
        <div>
            <Helmet>
                <title>Horizon | My List</title>
            </Helmet>
            
            
            <div className="overflow-x-auto my-12">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th>Spot Name</th>
                            <th>Location</th>
                            <th>Avg. Cost & Visitors/year</th>
                            <th>Tour Season</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    {/* body */}
                    <tbody>
                        {/* row  */}
                        {
                            items.map((touristSpot, index) => {
                                return <MyListCard key={index} touristSpot={touristSpot}/>
                            })
                        }
                        
                    </tbody>

                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default MyList;