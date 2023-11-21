
import styles from "../../../styles/Jogo.module.css";
import { useEffect, useState } from "react"
import Porta from "../../../components/Porta"
import { atualizarPortas, criarPortas } from "../../../functions/portas"
import Link from "next/link"
import { useRouter } from "next/router";
import PortaModel from "../../../model/porta";

export default function jogo() {
  const router = useRouter();

  const [portas, setPortas] =  useState<PortaModel[]>([]);

  useEffect(() => {
    const portas = router.query.portas ? +router.query.portas : 0;
    const temPresente = router.query.temPresente ? +router.query.temPresente : 0;
    setPortas(criarPortas(portas, temPresente));
  }, [router?.query]);



  function renderizarPortas() {
    return portas.map(porta => {
        return <Porta key={porta.numero} value={porta}
            onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
    })
}
  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
        {renderizarPortas()}
      </div>
      <div className={styles.botoes}>
        <Link href={"/"}>
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  )
}