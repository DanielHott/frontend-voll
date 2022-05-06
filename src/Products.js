import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInfo } from "./context/myContext";
import {
  buscaUser,
  buscaProducts,
  changeBackground,
  adcCarrinho,
} from "./utils";

function Products() {
  const navigate = useNavigate();
  const { info, card } = useInfo();
  const [mode, setMode] = useState(false);
  const [filesUser, setFilesUser] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getUserInfos() {
    await buscaUser(info).then((file) => setFilesUser([file]));
    await buscaProducts().then((file) => setProducts([file]));
    setLoading(false);
  }
  useEffect(() => {
    getUserInfos();
  }, []);

  return (
    <div className="Products">
      <header>
        <button className="button-back" onClick={() => navigate("/")}>
          Sair
        </button>
        <button
          className="button-back"
          onClick={(e) => changeBackground(e.target, mode, setMode)}
        >
          Modo noturno
        </button>
        <button className="button-back" onClick={(e) => navigate("/carrinho")}>
          Carrinho
        </button>
        {!loading ? (
          filesUser.map((item) => {
            return (
              <div className="user-header" key="user-header">
                <img src={item.image} alt="logo-user" width="60" />
                <h2>{item.name}</h2>
                <h2>{item.email}</h2>
                <h2 className="last-header">Saldo: ${item.coins}</h2>
                {item.name === "Admin" && (
                  <button
                    className="button-header"
                    onClick={() => navigate("/admin")}
                  >
                    Área de Controle
                  </button>
                )}
                <div></div>
                <div></div>
              </div>
            );
          })
        ) : (
          <h1 className="loading">Carregando...</h1>
        )}
      </header>
      <div className="cards-area">
        {!loading &&
          products[0].map((product) => {
            return (
              <div className="Card" key={product.name}>
                <img src={product.image} alt="product" width="200" />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Valor: ${product.coins}</p>
                <button
                  className="button-back"
                  onClick={() => adcCarrinho(product, card)}
                >
                  Adicionar ao carrinho
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Products;
