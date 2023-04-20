import {  useSelector } from "react-redux";

const ListCitysBar = () => {

  const hotels = useSelector((state) => state.hotels.hotels)
    // console.log( hotels)
  return (
    <ul className="list-group">
    {hotels && hotels.map((hotel) => (
        <li className="list-group-item" id={hotel.id}>{hotel.city}</li>
    ))}
      <li className="list-group-item"></li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li>
    </ul>
  );
};

export default ListCitysBar;
