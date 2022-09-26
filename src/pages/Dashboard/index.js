import React, { useState } from "react";
import Aspect from "../../utils/API/Aspect";

export default function Dash() {
  const [test, setTest] = useState([]);
  const [nick, setNick] = useState("");
  const [champion, setChampion] = useState("");
  const [select, setSelect] = useState({});

  async function Status() {
    await Aspect.get(`summoner/${nick}`)
      .then((res) => {
        console.log(res.data);
        setTest(res.data);
        setNick("");
      })
      .catch((err) => {
        console.log(err);
        setNick("");
      });
  }

  async function Champions() {
    await Aspect.get(`champion/${champion}`)
      .then((res) => {
        setSelect(res.data.data[champion]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <span>Nick:</span>
      <input value={nick} onChange={(e) => setNick(e.target.value)} />
      <button onClick={() => Status()}>Pesquisar</button>
      <span>Champion:</span>
      <input value={champion} onChange={(e) => setChampion(e.target.value)} />
      <button onClick={() => Champions()}>Pesquisar</button>
      <span>{select?.lore}</span>
    </div>
  );
}
