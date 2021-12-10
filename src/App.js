import { useState } from 'react';
import btnExpandir from "./assets/closed-menu.svg";
import btnRetrair from "./assets/open-menu.svg";
import btnHome from "./assets/active-home.svg";
import btnILike from "./assets/inactive-like.svg";
import btnConfig from "./assets/inactive-settings.svg";
// import like from "./assets/like.svg";
import img1 from "./assets/gallery/image 1.png";
import img2 from "./assets/gallery/image 2.png";
import img3 from "./assets/gallery/image 3.png";
import img4 from "./assets/gallery/image 4.png";
import img5 from "./assets/gallery/image 5.png";
import img6 from "./assets/gallery/image 6.png";
import img7 from "./assets/gallery/image 7.png";
import img8 from "./assets/gallery/image 8.png";
import img9 from "./assets/gallery/image 9.png";
import img10 from "./assets/gallery/image 10.png";
import closeModal from "./assets/close-modal.svg";
import like from "./assets/like.svg";
let i = 0;

function App() {
  const [icone, setIcone] = useState(btnExpandir);
  const galery = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const [modal, setModal] = useState(null);
  const [coracao, setCoracao] = useState('like hidden');

  function BtnAside({ src, handle, texto }) {
    return (
      <button onClick={handle}>
        <img src={src} alt="" />
        {icone === btnRetrair && <span>{texto}</span>}
      </button>
    );
  }

  function Item({ src }) {
    return (
      <div className="item">
        <img className='foto-item' src={src} onClick={handleAbrirModal} alt="" />
        <img className={coracao} src={like} alt="" />
        <div className="legenda">
          <span>Lorem Ipsum</span>
          <span>Há 1 mês</span>
        </div>
      </div>
    );
  }

  function handleAbrirModal(e) {
    setModal(<Modal src={e.target.src} />);
  }

  function handleFecharModal() {
    setModal(null);
  }

  function handleCoracao() {
    const novoCoracao = coracao === 'like hidden' ? 'like' : 'like hidden';
    console.log(novoCoracao);
    setCoracao(novoCoracao);
  }

  function Modal({ src }) {
    return (
      <div className="modal" onClick={handleFecharModal}>
        <div className="btn-fechar">
          <img className="btn-fechar-modal" src={closeModal} alt="" />
        </div>
        <div className="conteudo-modal">
          <img className="img-modal" src={src} alt="" onClick={e => e.stopPropagation()} onDoubleClick={handleCoracao} />
        </div>
      </div>
    );
  }

  function handleIcone() {
    const novoIcone = icone === btnExpandir ? btnRetrair : btnExpandir;

    setIcone(novoIcone);
  }

  return (
    <div className="App">
      <div className="aside">
        <div className="top-aside">
          <BtnAside src={icone} handle={handleIcone} />
          <BtnAside src={btnHome} texto="Início" />
          <BtnAside src={btnILike} texto="Favoritos" />
        </div>
        <BtnAside src={btnConfig} texto="Configurações" />
      </div>
      <div className="main">
        <h1>Início</h1>
        <div className="galeria">
          {galery.map(img => {
            i++;
            return (
              <Item key={i} src={img} />
            )
          })}
        </div>
      </div>
      {modal}
    </div>
  );
}

export default App;