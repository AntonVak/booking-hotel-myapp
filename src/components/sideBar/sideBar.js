import styles from "./sideBar.module.scss"

const SideBar = () => {
  return (
    <aside className={styles.aside}>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          @
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <h3>Choose city</h3>

    </aside>
  );
};

export default SideBar;
