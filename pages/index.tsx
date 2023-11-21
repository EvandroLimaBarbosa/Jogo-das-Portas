import styles from "../styles/Formuario.module.css"
import Cartao from "../components/Cartao";
import Link from "next/link";


export default function Formulario() {
  return (
    <div className={styles.container}>
      <div className={styles.formulario}>
      <Cartao bgcolor="#c0392c">
        <h1 className={styles.h1}>Monty Hall</h1>
      </Cartao>
      <Cartao></Cartao>
      <Cartao></Cartao>
      <Cartao bgcolor="#28a085">
        <Link href={`/jogo/4/2`} className={styles.link}>
          <h2>Iniciar</h2>
        </Link>
      </Cartao>
    </div>
    </div>
  )
}