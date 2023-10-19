import { sortOptions, typeOptions, statusOptions } from "../constants";
import { useDispatch } from "react-redux";
import { clearFilter, filterBySearch, filterByStatus, filterByType, sortJob } from "../redux/jobSlice";
const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(filterBySearch(e.target.value));
  };
  // TODO form elemanlarını sıfırlama
  const handleReset = () => {
    dispatch(clearFilter());
  }
  return (
    <section className="filter-sec">
      <h2>Filter From</h2>
      <form>
        <div>
          <label>Position :</label>
          <input
            onChange={handleChange}
            type="search"
            placeholder="Position..."
          />
        </div>
        {/* Selectler */}
        <div>
          <label>Status :</label>
          <select onChange={(e) => dispatch(filterByStatus(e.target.value))}>
            <option selected disabled>
              Select
            </option>
            {statusOptions.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Type :</label>
          <select onChange={(e) => dispatch(filterByType(e.target.value))}>
            <option selected disabled>
              Select
            </option>
            {typeOptions.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Sort :</label>
          <select onChange={(e) => dispatch(sortJob(e.target.value))}>
            <option selected disabled>
              Select
            </option>
            {sortOptions.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </div>
        <div>
          <button onClick={handleReset} type="button" className="button" data-text="Awesome">
            <span className="actual-text">&nbsp;Reset&nbsp;</span>
            <span aria-hidden="true" className="front-text">
              &nbsp;Reset&nbsp;
            </span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Filter;
