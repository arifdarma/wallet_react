import {
  Link,
  Outlet,
} from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">DigiWallet</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/transfer">Transfer</Link>
          </li>
          <li>
            <Link to="/topup">Topup</Link>
          </li>
          <li>
            <Link to="/game">Games</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navigation;
