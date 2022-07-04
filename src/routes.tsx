import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { ROUTES } from './constants';
import Nominate from './pages/Nominate';
import Nominations from './pages/Nominations';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path={ROUTES.NOMINATE} element={<Nominate />} />
      <Route path={ROUTES.NOMINATIONS} element={<Nominations />} />
    </Routes>
  </Router>
);

export default AppRoutes;
