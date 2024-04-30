import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const TouristSpotCard = ({aCountry}) => {

    const { 
        _id, image, spotName, location, country, season, 
        // visitor, 
        // description 
    } = aCountry;

    return (
        <div

            className="relative border-2 rounded-xl cursor-pointer hover:border-opacity-50 border-opacity-20 hover:scale-105 overflow-hidden hover:border-blue-700"
        >

            <div className="card shadow-2xl min-h-[80vh] ">
                <figure className="mx-8 mt-8 p-6 rounded-xl bg-gray-200">
                    <img
                        src={image}
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

                    
                </div>
                <Link to={`/country/${_id}`} className='btn m-4 bg-secondary hover:bg-blue-500 hover:text-white animate-pulse'>View Details</Link>
            </div>
            
        </div>
    );
};

TouristSpotCard.propTypes = {
    aCountry: PropTypes.object,
}

export default TouristSpotCard;