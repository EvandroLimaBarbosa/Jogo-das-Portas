import { useState } from "react";
import Porta from "../components/Porta";
import PortaModel from "../model/porta";
import styles from "../styles/Index.module.css";
import { criarPortas } from "../functions/portas";

export default function Home() {
  const [p1, setP1] = useState(new PortaModel(1));

  console.log(criarPortas(3, 2))
  return (
    <div className={styles.div}>
      <Porta value={p1} onChange={novaPorta => setP1(novaPorta)} />
    </div>
  );
}
