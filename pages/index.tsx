import styles from "../styles/Formuario.module.css"
import Cartao from "../components/Cartao";
import Link from "next/link";
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";


export default function Formulario() {
  const [qtdePortas, setQtdePortas] = useState(3);
  const [comPresente, setComPresente] = useState(1);

  return (
    <div className={styles.container}>
      <div className={styles.formulario}>
        <Cartao bgcolor='red'>
          <h1 className={styles.h1}>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text={'Qtde Portas?'} value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)} />
        </Cartao>
        <Cartao>
          <EntradaNumerica text={'Porta com Presente?'} value={comPresente} onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)} />
        </Cartao>
        <Cartao bgcolor='green'>
          <Link href={`/jogo/${qtdePortas}/${comPresente}`} className={styles.link}>
            <h2>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}