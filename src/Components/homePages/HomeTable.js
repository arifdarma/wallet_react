import Moment from 'moment';

function HomeTable(props) {
  const { transaction, showRule } = props;
  const getBalance = (balance) => {
    const formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });
    return formatter.format(balance).replace('Rp', '');
  };

  let temp = [...transaction];
  if (showRule.show === 'last10') {
    temp = temp.slice(0, 10);
  } else if (showRule.show === 'thisMonth') {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    temp = temp.filter((data) => new Date(data.date).getMonth() === month
        && new Date(data.date).getFullYear() === year);
  } else if (showRule.show === 'lastMonth') {
    let month = new Date().getMonth() - 1;
    let year = new Date().getFullYear();
    if (month === -1) {
      year -= 1;
      month = 11;
    }
    temp = temp.filter((data) => new Date(data.date).getMonth() === month
        && new Date(data.date).getFullYear() === year);
  } else if (showRule.show === 'thisYear') {
    const year = new Date().getFullYear();
    temp = temp.filter((data) => new Date(data.date).getFullYear() === year);
  } else if (showRule.show === 'lastYear') {
    const year = new Date().getFullYear() - 1;
    temp = temp.filter((data) => new Date(data.date).getFullYear() === year);
  }

  temp = temp.filter((data) => data.description.toLowerCase()
    .includes(showRule.value.toLowerCase()));

  if (showRule.sortBy === 'date' && showRule.ascDesc === 'desc') {
    temp = temp.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (showRule.sortBy === 'date' && showRule.ascDesc === 'asc') {
    temp = temp.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (showRule.sortBy === 'amount' && showRule.ascDesc === 'asc') {
    temp = temp.sort((a, b) => a.amount - b.amount);
  } else if (showRule.sortBy === 'amount' && showRule.ascDesc === 'desc') {
    temp = temp.sort((a, b) => b.amount - a.amount);
  }

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
        {
            temp.map((transactionItem) => (
              <tr key={transactionItem.id}>
                <td>{Moment(transactionItem.date).format('H:mm - D MMMM YYYY')}</td>
                <td>{transactionItem.transactionType}</td>
                <td>{transactionItem.transactionType === 'CREDIT' ? transactionItem.sourceWalletID : transactionItem.destinationWalletID}</td>
                <td>{transactionItem.description}</td>
                <td className={(transactionItem.transactionType === 'CREDIT' ? 'text-success' : '')}>
                  {transactionItem.transactionType === 'CREDIT' ? `+ ${getBalance(transactionItem.amount)}` : `- ${getBalance(transactionItem.amount)}`}
                </td>
              </tr>
            ))
          }
      </tbody>
    </table>
  );
}

export default HomeTable;
