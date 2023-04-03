import { useEffect, useState } from "react";
import API from "../../api";
import Pagination from "../../components/pagination/pagination";
import CardHotel from "./cardHotel";
import styles from "./hotelPage.module.scss";

const HotelPage = () => {
  const [hotels, setHotels] = useState();
  // console.log(API.hotels.fetchAll());
  // console.log(fetchAll);
  useEffect(() => {
      API.hotels.fetchAll().then((data) => setHotels(data));
    }, []);

    const pageSize = 9;

    // const onToggleBookMark = (id) => {
    //    setHotels(hotels.map((hotel)) =>{
    //     if(hotel.id === id) {
    //       return {...hotel, bookmark: !hotel.bookmark}
    //     }
    //     return hotel
    //   })
    // }
  

  return (
    <div className={styles.container}>
      <div className={styles.hotelsList}>
        {hotels &&
          hotels.map((hotel) => <CardHotel {...hotel} key={hotel.id} />)}
      </div>
      <Pagination pageSize={pageSize}/>
    </div>
  );
};

export default HotelPage;
