

import './Home.css';

import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate =useNavigate();
    const handleBookingClick = () => {
        navigate('/booking');
    };
    const handleLodgingClick = () => {
        navigate('/lodging');
    };
    const handleRestaurantsClick = () => {
        navigate('/restaurants');
    };
    const handleGroceryStoresClick = () => {
        navigate('/grocery-stores');
    };
    const handleEntertainmentClick = () => {
        navigate('/entertainment');
    };
    const handleSightseeingClick = () => {
        navigate('/sightseeing');
    };
    const handleTransportationClick = () => {
        navigate('/transportation');
    };  


    return (
        <>
            <div className="section-1">

                <p className="image">
                    image

                </p>
                <p className="introduction" >
                    Taniti is a small, tropical island in the Pacific. While the island has an area of less than 500 square miles, the terrain is varied and includes both sandy and rocky beaches, a small but safe harbor, lush tropical rainforests, and a mountainous interior that includes a small, active volcano. Taniti has an indigenous population of about 20,000. Until a recent increase in tourism, most the Tanitian economy was dominated by fishing or agriculture.
                </p>

            </div>
            <button className="button" onClick={() => handleBookingClick()}>
                Book NOW!
            </button>

            <div className="section-2">
                <p className="image2" onClick={ () => handleLodgingClick()}>
                    Lodgining image
                </p>
                <p className="image2" onClick={ () => handleRestaurantsClick()}>
                    restaurant image
                </p>
                <p className="image2" onClick={ () => handleGroceryStoresClick()}>
                    grocery stores image
                </p>
                <p className="image2" onClick={ () => handleEntertainmentClick()}>
                    entertainment image
                </p>
                <p className="image2" onClick={ () => handleSightseeingClick()}>
                    sightseeing image
                </p>
                <p className="image2" onClick={ () => handleTransportationClick()}>
                    transportation image
                </p>

            </div>




        </>);

}
export default Home;