import buttonStyles from '~/styles/Button.module.scss'

type ButtonProps = {
  label: string
  onClick: () => void
}

export const Button = ({ label, onClick }: ButtonProps): JSX.Element => {
  return (
    <button className={buttonStyles.wrapper} onClick={onClick}>
      {label}
    </button>
  )
}
