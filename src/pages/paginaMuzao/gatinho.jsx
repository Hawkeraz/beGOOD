import "./gatinho.css"
import gatinho from "../../img/gatinho.svg"
import { useState } from "react";

export default function Gatinho() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    function login() {
        let verUser = 'hawkey';
        let verPass = 'banana';

        if (user === verUser) {
            if (pass === verPass) {
                alert('Logado')
            }
            else {
                alert('Senha Incorreta')
            }
        }
        else {
            alert('não logou aff')
        }
    }

    return (
        <div class="mainLogin">

            <div class="leftLogin">
                <h1>Faça login <br />DISGRAÇA</h1>
                <img src={gatinho} class="imagem" alt="Gastronauta" />
            </div>

            <div class="rightLogin">
                <div class="card">
                    <h1>Login</h1>
                    <div class="textField">
                        <label for="usuario">Usuário</label>
                        <input type="text" name="usuario" placeholder="Usuário" onChange={(e) => setUser(e.target.value)} />
                    </div>
                    <div class="textField">
                        <label for="senha">Senha</label>
                        <input type="password" name="senha" placeholder="Senha" onChange={(e) => setPass(e.target.value)} />
                    </div>
                    <button onClick={() => login()} class="btnLogin">Login</button>
                </div>
            </div>

        </div>
    );
}