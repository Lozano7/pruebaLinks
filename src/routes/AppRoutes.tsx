import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from '../pages/HomeScreen';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
