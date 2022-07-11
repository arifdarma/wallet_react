import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" index />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
