import { ButtonProps } from './Button.model';
import style from './Button.module.scss';

const Button = ({ children, theme = 'primary', ...rest }: ButtonProps) => (
  <button
    className={`${style.btn} ${style[theme]}`}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
