import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import MyListCard from "../components/MyListCard";
import Swal from "sweetalert2";
import Loader from "../components/Loader";


const MyList = () => {

    const { user } = useAuth();

    const [items, setItems] = useState([]);
    const [control, setControl] = useState(false);


    // DB connection GET
    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setItems(data);
            })
    }, [user, control])

    //delete items
    const handleDelete = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this! 😱",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!😉",
            cancelButtonText: "No, cancel! 😨",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                //delete
                fetch(`http://localhost:5000/delete/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            swalWithBootstrapButtons.fire({
                                title: "Deleted!",
                                text: "Tourist Spot has been deleted! 🥲",
                                icon: "success"
                            });
                            //reset the page using useEffect
                            setControl(!control);
                        }

                    })
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Delete Cancelled!",
                    text: "Tourist Spot is still there! ✌️",
                    icon: "error"
                });
            }
        });


    };

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
                                return <MyListCard key={index} touristSpot={touristSpot}
                                    handleDelete={handleDelete} />
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