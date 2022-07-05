import Navbar from '../../components/Navbar';
import Spinner from '../../components/Spinner';
import style from './Main.module.scss';

interface MainLayoutProps {
  children: React.ReactNode
  loading?: boolean
}

const Main = ({ children, loading = false }: MainLayoutProps) => (
  <>
    <Navbar />
    <main className={style.container}>
      {loading ? <Spinner /> : children}
    </main>
  </>
);

export default Main;
