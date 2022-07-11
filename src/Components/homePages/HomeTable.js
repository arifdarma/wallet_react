function HomeTable() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Date & Time</th>
          <th>Type</th>
          <th>From/To</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>20:10 - 30 June 2022</th>
          <th>DEBIT</th>
          <th>310001001</th>
          <th>Fore Coffe</th>
          <th>-75.000,00</th>
        </tr>
        <tr>
          <th>20:10 - 30 June 2022</th>
          <th>CREDIT</th>
          <th>1001</th>
          <th>Top Up Bang Transfer</th>
          <th>+1.000.000,00</th>
        </tr>
        <tr>
          <th>20:10 - 30 June 2022</th>
          <th>DEBIT</th>
          <th>310001001</th>
          <th>Fore Coffe</th>
          <th>-75.000,00</th>
        </tr>
      </tbody>
    </table>
  );
}

export default HomeTable;
