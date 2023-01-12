import styles from "./styles/app.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <div></div>
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
