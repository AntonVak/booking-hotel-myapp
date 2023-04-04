// import styles from "./.scss";
import _ from "lodash";

const Pagination = ({ pageSize, countItem, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(countItem / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  // console.log("page",page)

  return (
    <nav aria-label="Page navigation example ">
      <ul className="pagination justify-content-center p-5">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {pages.map((page) => (
          <li
            className={"page-item" + (page === currentPage ? " active" : "")}
            key={"page_" + page}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}

        <li className="page-item">
          <a className="page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
