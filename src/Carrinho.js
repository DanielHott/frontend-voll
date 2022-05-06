import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInfo } from "./context/myContext";
import { updateUser, findUser, changeBackground } from "./utils";

function Carrinho() {
  const navigate = useNavigate();
  const { info, card, setCard } = useInfo();
  const [coins, setCoins] = useState({ email: "", coins: "" });
  const [mode, setMode] = useState(false);
  const [loading, setLoading] = useState(true);

  async function updateCoins(product) {
    const actUser = await findUser({ email: info.email }).then((a) => a);
    const newCoins = Number(actUser.coins) - Number(product.coins);
    console.log(newCoins);
    if (newCoins < 0)
      return alert(
        `Você não possui saldo para esta compra! Seu saldo: $${actUser.coins}`
      );
    setCoins({ ...coins, coins: newCoins });
    await updateUser({ email: info.email, coins: newCoins });
    alert(`Produto adquirido! Novo saldo: $${newCoins}`);
  }

  function removeCarrinho(product) {
    const novoCard = card.filter((item) => item.index !== product.index);
    setCard(novoCard);
    if (novoCard.length === 0) setLoading(true);
    alert(
      `${product.name} foi removido! Você possui ${
        card.length - 1
      } produtos no carrinho`
    );
  }

  useEffect(() => {
    if (card.length > 0) setLoading(false);
  }, []);

  return (
    <div className="Products">
      <button className="button-back" onClick={() => navigate("/products")}>
        Voltar
      </button>
      <button
        className="button-back"
        onClick={(e) => changeBackground(e.target, mode, setMode)}
      >
        Modo noturno
      </button>
      <div className="cards-area">
        {!loading ? (
          card.map((product) => {
            return (
              <div className="Card" key={product.name}>
                <button
                  className="button-back"
                  onClick={() => removeCarrinho(product)}
                >
                  Remover
                </button>
                <img src={product.image} alt="product" width="200" />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Valor: ${product.coins}</p>
                <button
                  className="button-back"
                  onClick={() => updateCoins(product)}
                >
                  Comprar
                </button>
              </div>
            );
          })
        ) : (
          <h1 className="carrinho">O carrinho está vazio!</h1>
        )}
      </div>
    </div>
  );
}

export default Carrinho;
