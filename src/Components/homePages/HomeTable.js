import Moment from 'moment';

function HomeTable(props) {
  const { transaction } = props;
  const getBalance = (balance) => {
    const formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });
    return formatter.format(balance).replace('Rp', '');
  };

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
            transaction.map((transactionItem) => (
              <tr key={transactionItem.id}>
                <td>{Moment(transactionItem.date).format('H:mm - D MMMM YYYY')}</td>
                <td>{transactionItem.transactionType}</td>
                <td>{transactionItem.transactionType === 'CREDIT' ? transactionItem.sourceWalletID : transactionItem.destinationWalletID}</td>
                <td>{transactionItem.description}</td>
                <td>{transactionItem.transactionType === 'CREDIT' ? `+ ${getBalance(transactionItem.amount)}` : `- ${getBalance(transactionItem.amount)}`}</td>
              </tr>
            ))
          }
      </tbody>
    </table>
  );
}

export default HomeTable;
