import ModalResponse from '../ModalResponse';

function TopupInput(props) {
  const {
    submitTopup, topup, handleChange, status, dataModal, error,
  } = props;
  const modalHeader = {
    type: 'Top Up',
    message: 'Top Up Success',
  };
  return (
    <>
      <div className="row-12">
        <h1>Top Up</h1>
      </div>
      <div className="col-12 text-center">
        <form onSubmit={submitTopup}>
          <h5>From</h5>
          <div className="col-12 my-3">
            <label htmlFor="fromTopup" className="col-6">
              <select className="form-select" id="fromTopup" name="source" onChange={handleChange} value={topup.source}>
                <option value="1001">Bank Transfer</option>
                <option value="1002">Visa Card</option>
                <option value="1003">Cash</option>
              </select>
            </label>
          </div>
          <div className="col-12 my-3">
            <label htmlFor="destination" className="col-6">
              <input className="form-control" id="destination" type="text" placeholder="9009090" value="9009090" name="destination" disabled onChange={handleChange} />
            </label>
          </div>
          <div className="col-12 my-3">
            <label htmlFor="amountTopup" className="col-6">
              <input className="form-control" id="amountTopup" type="number" placeholder="0" name="amount" value={topup.amount} onChange={handleChange} />
            </label>
          </div>
          <input type="submit" className="btn btn-primary form-control w-50" data-bs-toggle="modal" data-bs-target="#staticBackdrop" value="Top Up" />
        </form>
      </div>
      <ModalResponse
        dataModal={dataModal}
        status={status}
        modalHeader={modalHeader}
        error={error}
      />
    </>
  );
}

export default TopupInput;
