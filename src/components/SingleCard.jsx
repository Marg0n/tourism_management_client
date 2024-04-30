
import { PropTypes } from 'prop-types';
import { GiTakeMyMoney } from 'react-icons/gi';
import { TfiRulerPencil } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import Facility from './Facility';

const SingleCard = ({ touristSpot }) => {

    const { id, image, country_Name, tourists_spot_name, location, short_description, totalVisitorsPerYear } = touristSpot;

    return (
        <div

            className="border-2 rounded-xl cursor-pointer hover:border-opacity-50 border-opacity-20 hover:scale-105 overflow-hidden hover:border-blue-700"
        >

            <div className="card shadow-2xl min-h-[80vh] ">
                <figure className="mx-8 mt-8 p-6 rounded-xl bg-gray-200">
                    <img
                        src={image}
                        alt="Estate image"
                        className="rounded-xl h-56 w-auto"
                    />
                </figure>
                <div className="card-body items-center text-start ">
                    {/* <div className='w-full '>
                            {
                                facilities.map((facility, idx) => <Facility key={idx} facility={facility} />)
                            }
                    </div> */}
                    <div className="h-28 w-full space-y-2 my-8">
                        <h2 className="text-xl font-semibold text-start font-serif">{estate_title}</h2>
                        <p className="text-base">Location : <span className='font-semibold'> {location}</span></p>
                        <p className="text-base">Segment : <span className='font-semibold'> {segment_name}</span></p>
                        <p className="text-base">For : <span className='font-semibold'> {status}</span></p>
                    </div>

                    <div className="divider"></div>

                    <div className="w-full flex justify-between">
                        <small className="flex gap-2 items-center">
                            <TfiRulerPencil className='fill-pink-700' />{area}
                        </small>
                        <small className="flex gap-2 items-center">
                            <GiTakeMyMoney size='18' className='fill-green-700' /> {price}

                        </small>
                    </div>
                </div>
                <Link to={`/estate/${id}`} className='btn m-4 bg-teal-400 hover:bg-blue-500 hover:text-white animate-pulse'>View Property</Link>
            </div>
        </div>
    );
};

SingleCard.propTypes = {
    touristSpot: PropTypes.object,
}

export default SingleCard;