function HomeInput() {
  return (
    <form className="d-flex justify-content-between">
      <div className="d-flex">
        <p>Show</p>
        <label className="mx-3" htmlFor="show-transaction">
          <select id="show-transaction">
            <option>Last 10 Transaction</option>
            <option>This Month</option>
            <option>Last Month</option>
            <option>This Year</option>
            <option>Last Year</option>
          </select>
        </label>
      </div>
      <div className="d-flex">
        <p>Sort By</p>
        <label className="mx-1" htmlFor="sort-by">
          <select id="sort-by" className="mx-1">
            <option>Date</option>
            <option>Amount</option>
          </select>
        </label>
        <label className="mx-1" htmlFor="asc-desc">
          <select id="asc-desc" className="mx-1">
            <option>Ascending</option>
            <option>Descending</option>
          </select>
        </label>
        <label htmlFor="searching">
          <input id="searching" type="text" placeholder="search" />
        </label>
      </div>
    </form>
  );
}

export default HomeInput;
