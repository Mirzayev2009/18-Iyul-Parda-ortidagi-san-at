import { Routes, Route } from 'react-router-dom';
import InfoPage from './pages/InfoPage';
import LoginPage from './pages/LoginPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<InfoPage />} />
      <Route path="/loginpage" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
