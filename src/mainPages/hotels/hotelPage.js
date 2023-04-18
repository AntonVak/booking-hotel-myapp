import { useEffect, useState } from "react";
import API from "../../api";
import Pagination from "../../components/pagination/pagination";
import SideBar from "../../components/sideBar/sideBar";
import { paginate } from "../../utils/paginate";
import CardHotel from "./cardHotel";
import styles from "./hotelPage.module.scss";

const HotelPage = () => {
  const [hotels, setHotels] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchHotels, setSearchHotels] = useState("");
  // console.log();
  useEffect(() => {
    API.hotels.fetchAll().then((data) => setHotels(data));
  }, []);

  const count = hotels.length;
  const pageSize = 6;

  const handleSearchHotel = ({ target }) => {
    setSearchHotels(target.value);
  };

  const filteredHotels = hotels.filter(
    (hotel) =>
      hotel.name.toLowerCase().indexOf(searchHotels.toLocaleLowerCase()) !== -1
  );
  // console.log(filteredHotels);

  const handlePageIndex = (pageIndex) => {
    setCurrentPage(pageIndex);
    // console.log(pageIndex);
  };

  // передать параметрі
  const hotelSplit = paginate(filteredHotels, currentPage, pageSize);
  console.log(hotelSplit);

  const onToggleBookMark = (id) => {
    setHotels(
      hotels.map((hotel) => {
        if (hotel.id === id) {
          return { ...hotel, bookmark: !hotel.bookmark };
        }
        return hotel;
      })
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.hotelsList}>
      {hotelSplit && <SideBar targetInput={handleSearchHotel} hotels={hotels}/>}
        
        {hotelSplit &&
          hotelSplit.map((hotel) => (
            <CardHotel
              onToggleBookMark={onToggleBookMark}
              {...hotel}
              key={hotel.id}
            />
          ))}
      </div>
      <Pagination
        hotels={hotels}
        countItem={count}
        pageSize={pageSize}
        onPageChange={handlePageIndex}
        currentPage={currentPage}
      />
    </div>
  );
};

export default HotelPage;
