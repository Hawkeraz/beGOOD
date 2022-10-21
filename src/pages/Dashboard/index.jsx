import React, { useState } from "react";
import Aspect from "../../utils/API/Aspect";
import { toast } from "react-toastify";
import "./index.scss"

export default function Dash() {
  // const [test, setTest] = useState([]);
  const [nick, setNick] = useState("");
  const [champion, setChampion] = useState("");
  const [select, setSelect] = useState({});

  async function Status() {
    await Aspect.get(`summoner/${nick}`)
      .then((res) => {
        // setTest(res.data);
        setNick("");
      })
      .catch((err) => {
        setNick("");
      });
  }

  async function Champions() {
    await Aspect.get(`champion/${champion}`)
      .then((res) => {
        setSelect(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function login(){
    var usuario = "hawkey";
    var senha = "caguei"
    
    if(nick === usuario){
      if(champion === senha){
        toast.success('usuario logado com sucesso')
      }
      else{
        toast.error('senha incorreta')
      }
    }
    else{
      toast.warn('Usuario Incorreto')
    }
  }

  return (
    <div>
      <div className="titulo">
        <h1>TEST DE BACKEND</h1>
      </div>

      <div className="campos">

        <div className="field">
          <span>Usuario:</span>
          <input value={nick} onChange={(e) => setNick(e.target.value)} />
          <button onClick={() => Status()}>Pesquisar</button>
        </div>

        <div className="field">
          <span>Senha:</span>
          <input value={champion} onChange={(e) => setChampion(e.target.value)} />
          <button onClick={() => Champions()}>Pesquisar</button>
        </div>

        <button onClick={() => login()}>EXEMPLO</button>

      </div>

      <div className="info">
        <span>{select?.lore}</span>
        {/* <div>
          <span>{select?.spells[0].name}</span>
          <span>{select?.spells[1].name}</span>
          <span>{select?.spells[2].name}</span>
          <span>{select?.spells[3].name}</span>
        </div> */}
      </div>
    </div>
  );
}
