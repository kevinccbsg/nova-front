import Navbar from '../../components/Navbar';
import style from './Main.module.scss';

interface MainLayoutProps {
  children: React.ReactNode
}

const Main = ({ children }: MainLayoutProps) => (
  <>
    <Navbar />
    <main className={style.container}>
      {children}
    </main>
  </>
);

export default Main;
