
import { PropTypes } from 'prop-types';
import { GiTakeMyMoney } from 'react-icons/gi';
import { TfiRulerPencil } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

const SingleCard = ({ touristSpot }) => {

    

    const { 
        _id,  photo, spotName, location, country, cost, season, 
        // travelTime, 
        visitor, 
        // description 
    } = touristSpot;
    // console.log(touristSpot)

    return (
        <div

            className="relative border-2 rounded-xl cursor-pointer hover:border-opacity-50 border-opacity-20 hover:scale-105 overflow-hidden hover:border-blue-700"
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
                <Link to={`/allTouristSpot/${_id}`} className='btn m-4 bg-secondary hover:bg-blue-500 hover:text-white animate-pulse'>View Details</Link>
            </div>
            
        </div>
    );
};

SingleCard.propTypes = {
    touristSpot: PropTypes.object,
}

export default SingleCard;