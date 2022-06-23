import React, { useRef, useEffect, useState } from "react";
import PageDefault from "../../../components/PageDefault";
import png from '../../../assets/img/logo.png'
import './style.css'
import { Link } from "react-router-dom";

import api from '../../../Api';


export const Login = () => {

    // const userRef = useRef();
    // const errRef = useRef();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [errMsg, setErrMsg] = useState("")
    // const [success, setSuccess] = useState(false)

    // useEffect(() => {
    //     useRef.current.focus();
    // }, [])

    // useEffect(() => {
    //     setErrMsg('');
    // }, [email, password])

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log(email, password)
    //     setEmail('');
    //         setPassword('');
    //     setSuccess(true)
    // }

    const handleClickRegister = (values) => console.log(values);

    useEffect(() => {
        api.get('usuario')
        .then((res) => setEmail(res.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        })
    }, [])

    useEffect(() => {
        api.get('usuario')
        .then((res) => setPassword(res.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        })
    }, [])

    return (
        <PageDefault>
            <section>
                {/* <p ref={errRef} className={errMsg ? "errmsg":
                "offscreen"} aria-live="assertive">{errMsg}</p> */}
                <div className="container-login">
                    <div className="wrap-login">
                    {/* onSubmit={handleSubmit} */}
                        <form  className="login-form">
                            <span className="title">Bem Vindo!!!</span>
                            <span className="title">
                                <img src={png} alt="" />
                            </span>

                            <div className="wrap-input">
                                {/* <input
                                    //className={email !== "" ? 'has-val input' : 'input'}
                                    type="text"
                                    id="username"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                />
                                <span className="focus-input" data-placeholder="Email"></span> */}
                                <input
                                    className={password !== "" ? 'has-val input' : 'input'}
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />

                            </div>

                            <div className="wrap-input">
                            {/* <input
                                    //className={email !== "" ? 'has-val input' : 'input'}
                                    type="password"
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required
                                /> */}
                                <input
                                    className={password !== "" ? 'has-val input' : 'input'}
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <span className="focus-input" data-placeholder="Password"></span>

                            </div>

                            <div className="container-login-form-btn">
                                <button className="login-form-btn">Login</button>
                            </div>

                            <div className="text-center">
                                <span className="txt1">Não Possui Conta?</span>

                                <Link className="txt2" to="/Registrar">Criar Conta</Link>

                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </PageDefault>
    )
};
