import React, { useState} from "react";
import PageDefault from "../../../components/PageDefault";
import { Link, useNavigate } from "react-router-dom";
import png from '../../../assets/img/logo.png'
import  api  from '../../../api';

function Registrar() {
    const [nome, setNome] = useState("")
    const [CPF, setCPF] = useState("")
    const [Rg, setRg] = useState("")
    const [CellNumber, setCellNumber] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    const response = await api.post("/usuario", {

        email: email,
        senha: password,
      });

      const res = await api.post("/pessoa", {
        Nome: nome,
        Cpf: CPF,
        Rg: Rg,
        CellNumber: CellNumber,
        email: email,
      });

      if (response.status === 200 && res.status === 200) {
        alert("Cadastro realizado com sucesso!");
        navigate("/");
      } else {
        alert("Erro ao realizar o cadastro, por favor tente novameante mais tarde");
      }
    }
    return(
        <PageDefault>
            <div className="container-login">
                <div className="wrap-login">
                <form className="login-form" onSubmit={handleSubmit}>
                        <span className="title">Criar Conta!!!</span>
                        <span className="title">
                            <img src={png} alt="" />
                        </span>

                        <div className="wrap-input">
                            <input
                             className={nome !== "" ? 'has-val input' : 'input'} 
                             type="text"
                             value={nome}
                             onChange={e => setNome(e.target.value)} 
                             />
                            <span className="focus-input" data-placeholder="Nome Completo"></span>

                        </div>

                        <div className="wrap-input">
                            <input
                             className={CPF !== "" ? 'has-val input' : 'input'} 
                             type="text"
                             value={CPF}
                             onChange={e => setCPF(e.target.value)} 
                             />
                            <span className="focus-input" data-placeholder="CPF"></span>

                        </div>

                        <div className="wrap-input">
                            <input
                             className={Rg !== "" ? 'has-val input' : 'input'} 
                             type="text"
                             value={Rg}
                             onChange={e => setRg(e.target.value)} 
                             />
                            <span className="focus-input" data-placeholder="Seu Rg"></span>

                        </div>

                        <div className="wrap-input">
                            <input
                             className={CellNumber !== "" ? 'has-val input' : 'input'} 
                             type="text"
                             value={CellNumber}
                             onChange={e => setCellNumber(e.target.value)} 
                             />
                            <span className="focus-input" data-placeholder="Seu Numero de celular"></span>

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
                            <span className="txt1">Já possui conta?</span>

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