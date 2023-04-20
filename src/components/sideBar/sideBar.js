// import { useState } from "react";
import ListCitysBar from "./listCitysBar";
import styles from "./sideBar.module.scss"

const SideBar = ({targetInput, hotels}) => {
  
  return (
    <aside className={styles.aside}>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          @
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search hotel"
          aria-label="Username"
          onChange={targetInput}
          
        />
      </div>
      <h3>Choose city</h3>
      <ListCitysBar
      arrayHotels={hotels} 
      {...hotels}/>

    </aside>
  );
};

export default SideBar;
