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
            
            <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 my-12">
                {
                    items.map((touristSpot, index) => {
                        return <MyListCard key={index} touristSpot={touristSpot}/>
                    })
                }
            </div>
        </div>
    );
};

export default MyList;