import styles from "../styles/Cartao.module.css"

interface CartaoProps {
  bgcolor?: 'green' | 'red'
  children?: any
}

export default function Cartao(props: CartaoProps) {
  const whiteStyle = props.bgcolor === 'green' ? styles.green : props.bgcolor === 'red' ? styles.red : styles.white

  return (
    <div
      className={`${styles.cartao} ${whiteStyle}`}
    >
      {props.children}
    </div>
  )
}