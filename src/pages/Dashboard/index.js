import React, { useState } from "react";
import Aspect from "../../utils/API/Aspect";

export default function Dash() {
  const [test, setTest] = useState([]);
  const [nick, setNick] = useState("");
  const key = process.env.REACT_APP_KEY;

  async function Status() {
    await Aspect.get(`summoner/v4/summoners/by-name/${nick}`)
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

  return (
    <div>
      <span>Nick:</span>
      <input value={nick} onChange={(e) => setNick(e.target.value)}/>
      <button onClick={() => Status()}>Pesquisar</button>
    </div>
  );
}
