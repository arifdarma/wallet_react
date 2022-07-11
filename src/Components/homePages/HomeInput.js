function HomeInput(props) {
  const { setShowRule, showRule } = props;
  const handleChange = (event) => {
    setShowRule(
      { ...showRule, [event.target.name]: event.target.value },
    );
  };

  return (
    <form className="d-flex justify-content-between">
      <div className="d-flex">
        <p>Show</p>
        <label className="mx-3" htmlFor="show-transaction">
          <select id="show-transaction" name="show" onChange={handleChange}>
            <option value="last10">Last 10 Transaction</option>
            <option value="thisMonth">This Month</option>
            <option value="lastMonth">Last Month</option>
            <option value="thisYear">This Year</option>
            <option value="lastYear">Last Year</option>
          </select>
        </label>
      </div>
      <div className="d-flex">
        <p>Sort By</p>
        <label className="mx-1" htmlFor="sort-by">
          <select id="sort-by" className="mx-1" onChange={handleChange} name="sortBy">
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </label>
        <label className="mx-1" htmlFor="asc-desc">
          <select id="asc-desc" className="mx-1" onChange={handleChange} name="ascDesc">
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </label>
        <label htmlFor="searching">
          <input id="searching" type="text" placeholder="search" onChange={handleChange} name="value" />
        </label>
      </div>
    </form>
  );
}

export default HomeInput;
