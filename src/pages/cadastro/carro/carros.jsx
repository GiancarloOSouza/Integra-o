import React, { useState} from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import png from '../../../assets/img/logo.png'

function Registrar() {
    const [nome, setNome] = useState("")
    const [CPF, setCPF] = useState("")
    const [carro, setCarro] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    return(
        <PageDefault>
            <div className="container-login">
                <div className="wrap-login">
                <form className="login-form">
                        <span className="title">Criar Conta!!!</span>
                        <span className="title">
                            <img src={png} alt="" />
                        </span>

                        <div className="wrap-input">
                            <input
                             className={nome !== "" ? 'has-val input' : 'input'} 
                             type="nome"
                             value={nome}
                             onChange={e => setNome(e.target.value)} 
                             />
                            <span className="focus-input" data-placeholder="Nome Completo"></span>

                        </div>

                        <div className="wrap-input">
                            <input
                             className={CPF !== "" ? 'has-val input' : 'input'} 
                             type="CPF"
                             value={CPF}
                             onChange={e => setCPF(e.target.value)} 
                             />
                            <span className="focus-input" data-placeholder="CPF"></span>

                        </div>

                        <div className="wrap-input">
                            <input
                             className={carro !== "" ? 'has-val input' : 'input'} 
                             type="carro"
                             value={carro}
                             onChange={e => setCarro(e.target.value)} 
                             />
                            <span className="focus-input" data-placeholder="Modelo do Carro e Placa"></span>

                        </div>


                        <div className="wrap-input">
                            <input
                             className={email !== "" ? 'has-val input' : 'input'} 
                             type="email"
                             value={email}
                             onChange={e => setEmail(e.target.value)} 
                             />
                            <span className="focus-input" data-placeholder="Email"></span>

                        </div>

                        <div className="wrap-input">
                            <input 
                            className={password !== "" ? 'has-val input' : 'input'}
                            type="password" 
                            value = {password}
                            onChange={e => setPassword(e.target.value)} 
                            />
                            <span className="focus-input" data-placeholder="Password"></span>

                        </div>

                        <div className="container-login-form-btn">
                            <button className="login-form-btn">Criar Conta</button>
                        </div>

                        <div className="text-center">
                            <span className="txt1">Não Possui Conta?</span>

                            <Link className="txt2" to="/">Acessar com Email e senha</Link>

                        </div>

                    </form>

                </div>
            </div>
        </PageDefault>
    )
}

export default Registrar;
















// import React from "react";
// import PageDefault from "../../../components/PageDefault";
// import {Link} from 'react-router-dom'

// function CadastrarCliente() {
//     return(
//         <PageDefault>
//              <h1>Página de cadastro Cliente </h1>
        
//         <Link to ='/login'>
//             Vagas
//         </Link>
//         </PageDefault>

//     )
// };

// export default CadastrarCliente;