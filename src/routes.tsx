import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { ROUTES } from './constants';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path={ROUTES.NOMINATIONS} element={<h1>Nominations</h1>} />
      <Route path={ROUTES.HOME} element={<h1>Home</h1>} />
    </Routes>
  </Router>
);

export default AppRoutes;
