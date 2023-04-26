import BookMark from "../../components/bookMark/bookMark";
import styles from "./cardHotel.module.scss";
import { Link } from "react-router-dom";

const CardHotel = ({
  id,
  name,
  title,
  description,
  price,
  rate,
  image,
  onToggleBookMark,
}) => {
  const rating = (num) => {
    if (num <= 5) {
      return "Xорошо";
    }
    if (num >= 5 && num <= 8.9) {
      return "Очень хорошо";
    }
    if (num >= 9) {
      return "Превосходно";
    }
  };
  // console.log(rating)

  return (
    <div className="a">
      <section className={styles.hotelCard}>
        <Link to={`/users/hotelsFav`}>
          <img className={styles.hotelImage} src={image} alt={image} />
        </Link>

        <h2 className={styles.hotelName}>{name}</h2>
        <h4>{title}</h4>
        <p className={styles.hotelDescription}>{description}</p>
        <div className={styles.bottomBtn}>
          <footer className={styles.hotelBook}>
            <span className={styles.hotelRate}>{`${rate} ${rating(
              rate
            )} `}</span>
            <span className={styles.hotelPrice}>{`$${price}`}</span>
          </footer>
          <BookMark onToggleBookMark={onToggleBookMark} id={id} />
          <button className="btn btn-primary mt-3 btn-lg">Book Now </button>
        </div>
      </section>
    </div>
  );
};

export default CardHotel;
