import { Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePages from './Pages/HomePages';

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" index element={<HomePages />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
