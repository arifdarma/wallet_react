import {
  Link,
  Outlet,
} from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand">
        <ul className="navbar-nav">
          <li className="navbar-brand">
            <Link to="/">DigiWallet</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/transfer">Transfer</Link>
          </li>
          <li className="nav-item">
            <Link to="/topup">Topup</Link>
          </li>
          <li className="nav-item">
            <Link to="/game">Games</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navigation;
