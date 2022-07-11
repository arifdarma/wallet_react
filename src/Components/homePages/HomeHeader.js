function HomeHeader(props) {
  const { user } = props;
  const getBalance = (balance) => {
    const formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });
    return formatter.format(balance).replace('Rp', '');
  };

  return (
    <header>
      <div>
        <h1>
          Good Morning,&nbsp;
          {user.customerName}
        </h1>
        <div className="row">
          <div className="col-6">
            <p>
              Account :&nbsp;
              {user.id}
            </p>
          </div>
          <div className="col-6">
            <p>Balance:</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2>
              IDR
              {getBalance(user.balance)}
            </h2>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
