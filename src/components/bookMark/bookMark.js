// import styles from "./.scss";

import { useState } from "react";

const BookMark = () => {
    const [bookMark, setBookMark] = useState(false);

    const onToggleBookMark = () => {
        setBookMark(true)
        console.log(bookMark)
    }
    return ( 
        <button onClick={()=> onToggleBookMark()}>
            
            <i className={"bi bi-star" + (bookMark ? "-fill" : "")}></i>
        </button>
     );
}
 
export default BookMark;

