import { useEffect, useState } from 'react';
import HomeHeader from '../Components/homePages/HomeHeader';
import HomeInput from '../Components/homePages/HomeInput';
import HomeTable from '../Components/homePages/HomeTable';

function HomePages() {
  const [transaction, setTransaction] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchUser = fetch('http://localhost:3008/wallets/9009090');
  const fetchTransaction = fetch('http://localhost:3008/wallets/9009090/transactions');

  useEffect(() => {
    Promise.all([fetchUser, fetchTransaction])
      .then(([resUser, resTransaction]) => Promise.all([resUser.json(), resTransaction.json()]))
      .then(([dataUser, dataTransaction]) => {
        setUser(dataUser);
        setTransaction(dataTransaction);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {
            loading ? <div>Loading...</div>
              : (
                <div>
                  <HomeHeader user={user} />
                  <section>
                    <HomeInput />
                    <HomeTable transaction={transaction} />
                  </section>
                </div>
              )
        }
    </div>
  );
}

export default HomePages;