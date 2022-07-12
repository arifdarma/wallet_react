import { useEffect, useState } from 'react';
import HomeHeader from '../Components/homePages/HomeHeader';
import GamesBox from '../Components/gamesPages/GamesBox';

function GamesPages() {
  const [user, setUser] = useState({});
  const [games, setGames] = useState([]);
  const fetchUser = 'http://localhost:3008/wallets/9009090';

  useEffect(() => {
    fetch(fetchUser)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  useEffect(() => {
    const gamesArr = [];
    for (let i = 0; i < 9; i += 1) {
      const number = 1000 * (Math.floor(Math.random() * 1001) + 1);
      gamesArr.push(number);
    }
    setGames(gamesArr);
  }, []);

  return (
    <div>
      <HomeHeader user={user} />
      <section className="my-3">
        <GamesBox games={games} setUser={setUser} fetchUser={fetchUser} />
      </section>
    </div>
  );
}

export default GamesPages;
