
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { MdDeleteForever } from 'react-icons/md';
import 'animate.css';

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

        <tr>

            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{spotName}</div>
                        <div className="text-sm opacity-50">{location}</div>
                    </div>
                </div>
            </td>
            <td>{location}, {country}</td>
            <td>
                approximate {cost} Tk
                <br />
                <span className="badge badge-secondary badge-sm">
                    approximate {visitor}
                </span>
            </td>
            <td>{season}</td>
            <th className='flex items-center gap-4'>

                <Link to={`/allTouristSpot/${_id}`} className='btn bg-secondary hover:bg-blue-500 hover:text-white animate-pulse btn-xs'>View Details</Link>
                <button
                    className='btn btn-neutral hover:btn-error btn-xs  animate__animated animate__tada animate__infinite'>
                    <MdDeleteForever
                        size={20}
                        className='text-primary group-hover:text-secondary'
                    />
                </button>
                <Link
                    to={`/myList/${_id}`}
                    className='btn btn-neutral hover:btn-info btn-xs animate__animated  animate__jello animate__infinite'>📝</Link>
            </th>
        </tr>
    );
};

MyListCard.propTypes = {
    touristSpot: PropTypes.object,
}


export default MyListCard;