import styles from "../styles/Cartao.module.css"

interface CartaoProps {
  bgcolor?: string
  children?: any
}

export default function Cartao(props: CartaoProps) {
  const styleCartao = { backgroundColor: props.bgcolor ?? '#fff' }
  return (
    <div
      className={styles.cartao}
      style={styleCartao}
    >
      {props.children}
    </div>
  )
}