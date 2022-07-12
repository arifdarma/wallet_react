import './GamesBox.css';
import { useState } from 'react';
import GamesAvailable from './GamesAvailable';
import GamesOver from './GamesOver';

function GamesBox(props) {
  const { setUser, fetchUser } = props;
  const [chance, setChance] = useState(3);
  const [clicked, setClicked] = useState([]);
  const submitGames = (event) => {
    event.preventDefault();
    const postTopup = 'http://localhost:3008/wallets/9009090/transactions';
    const amount = Number(event.target.value);
    const topupObj = {
      transactionType: 'CREDIT',
      amount,
      walletID: 1001,
      description: 'Bank Transfer',
    };
    fetch(postTopup, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(topupObj),
    })
      .then((response) => response.json());

    fetch(fetchUser)
      .then((response) => response.json())
      .then((data) => setUser(data));

    if (chance === 1) {
      setTimeout(() => setChance(chance - 1), 500);
    } else {
      setChance(chance - 1);
    }
    setClicked([...clicked, Number(event.target.value)]);
  };
  const { games } = props;
  return (
    <div>
      <div>
        <p id="chance">{`Chance : ${chance}`}</p>
      </div>
      {
        chance > 0 ? <GamesAvailable games={games} submitGames={submitGames} clicked={clicked} />
          : <GamesOver />
      }

    </div>
  );
}

export default GamesBox;
