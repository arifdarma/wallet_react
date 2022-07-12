import { useState } from 'react';
import { Modal } from 'bootstrap';
import TransferInput from '../Components/transferPages/TransferInput';

function TransferPages() {
  const [status, setStatus] = useState(200);
  const [error, setError] = useState('');
  const [transfer, setTransfer] = useState({
    source: '9009090',
    destination: '',
    amount: '',
    description: '',
  });
  const [dataModal, setDataModal] = useState({
    id: 1,
    transactionType: 'DEBIT',
    amount: 0,
    sourceWalletID: 9009090,
    destinationWalletID: 0,
    description: '',
    date: '',
  });

  const handleChange = (event) => {
    setTransfer({
      ...transfer, [event.target.name]: event.target.value,
    });
  };

  const modalHeader = {
    type: 'Transfer',
    message: 'Transfer Success',
  };

  const handleSubmit = (event) => {
    console.log('call');
    const postTransfer = 'http://localhost:3008/wallets/9009090/transactions';
    const transferObj = {
      transactionType: 'DEBIT',
      amount: Number(transfer.amount),
      walletID: Number(transfer.destination),
      description: transfer.description,
    };

    fetch(postTransfer, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transferObj),
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
    const myModal = new Modal(document.getElementById('staticBackdrop'));
    myModal.show();
    event.preventDefault();
  };
  return (
    <TransferInput
      modalHeader={modalHeader}
      status={status}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      dataModal={dataModal}
      transfer={transfer}
      error={error}
    />
  );
}

export default TransferPages;
