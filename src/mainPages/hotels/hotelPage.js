import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import API from "../../api";
import Pagination from "../../components/pagination/pagination";
import SideBar from "../../components/sideBar/sideBar";
import { paginate } from "../../utils/paginate";
import CardHotel from "./cardHotel";
import { hotelsLoading, hotelsLoaded } from "../../store/hotelsSlice";
import styles from "./hotelPage.module.scss";

const HotelPage = () => {
  const hotels = useSelector((state) => state.hotels.hotels);
  // const loading = useSelector((state) => state.hotels.loading)
  const dispatchFunc = useDispatch();
  // const [hotels, setHotels] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchHotels, setSearchHotels] = useState("");
  // console.log(hotels);

  useEffect(() => {
    dispatchFunc(hotelsLoading());
    API.fetchAll().then((data) => {
      console.log(data);
      dispatchFunc(hotelsLoaded(data));
    });
  }, [dispatchFunc]);

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
    hotelsLoaded(
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
        {hotelSplit && (
          <SideBar targetInput={handleSearchHotel} hotels={hotels} />
        )}

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
