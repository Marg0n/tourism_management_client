
import { PropTypes } from 'prop-types';
import { GiTakeMyMoney } from 'react-icons/gi';
import { TfiRulerPencil } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { MdDeleteForever } from 'react-icons/md';

const MyListCard = ({ touristSpot }) => {

    const { user } = useAuth();

    const {
        _id, photo, spotName, location, country, cost, season,
        // travelTime, 
        visitor, email
        // description 
    } = touristSpot;
    // console.log(touristSpot)

    return (
        <div

            className="border-2 rounded-xl cursor-pointer hover:border-opacity-50 border-opacity-20 hover:scale-105 overflow-hidden hover:border-blue-700"
        >

            <div className="card shadow-2xl min-h-[80vh] ">
                <figure className="mx-8 mt-8 p-6 rounded-xl bg-gray-200">
                    <img
                        src={photo}
                        alt="Estate image"
                        className="rounded-xl h-56 w-full"
                    />
                </figure>
                <div className="card-body items-center text-start ">

                    <div className="h-28 w-full space-y-2 my-2">
                        <h2 className="text-xl font-semibold text-start font-serif">{spotName}</h2>
                        <p className="text-base">Country : <span className='font-semibold'> {country}</span></p>
                        <p className="text-base">Location : <span className='font-semibold'> {location}</span></p>
                        <p className="text-base">Best time to tour : <span className='font-semibold'> {season} Season</span></p>
                    </div>

                    <div className="divider"></div>

                    <div className="w-full flex justify-between">
                        <small className="flex gap-2 items-center">
                            <TfiRulerPencil className='fill-pink-700' />
                            Yearly Visitors {visitor}
                        </small>
                        <small className="flex gap-2 items-center">
                            <GiTakeMyMoney size='18' className='fill-green-700' />
                            Avg. budget {cost} TK
                        </small>
                    </div>
                </div>

                <div className='flex items-center justify-center gap-4'>

                    <Link to={`/allTouristSpot/${_id}`} className='btn m-4 bg-secondary hover:bg-blue-500 hover:text-white animate-pulse w-2/3'>View Details</Link>

                    {
                        user.email == email && <>
                            <button
                                className='btn btn-neutral hover:btn-error btn-circle'>
                                <MdDeleteForever
                                    size={20}
                                    className='text-primary group-hover:text-secondary'
                                />
                            </button>
                            <Link
                                to={`/myList/${_id}`}
                                className='btn btn-neutral hover:btn-info btn-circle  '>📝</Link>
                        </>
                    }
                </div>
            </div>

        </div>
    );
};

MyListCard.propTypes = {
    touristSpot: PropTypes.object,
}


export default MyListCard;