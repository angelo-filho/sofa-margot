import { useState } from "react";
import styles from "./styles/app.module.scss";

function App() {
  const [shouldRotate, setShouldRotate] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <img
          src={shouldRotate ? "/sofa-margot.gif" : "/sofa-margot.png"}
          alt="Sofa margot 2 rosa"
        />
        {/* <img src="/sofa-margot.gif" alt="Sofa margot 2 rosa" /> */}
        <button onClick={() => setShouldRotate(!shouldRotate)}>
          <img src={shouldRotate ? "x.svg" : "/360.svg"} />
        </button>
      </div>

      <div className={styles.product_info}>
        <div>
          <span>CÓDIGO: 42404</span>
          <h1>Sofá Margot II - Rosé</h1>
          <span>R$ 4.000</span>
        </div>

        <button>ADICIONAR À CESTA</button>
      </div>
    </div>
  );
}

export default App;
