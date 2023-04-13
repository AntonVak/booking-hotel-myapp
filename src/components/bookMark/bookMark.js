// import styles from "./.scss";

import { useState } from "react";

const BookMark = ({id, onToggleBookMark}) => {
    const [bookMark, setBookMark] = useState(false);

    const onToggleBookMarkHandler = () => {
        setBookMark(!bookMark)
        onToggleBookMark(id)
        console.log(bookMark)
    }
    return ( 
        <button onClick={()=> onToggleBookMarkHandler()}>
            
            <i className={"bi bi-star" + (bookMark ? "-fill" : "")}></i>
        </button>
     );
}
 
export default BookMark;

