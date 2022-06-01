import { Provider } from 'react-redux';
import HomeScreen from './pages/HomeScreen';
import AppRoutes from './routes/AppRoutes';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
