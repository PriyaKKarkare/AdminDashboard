
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ResponsiveDrawer from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <ResponsiveDrawer />
    </BrowserRouter>
  );
}

export default App;
