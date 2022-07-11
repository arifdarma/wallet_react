import { Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import HomePages from './Pages/HomePages';
import TopupPages from './Pages/TopupPages';
import TransferPages from './Pages/TransferPages';

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" index element={<HomePages />} />
          <Route path="/topup" index element={<TopupPages />} />
          <Route path="/transfer" index element={<TransferPages />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
