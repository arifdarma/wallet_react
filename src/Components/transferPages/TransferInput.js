import ModalResponse from '../ModalResponse';

function TransferInput(props) {
  const {
    handleChange, handleSubmit, status, dataModal, modalHeader, transfer, error,
  } = props;
  return (
    <div>
      <div className="row-12 text-center">
        <h1 data-testid="transfer">Transfer</h1>
      </div>
      <div className="col-12 text-center">
        <form onSubmit={handleSubmit}>
          <div className="col-12 my-3">
            <label htmlFor="source" className="col-6">
              <h5 style={{ textAlign: 'left' }}>From</h5>
              <input data-testid="sourceTransfer" className="form-control" id="source" type="text" placeholder="9009090" value="9009090" name="source" disabled />
            </label>
          </div>
          <div className="col-12 my-3">
            <label htmlFor="destination" className="col-6">
              <h5 style={{ textAlign: 'left' }}>To</h5>
              <input data-testid="destinationTransfer" className="form-control" id="destination" type="number" placeholder="0" value={transfer.destination} name="destination" onChange={handleChange} />
            </label>
          </div>
          <div className="col-12 my-3">
            <label htmlFor="amountTransfer" className="col-6">
              <h5 style={{ textAlign: 'left' }}>Amount</h5>
              <input data-testid="amtTransfer" className="form-control" id="amountTransfer" type="number" placeholder="0" value={transfer.amount} name="amount" onChange={handleChange} required />
            </label>
          </div>
          <div className="col-12 my-3">
            <label htmlFor="descriptionTransfer" className="col-6">
              <h5 style={{ textAlign: 'left' }}>Description</h5>
              <input data-testid="desTransfer" className="form-control" id="descriptionTransfer" type="text" placeholder="Description" value={transfer.description} name="description" onChange={handleChange} />
            </label>
          </div>
          <input data-testid="submitTransfer" type="submit" className="btn btn-primary form-control w-50" value="Transfer" />
        </form>
      </div>
      <ModalResponse
        dataModal={dataModal}
        status={status}
        modalHeader={modalHeader}
        error={error}
      />
    </div>
  );
}

export default TransferInput;
