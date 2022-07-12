import { useState } from 'react';
import TopupInput from '../Components/topupPages/TopupInput';

function TopupPages() {
  const [status, setStatus] = useState(200);
  const [error, setError] = useState('');
  const [dataModal, setDataModal] = useState({
    id: 2,
    transactionType: 'CREDIT',
    amount: 0,
    sourceWalletID: 1001,
    destinationWalletID: 9009090,
    description: '',
    date: '',
  });
  const [topup, setTopup] = useState({
    destination: '9009090',
    source: '1001',
    amount: '',
  });

  const sourceTopup = {
    1001: 'Bank Transfer',
    1002: 'Visa Card',
    1003: 'Cash',
  };

  const handleChange = (event) => {
    setTopup(
      { ...topup, [event.target.name]: event.target.value },
    );
  };

  const submitTopup = (event) => {
    event.preventDefault();

    const postTopup = 'http://localhost:3008/wallets/9009090/transactions';
    const walletId = Number(topup.source);
    const amount = topup.amount === '' ? 0 : Number(topup.amount);
    const topupObj = {
      transactionType: 'CREDIT',
      amount,
      walletID: walletId,
      description: `Top Up from ${sourceTopup[walletId]}`,
    };

    fetch(postTopup, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(topupObj),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => { throw new Error(text); });
        }
        setStatus(response.status);
        return response.json();
      })
      .then((data) => setDataModal(data))
      .catch((err) => {
        setError(JSON.parse(err.message).error);
        setStatus(400);
      });
  };

  return (
    <div className=" text-center">
      <TopupInput
        submitTopup={submitTopup}
        handleChange={handleChange}
        topup={topup}
        status={status}
        dataModal={dataModal}
        error={error}
      />
    </div>
  );
}

export default TopupPages;
