import style from './Spinner.module.scss';

const LoadingSpinner = () => (
  <div className={style.spinerContainer}>
    <div className={style.loadingSpinner} />
  </div>
);

export default LoadingSpinner;
