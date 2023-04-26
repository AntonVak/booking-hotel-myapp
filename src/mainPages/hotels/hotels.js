import { useParams } from "react-router-dom";
import HotelsFaforite from "./hotelFavorite";
import HotelPage from "./hotelPage";


const Hotels = () => {
    const params = useParams();
    const {hotelsFav} = params;

    return ( <>
        {hotelsFav ? <HotelsFaforite hotelsFav={hotelsFav}/>: <HotelPage/>}
    </> );
}
 
export default Hotels;