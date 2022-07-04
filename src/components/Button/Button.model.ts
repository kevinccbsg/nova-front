export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode
  type: 'button' | 'submit' | 'reset' | undefined
  theme?: 'primary' | 'secondary' | 'light'
}
