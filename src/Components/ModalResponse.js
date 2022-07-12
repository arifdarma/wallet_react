import { Link } from 'react-router-dom';

function ModalResponse(props) {
  const {
    status, modalHeader, dataModal, error,
  } = props;
  console.log(status);
  return (
    <div>
      {
                status === 200
                  ? (
                    <div
                      className="modal fade"
                      id="staticBackdrop"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabIndex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header" style={{ justifyContent: 'center' }}>
                            <h5 className="modal-title" id="staticBackdropLabel">{modalHeader.type}</h5>
                          </div>
                          <h2 className="text-success" style={{ textAlign: 'center' }}>{modalHeader.message}</h2>
                          <div className="modal-body" style={{ textAlign: 'left' }}>
                            <div className="row justify-content-between">
                              <div className="col-6">
                                <p>Amount</p>
                              </div>
                              <div className="col-6" style={{ textAlign: 'right' }}>
                                <h4>{dataModal.amount}</h4>
                              </div>
                            </div>
                            <div className="row justify-content-between">
                              <div className="col-6">
                                <p>Transaction ID</p>
                              </div>
                              <div className="col-6" style={{ textAlign: 'right' }}>
                                <p>{dataModal.id}</p>
                              </div>
                            </div>
                            <div className="row justify-content-between">
                              <div className="col-6">
                                <p>From</p>
                              </div>
                              <div className="col-6" style={{ textAlign: 'right' }}>
                                <p>{dataModal.sourceWalletID}</p>
                              </div>
                            </div>
                            <div className="row justify-content-between">
                              <div className="col-6">
                                <p>To</p>
                              </div>
                              <div className="col-6" style={{ textAlign: 'right' }}>
                                <p>{dataModal.destinationWalletID}</p>
                              </div>
                            </div>
                            <div className="row justify-content-between">
                              <div className="col-6">
                                <p>Description</p>
                              </div>
                              <div className="col-6" style={{ textAlign: 'right' }}>
                                <p>{dataModal.description}</p>
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                              <Link to="/" className="text-white" style={{ textDecoration: 'none' }}>Close</Link>
                            </button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" data-bs-target="staticBackdrop">
                              <Link to="/" className="text-white" style={{ textDecoration: 'none' }}>Print</Link>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                  : (
                    <div
                      className="modal fade"
                      id="staticBackdrop"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabIndex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel" style={{ textAlign: 'center' }}>
                              {`${modalHeader.type} Failed`}
                            </h5>
                          </div>
                          <div className="modal-body text-danger">
                            {error}
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                              <Link to="/" className="text-white" style={{ textDecoration: 'none' }}>Close</Link>
                            </button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" data-bs-target="staticBackdrop">
                              <Link to="/" className="text-white" style={{ textDecoration: 'none' }}>Print</Link>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
            }
    </div>
  );
}
export default ModalResponse;
